import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Home = () => {
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
            Bıraktığı İz
          </Typography>
          <Typography variant="body1">
            Derin izler bıraktı bazıları; bazıları yorgun bıraktı, kimisi yarı
            yolda bıraktı. Çok güzel bir tebessüm bıraktı bazısı. Ne güzel
            izelerdi her biri. O izlerin derinliğinde kıvrandım bazen, bazen de
            o izleri silip atmak istedim. Kendimi buldum o sayfalarda, istemedim
            o ben olayım ama beni anlatıyordu sanki. Evet o anlattığı sözde
            karakteri içimde yaşıyor buludum en sonunda. İstemeden de olsa bir
            yerlerde yaşattım onu... Sana seni anlattı o :)
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

export default Home;
