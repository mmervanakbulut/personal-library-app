import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Default = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 3 }}>
      <Grid item xs={12} size={6}>
        <Box
          sx={{
            p: 2,
            backgroundColor: "snow",
            height: "100%",
            borderRadius: 4,
            marginTop: 1,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Default Page
          </Typography>
          <Typography variant="body1">
            This is the default page content.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} size={6}>
        <Box
          sx={{
            p: 2,
            backgroundColor: "lightblue",
            height: "100%",
            borderRadius: 4,
            marginTop: 1,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Right Side
          </Typography>
          <Typography variant="body1">
            This is the right side content.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Default;
