import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicMenu from "./Menu/Button";
import { Container } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginButton from "./Login/LoginButton";

const Navbar = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/roy9495/Mortgage-Calculator";
  };
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BasicMenu />
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
            <LoginButton />
        </Toolbar>
      </AppBar>
     </Box>
  );
};

export default Navbar;
