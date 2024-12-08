import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  Box,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import ButtonComp from "../ButtonComp";
import { Label } from "recharts";
import TitleComp from "../TitleComp";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: "500px", // Maksimum genişlik
          width: "90%", // Mobilde daha küçük genişlik
          borderRadius: "8px", // Köşe yuvarlatma
        },
      }}
    >
      <DialogTitle sx={{ pb: 0 }}>
        <TitleComp title="New Product" />
      </DialogTitle>
      <DialogContent sx={{ pb: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {" "}
          <List>
            <ListItem sx={{ justifyContent: "center" }}>
              {" "}
              {/* Image Upload */}
              <Box
                sx={{
                  border: "2px dashed #D0D3D9",
                  padding: "16px",
                  textAlign: "center",
                  borderRadius: "8px",
                  color: "#6B7280",
                  width: "81px",
                  height: "81px",
                }}
              />
              <Box
                sx={{
                  textAlign: "center",
                  color: "#6B7280", // Genel metin rengi
                  lineHeight: "1.5",
                  pl: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#858D9D",
                  }}
                >
                  Drag image here
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#858D9D",
                  }}
                >
                  or
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "#448DF2",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Browse image
                </Typography>
              </Box>
            </ListItem>
          </List>
          {/* Product Details */}
          <List sx={{ width: "100%" }}>
            {[
              { label: "Product Name", placeholder: "Enter product name" },
              { label: "Product ID", placeholder: "Enter product ID" },
              { label: "Category", placeholder: "Select product category" },
              { label: "Buying Price", placeholder: "Enter buying price" },
              { label: "Quantity", placeholder: "Enter product quantity" },
              { label: "Unit", placeholder: "Enter product unit" },
              { label: "Expiry Date", placeholder: "Enter expiry date" },
              {
                label: "Threshold Value",
                placeholder: "Enter threshold value",
              },
            ].map((item, index) => (
              <ListItem key={index} sx={{ p: 0, mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  {/* Label Alanı */}
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        color: "#48505E",
                        fontSize: "16px",
                        fontWeight: "500px",
                        textAlign: "left",
                        pr: 2,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Grid>

                  {/* TextField Alanı */}
                  <Grid item xs={8}>
                    <TextField
                      label={item.placeholder}
                      fullWidth
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        {/* Discard Button */}
        <ButtonComp
          onButtonClick={onClose}
          buttonText="Discard"
          variant="outlined"
          sx={{ color: "#6B7280", borderColor: "#D0D3D9" }}
        />

        {/* Add Product Button */}
        <ButtonComp
          onButtonClick={() => console.log("Add Product Clicked!")}
          buttonText="Add Product"
          variant="contained"
          sx={{ backgroundColor: "#0F50AA", color: "#FFFFFF" }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddProductModal;
