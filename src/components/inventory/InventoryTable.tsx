import React, { useState } from "react";
import styled from "styled-components";
import {
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import TitleComp from "../TitleComp";
import AddProductModal from "./AddProductModal";
import { useNavigate } from "react-router-dom";

export const rows = [
  {
    products: "Maggi",
    price: "430",
    quantity: "43 Packets",
    value: "12 Packets",
    expiryDate: new Date(2022, 11, 11), // Tarih formatı
    availability: "In-stock",
  },
  {
    products: "Bru",
    price: "257",
    quantity: "22 Packets",
    value: "12 Packets",
    expiryDate: new Date(2022, 11, 21),
    availability: "Out of stock",
  },
  {
    products: "Red Bull",
    price: "405",
    quantity: "36 Packets",
    value: "9 Packets",
    expiryDate: new Date(2022, 11, 5),
    availability: "In-stock",
  },
  {
    products: "Bourn Vita",
    price: "502",
    quantity: "14 Packets",
    value: "6 Packets",
    expiryDate: new Date(2022, 11, 8),
    availability: "Out of stock",
  },
  {
    products: "Horlicks",
    price: "₹530",
    quantity: "5 Packets",
    value: "5 Packets",
    expiryDate: new Date(2023, 0, 9),
    availability: "In-stock",
  },
  {
    products: "Harpic",
    price: "605",
    quantity: "10 Packets",
    value: "5 Packets",
    expiryDate: new Date(2023, 0, 9),
    availability: "In-stock",
  },
  {
    products: "Ariel",
    price: "₹408",
    quantity: "23 Packets",
    value: "7 Packets",
    expiryDate: new Date(2023, 11, 15),
    availability: "Out of stock",
  },
  {
    products: "Scotch Brite",
    price: "359",
    quantity: "43 Packets",
    value: "8 Packets",
    expiryDate: new Date(2023, 5, 6),
    availability: "In-stock",
  },
  {
    products: "Coca Cola",
    price: "205",
    quantity: "41 Packets",
    value: "10 Packets",
    expiryDate: new Date(2022, 10, 11),
    availability: "Low stock",
  },
];

// Styled Components
const InventoryContainer = styled.div`
  &.inventory {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .inventory__title {
      margin-bottom: 16px;
    }

    .inventory__table-container {
      margin-top: 16px;
      text-align: right;
    }

    .inventory__pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .pagination__button {
        text-transform: none;
        color: #48505e;
        border-color: #48505e;
      }

      .pagination__text {
        color: #48505e;
      }
    }

    .inventory__filters {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .filters__select,
      .filters__input {
        border-radius: 8px;
        background: #f9f9f9;
      }

      .filters__button {
        text-transform: none;
        font-weight: bold;
        border-radius: 8px;
        padding: 10px;
      }
    }
  }
`;

// Component
const InventoryTable = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [filterColumn, setFilterColumn] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFilter = () => {
    if (!filterColumn || !filterValue) return setFilteredRows(rows);
    setFilteredRows(
      rows.filter((row) =>
        String(row[filterColumn as keyof (typeof rows)[0]])
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      )
    );
  };

  const handleCLear = () => {
    setFilterColumn("");
    setFilterValue("");
    setFilteredRows(rows);
    setAnchorEl(null);
  };
  const handleRowClick = (product: any) => {
    navigate(`/inventoryDetail`); // Dinamik rota ile yönlendirme
  };
  return (
    <InventoryContainer className="inventory">
      <TitleComp
        title="Products"
        buttons={[
          {
            text: "Add Product",
            onClick: () => setOpenModal(true),
            variant: "contained",
          },
          {
            text: "Filters",
            onClick: (e) => setAnchorEl(e.currentTarget),
          },
        ]}
      />

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            padding: "16px",
            width: "300px",
            borderRadius: "8px",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{ marginBottom: "12px", textAlign: "center", fontWeight: "bold" }}
        >
          Filter Options
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Select
            onChange={(e) => setFilterColumn(e.target.value)}
            value={filterColumn}
            displayEmpty
            fullWidth
            sx={{
              padding: "8px",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <MenuItem value="" disabled>
              Select Column
            </MenuItem>
            <MenuItem value="products">Products</MenuItem>
            <MenuItem value="price">Buying Price</MenuItem>
            <MenuItem value="quantity">Quantity</MenuItem>
            <MenuItem value="value">Threshold Value</MenuItem>
            <MenuItem value="expiryDate">Expiry Date</MenuItem>
            <MenuItem value="availability">Availability</MenuItem>
          </Select>
          <TextField
            type="text"
            placeholder="Enter filter value"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          />
          <Button
            variant="contained"
            onClick={handleFilter}
            disabled={!filterColumn || !filterValue}
            fullWidth
            sx={{
              padding: "10px",
              fontWeight: "bold",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Apply Filter
          </Button>
          <Button
            variant="outlined"
            onClick={handleCLear}
            fullWidth
            sx={{
              padding: "10px",
              fontWeight: "bold",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Clear
          </Button>
        </Box>
      </Menu>

      <TableContainer className="inventory__table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell>Buying Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Threshold Value</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.products}>
                <TableCell
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleRowClick(row.products)} // Tıklama olayı
                >
                  {row.products}
                </TableCell>
                <TableCell>₹{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>
                  {row.expiryDate instanceof Date
                    ? row.expiryDate.toLocaleDateString()
                    : row.expiryDate}
                </TableCell>
                <TableCell
                  sx={{
                    color:
                      row.availability === "In-stock"
                        ? "green"
                        : row.availability === "Out of stock"
                        ? "red"
                        : "orange",
                  }}
                >
                  {row.availability}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="inventory__pagination">
        <Button className="pagination__button" variant="outlined">
          Previous
        </Button>
        <Typography className="pagination__text"> Page 1 of 9</Typography>
        <Button className="pagination__button" variant="outlined">
          Next
        </Button>
      </div>

      <AddProductModal open={openModal} onClose={() => setOpenModal(false)} />
    </InventoryContainer>
  );
};
export default InventoryTable;
