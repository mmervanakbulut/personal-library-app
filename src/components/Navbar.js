import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "white" : "black",
        color: theme.palette.mode === "dark" ? "black" : "white",
        borderRadius: 10,
        marginTop: 1,
      }}
      position="static"
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          PERSONAL LIBRARY
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            borderRadius: 10,
            ":hover": {
              backgroundColor: theme.palette.mode === "dark" ? "lightgray" : "lightslategray",
            },
          }}
        >
          HOME
        </Button>
        {token ? (
          <>
            <Button
              color="inherit"
              onClick={handleMenuOpen}
              sx={{
                borderRadius: 10,
                ":hover": {
                  backgroundColor: theme.palette.mode === "dark" ? "lightgray" : "lightslategray",
                },
                display: "flex",
                alignItems: "center",
              }}
            >
              LIBRARY OPERATIONS
              {anchorEl ? (
                <ExpandLessIcon sx={{ ml: 1 }} />
              ) : (
                <ExpandMoreIcon sx={{ ml: 1 }} />
              )}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                component={Link}
                to="/kitaplarim"
                onClick={handleMenuClose}
              >
                My Books
              </MenuItem>
              <MenuItem
                component={Link}
                to="/kitap-ekle"
                onClick={handleMenuClose}
              >
                Add Book
              </MenuItem>
              <MenuItem
                component={Link}
                to="/yazar-ekle"
                onClick={handleMenuClose}
              >
                Add Author
              </MenuItem>
              <MenuItem
                component={Link}
                to="/yayinevi-ekle"
                onClick={handleMenuClose}
              >
                Add Publisher
              </MenuItem>
            </Menu>
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{
                borderRadius: 10,
                ":hover": {
                  backgroundColor: theme.palette.mode === "dark" ? "lightgray" : "lightslategray",
                },
              }}
            >
              LOGOUT
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                borderRadius: 10,
                ":hover": {
                  backgroundColor: theme.palette.mode === "dark" ? "lightgray" : "lightslategray",
                },
              }}
            >
              LOGIN
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/signup"
              sx={{
                borderRadius: 10,
                ":hover": {
                  backgroundColor: theme.palette.mode === "dark" ? "lightgray" : "lightslategray",
                },
              }}
            >
              SIGN UP
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
