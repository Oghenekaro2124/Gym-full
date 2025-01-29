// import React from "react";
// import { Box, Typography, Stack } from "@mui/material";

// import Logo from "../assets/images/Logo-1.png";

// const Footer = () => {
//   return (
//     <Box mt="80x" bgcolor="#fff3f4">
//       <Stack gap="40px" alignItems="center" px="40px" pt="24px">
//         <img src={Logo} alt="logo" width="200px" height="40px" />
//         <Typography variant="h5" pb="40px" mt="20px">
//           © 2025 Gym Exercises. Made By Kelvin
//         </Typography>
//       </Stack>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#FF2625",
        color: "#FFF",
        textAlign: "center",
        py: 3,
      }}
    >
      <Typography variant="body1">
        &copy; 2025 Fitness Hub. All Rights Reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href="/terms" underline="none" sx={{ color: "#FFF", mx: 1 }}>
          Terms of Service
        </Link>
        |
        <Link href="/privacy" underline="none" sx={{ color: "#FFF", mx: 1 }}>
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
