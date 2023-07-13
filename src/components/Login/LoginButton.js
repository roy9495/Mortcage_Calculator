import * as React from "react";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <Tooltip title="Login" arrow>
      <Link to="/login">
      <Button color="inherit" onClick={login}>
        <LoginIcon />
      </Button>
      </Link>
    </Tooltip>
  );
}
