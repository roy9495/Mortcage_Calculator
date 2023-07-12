import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function LoginButton() {
  let navigate = useNavigate();
  const handleClick = () => {
    window.location.href = "/login";
  };
  return (
    <Tooltip title="Login" arrow>
      <Button color="inherit" onClick={handleClick}>
        <LoginIcon />
      </Button>
    </Tooltip>
  );
}
