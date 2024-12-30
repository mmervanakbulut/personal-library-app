import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");
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
      const response = await fetch("https://localhost:7168/Auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userName, surname }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log("Signup successful");
      } else {
        // Handle signup error
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          sx={{ mt: 2, background: "orange" }}
        >
          SignUp
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
