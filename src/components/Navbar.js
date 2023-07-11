import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BasicMenu from "./Menu/Button";
import { Container } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/roy9495/Mortgage-Calculator";
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BasicMenu />
          </IconButton>
          <Container maxWidth="md">
            <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
              Mortgage Calculator
            </Typography>
          </Container>
          <Tooltip title="Github" arrow>
            <Button onClick={handleClick}>
              <GitHubIcon fontSize="medium" color="action" />
            </Button>
          </Tooltip>
          <Tooltip title="Login" arrow>
            <Button color="inherit" >
              <LoginIcon />
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
