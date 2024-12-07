import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
const InformationPages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "7%",
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: 400, md: 600 },
          py: "5%",
          textAlign: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: 4, // Kartın köşelerini yuvarlar
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Hafif gölge
        }}
      >
        <CardContent>
          {/* Logo */}
          <Box
            component="img"
            src="../icons/logo.svg" // Logonuzun doğru yolunu buraya koyun
            alt="Logo"
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              marginBottom: 2,
            }}
          />
          {/* Metin */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#383E49", fontSize: "28px" }}
          >
            Yapım Aşamasında
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default InformationPages;
