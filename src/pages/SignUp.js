import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");

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
          backgroundColor: "revert",
          border: 1,
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
        />
        <TextField
          label="Surname"
          type="surname"
          value={surname}
          onChange={handleSurnameChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, background: "#263238" }}
        >
          SignUp
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
