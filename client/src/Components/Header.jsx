import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box>
        <Typography
          variant="h2"
          fontWeight={"bold"}
          color={theme.palette.secondary[100]}
          sx={{ mb: "5px" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={theme.palette.secondary[300]}>
          {subtitle}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Header;
