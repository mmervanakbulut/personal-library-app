import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyBooks from "./pages/MyBooks";
import AddBook from "./pages/AddBook";
import AddAuthor from "./pages/AddAuthor";
import AddPublisher from "./pages/AddPublisher";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid2";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid size={2}></Grid>
      <Grid size={8}>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Private Routes */}
          <Route
            path="/kitaplarim"
            element={
              <PrivateRoute>
                <MyBooks />
              </PrivateRoute>
            }
          />
          <Route
            path="/kitap-ekle"
            element={
              <PrivateRoute>
                <AddBook />
              </PrivateRoute>
            }
          />
          <Route
            path="/yazar-ekle"
            element={
              <PrivateRoute>
                <AddAuthor />
              </PrivateRoute>
            }
          />
          <Route
            path="/yayinevi-ekle"
            element={
              <PrivateRoute>
                <AddPublisher />
              </PrivateRoute>
            }
          />

          {/* Fallback for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Grid>
      <Grid size={2}></Grid>
    </Grid>
  );
}

export default App;
