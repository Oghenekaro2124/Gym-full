import { useEffect, useState } from "react";
import { Typography, Button, Box, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "../lib/APIs/userApis";
const Verification = () => {
  const navigate = useNavigate();
  const [verifyUser, { isLoading, error, isError, isSuccess }] =
    useVerifyUserMutation();
  // State for input fields
  const [verificationCode, setVerificationCode] = useState("");

  // State for error handling
  const [errorMessage, setErrorMessage] = useState("");

  // Handle verification submission
  const handleVerify = async () => {
    if (verificationCode.trim() === "") {
      setErrorMessage("Verification code cannot be empty.");

      return;
    }

    await verifyUser({ verificationToken: verificationCode });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Verification Form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
            Account Verification
          </Typography>

          {/* Error Message */}
          {(isError || errorMessage) && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error?.data?.error || errorMessage || "An error occurred."}
            </Alert>
          )}

          {/* Input Field */}
          <TextField
            label="Enter Verification Code"
            variant="outlined"
            fullWidth
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            sx={{ background: "#FF2625", color: "#FFF", width: "100%" }}
            onClick={handleVerify}
            disabled={isLoading}
          >
            {isLoading ? "Verifying" : "Verify"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Verification;
