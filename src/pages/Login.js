import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://localhost:7168/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setSnackbarMessage("Login successful");
        setSnackbarSeverity("success");
        navigate("/kitaplarim");
      } else {
        setSnackbarMessage("Login failed");
        setSnackbarSeverity("error");
      }
    } catch (error) {
      setSnackbarMessage("Error: " + error.message);
      setSnackbarSeverity("error");
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          padding: 5,
          margin: 4,
          backgroundColor: theme.palette.mode === "dark" ? "black" : "revert",
          color: theme.palette.mode === "dark" ? "white" : "black",
          borderColor: "black",
          boxShadow: 5,
          borderRadius: 10,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: theme.palette.mode === "dark" ? "white" : "black" },
          }}
          InputProps={{
            style: { color: theme.palette.mode === "dark" ? "white" : "black" },
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: theme.palette.mode === "dark" ? "white" : "black" },
          }}
          InputProps={{
            style: { color: theme.palette.mode === "dark" ? "white" : "black" },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={!loading && <LoginIcon />}
          sx={{ mt: 2, background: "orange" }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
