import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import VerificationPage from "./pages/verificationPage";
const App = () => {
  return (
    <Box sx={{ width: { xl: "1488px" }, margin: "auto" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/verify" element={<VerificationPage />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
