import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const OverviewDetails = () => {
  return (
    <>
      <Grid container spacing={2}>
        {/* Sol Alan */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#48505E",
              fontSize: "14px",
            }}
          >
            Primary Details
          </Typography>
          {[
            { label: "Product name", value: "Maggi" },
            { label: "Product ID", value: "456567" },
            { label: "Product category", value: "Instant food" },
            { label: "Expiry Date", value: "13/4/23" },
            { label: "Threshold Value", value: "12" },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex", // Yan yana düzen
                justifyContent: "flex-start", // İçeriği başlangıçtan hizalar
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#858D9D",
                  width: "50%", // Eşit genişlik için
                  textAlign: "left",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#5D6679",
                  width: "50%", // Eşit genişlik için
                  textAlign: "left", // Ortalamayı korur
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#48505E",
              fontSize: "14px",
            }}
          >
            Supplier Details
          </Typography>
          {[
            { label: "Supplier name", value: "Ronald Martin" },
            { label: "Contact Number", value: "98789 86757" },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#858D9D",
                  width: "50%",
                  textAlign: "left",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#5D6679",
                  width: "50%",
                  textAlign: "left",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Sağ Alan */}
        <Grid item xs={12} md={4} justifyContent="center">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                border: "1px dashed #D0D3D9",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                p: 2,
                mb: 3,

                borderRadius: 2,
                width: "170px",
                height: "170px",
              }}
            >
              <img
                src="../../icons/maggi.svg" // Görsel için doğru yolu girin
                alt="Product"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </div>

          <Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography sx={{ fontSize: "14px", color: "#858D9D" }}>
                Opening Stock
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold", color: "#5D6679" }}
              >
                40
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography sx={{ fontSize: "14px", color: "#858D9D" }}>
                Remaining Stock
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold", color: "#5D6679" }}
              >
                34
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography sx={{ fontSize: "14px", color: "#858D9D" }}>
                On the way
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold", color: "#5D6679" }}
              >
                15
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography sx={{ fontSize: "14px", color: "#858D9D" }}>
                Threshold value
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold", color: "#5D6679" }}
              >
                12
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box>
            {/* Stock Locations */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",

                mb: 1,
                color: "#48505E",
                fontSize: "14px",
              }}
            >
              Stock Locations
            </Typography>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#F0F1F3" }}>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#5D6679",
                      p: 1,
                    }}
                  >
                    Store Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#5D6679",
                      textAlign: "end",
                      p: 1,
                    }}
                  >
                    Stock in hand
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontSize: "14px", color: "#5D6679", px: 0 }}>
                    Sulur Branch
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      color: "#1366D9",
                      px: 1,
                      textAlign: "end",
                    }}
                  >
                    15
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "14px", color: "#5D6679", px: 0 }}>
                    Singanallur Branch
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "14px",
                      color: "#1366D9",
                      px: 1,
                      textAlign: "end",
                    }}
                  >
                    19
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OverviewDetails;
