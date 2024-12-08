import React from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  TextField,
  List,
  ListItem,
} from "@mui/material";
import ButtonComp from "../ButtonComp";
import TitleComp from "../TitleComp";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <StyledDialogTitle>
        <TitleComp title="New Product" />
      </StyledDialogTitle>

      <StyledDialogContent>
        {/* Image Upload Section */}
        <ImageUploadWrapper>
          <ImageUploadBox />
          <UploadTextWrapper>
            <UploadText>Drag image here</UploadText>
            <UploadText>or</UploadText>
            <BrowseLink>Browse image</BrowseLink>
          </UploadTextWrapper>
        </ImageUploadWrapper>

        {/* Product Details Section */}
        <List>
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
            <ListItem key={index} className="add-product-modal__list-item">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel>{item.label}</InputLabel>
                </Grid>
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
      </StyledDialogContent>

      <StyledDialogActions>
        <ButtonComp
          onButtonClick={onClose}
          buttonText="Discard"
          variant="outlined"
        />
        <ButtonComp
          onButtonClick={() => console.log("Add Product Clicked!")}
          buttonText="Add Product"
          variant="contained"
        />
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default AddProductModal;

// Styled Components
const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    max-width: 500px;
    width: 90%;
    border-radius: 8px;
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  padding-bottom: 0;
`;

const StyledDialogContent = styled(DialogContent)`
  padding-bottom: 0;
  justify-content: center;
`;

const ImageUploadWrapper = styled(ListItem)`
  display: flex;
  justify-content: center !important; /* Varsayılan stili geçersiz kılar */
  gap: 16px;
  margin-bottom: 16px;
`;

const ImageUploadBox = styled.div`
  border: 2px dashed #d0d3d9;
  width: 81px;
  height: 81px;
  border-radius: 8px;
`;

const UploadTextWrapper = styled.div`
  text-align: center;
  line-height: 1.5;
  color: #6b7280;
`;

const UploadText = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #858d9d;
`;

const BrowseLink = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #448df2;
  cursor: pointer;
`;

const InputLabel = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: #48505e;
`;

const StyledDialogActions = styled(DialogActions)`
  padding: 8px 8px 16px 16px !important;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
