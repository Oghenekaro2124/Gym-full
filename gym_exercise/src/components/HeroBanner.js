// import React from "react";
// import { Box, Stack, Typography, Button } from "@mui/material";

// import HeroBannerImage from "../assets/images/banner.png";
// const HeroBanner = () => {
//   return (
//     <Box
//       sx={{
//         mt: { lg: "212px", xs: "70px" },
//         ml: { sm: "50px" },
//       }}
//       position="relative"
//       p="20px"
//     >
//       <Typography color="#FF2625" fontWeight="600" fontSize="26px">
//         Fitness Club
//       </Typography>
//       <Typography
//         fontWeight={700}
//         sx={{ fontSize: { lg: "44px", xs: "40px" } }}
//         mb="23px"
//         mt="30px"
//       >
//         Sweat, Smile <br /> and Repeat
//       </Typography>
//       <Typography fontSize="22px" lineheight="35px" mb={4}>
//         Check out the most effective exercises
//       </Typography>
//       <Button
//         variant="contained"
//         color="error"
//         href="#exercises"
//         sx={{ backgroundColor: "#ff2625", padding: "10px" }}
//       >
//         Explore Exercises
//       </Button>
//       <Typography
//         fontWeight={600}
//         color="ff2625"
//         sx={{
//           opacity: 0.1,
//           display: { lg: "block", xs: "none" },
//         }}
//         fontSize="200px"
//       >
//         Exercise
//       </Typography>
//       <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
//     </Box>
//   );
// };

// export default HeroBanner;

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroBannerImage from "../assets/images/hero-banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #FFFAFB, #FF2625)",
        height: "400px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        color: "#FFF",
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to Fitness Hub
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          Find the best exercises to stay fit every day!
        </Typography>
        {/* <Button
          variant="contained"
          sx={{
            background: "#FFF",
            color: "#FF2625",
            fontWeight: "bold",
          }}
        >
          Explore Exercises
        </Button> */}
      </Box>
      <Box>
        <img
          src={heroBannerImage}
          alt="Hero Banner"
          style={{ maxWidth: "400px" }}
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;
