import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Modal,
  TextField,
  Alert,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCreateNewUserMutation,
  useGetCurrentUserMutation,
} from "../lib/APIs/userApis";
import {
  useLoginUserMutation,
  useLogoutUserMutation,
} from "../lib/APIs/authApis";

const Navbar = () => {
  const navigate = useNavigate();

  const [createNewUser, { isLoading, error, isError, isSuccess }] =
    useCreateNewUserMutation();
  const [
    loginUser,
    {
      isLoading: loginLoading,
      error: loginError,
      isError: loginIsError,
      isSuccess: loginSuccess,
    },
  ] = useLoginUserMutation();

  const [getCurrentUser] = useGetCurrentUserMutation();

  const [logoutUser] = useLogoutUserMutation();

  const { user } = useSelector((state) => state.userState);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (isSuccess) {
      handleSignUpClose();
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (loginSuccess) {
      handleLoginClose();
      navigate("/");
    }
  }, [loginSuccess, navigate]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  const handleSignUpOpen = () => setOpenSignUp(true);
  const handleSignUpClose = () => {
    setOpenSignUp(false);
    setFormError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpSubmit = async () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setFormError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    await createNewUser(formData);
  };

  const handleSignInSubmit = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      setFormError("All fields are required.");
      return;
    }

    await loginUser(formData);
  };

  const onLogoutUser = () => {
    logoutUser();
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#FF2625" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontFamily: "Josefin Sans", fontWeight: "bold" }}
          >
            Fitness Hub
          </Typography>
          {!user && (
            <Box>
              <Button
                color="inherit"
                sx={{ fontWeight: "bold" }}
                onClick={handleLoginOpen}
              >
                Login
              </Button>
              <Button
                color="inherit"
                sx={{ fontWeight: "bold", border: "1px solid white", ml: 2 }}
                onClick={handleSignUpOpen}
              >
                Sign Up
              </Button>
            </Box>
          )}

          {user && (
            <Box>
              <Button
                color="inherit"
                sx={{ fontWeight: "bold" }}
                onClick={onLogoutUser}
              >
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Login Modal */}
      <Modal open={openLogin} onClose={handleLoginClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Login
          </Typography>
          {loginIsError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {loginError?.data?.error ||
                "Something went wrong. Please try again."}
            </Alert>
          )}
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            sx={{ background: "#FF2625", color: "#FFF", width: "100%" }}
            onClick={handleSignInSubmit}
          >
            {loginLoading ? "Please Wait..." : "Login"}
          </Button>
        </Box>
      </Modal>

      {/* Sign Up Modal */}
      <Modal open={openSignUp} onClose={handleSignUpClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sign Up
          </Typography>
          {formError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {formError}
            </Alert>
          )}
          {isError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error?.data?.error || "Something went wrong. Please try again."}
            </Alert>
          )}
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            sx={{ background: "#FF2625", color: "#FFF", width: "100%" }}
            onClick={handleSignUpSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
