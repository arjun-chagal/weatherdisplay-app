import React from "react";
import { AppBar, Toolbar, Typography, Avatar, IconButton, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <AppBar
      position="fixed" 
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        width: "100vw", 
        height: "96px",
        top: 0,
        left: 0,
        overflow: "visible", // dropdown is not clipped
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 32px",
          height: "100%",
          pr: 4, 
        }}
      >
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          <span style={{ color: "#007AFF", fontSize: "22px" }}>*</span> Weather App
        </Typography>

        {/*Profile Picture, Dropdown */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", pr: 2 }}>
          <Avatar
            alt="Profile"
            src="/path-to-placeholder-image.jpg"
            sx={{ width: 40, height: 40 }}
          />
          <IconButton sx={{ padding: 10 }}>
            <ArrowDropDownIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
