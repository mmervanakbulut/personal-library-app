import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const theme = useTheme();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7168/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName, surname, email, password }),
      });

      if (response.ok) {
        setSnackbarMessage("Signup successful");
        setSnackbarSeverity("success");
      } else {
        setSnackbarMessage("Signup failed");
        setSnackbarSeverity("error");
      }
    } catch (error) {
      setSnackbarMessage("Error: " + error.message);
      setSnackbarSeverity("error");
    } finally {
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
          boxShadow: 5,
          borderRadius: 10,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          SignUp
        </Typography>
        <TextField
          label="Name"
          type="name"
          value={userName}
          onChange={handleNameChange}
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
          label="Surname"
          type="surname"
          value={surname}
          onChange={handleSurnameChange}
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
          endIcon={<PersonAddIcon />}
          sx={{ mt: 2, background: "orange" }}
        >
          SignUp
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

export default SignUp;
