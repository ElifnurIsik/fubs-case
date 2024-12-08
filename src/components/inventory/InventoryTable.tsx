import { Box, Button, TablePagination, Typography } from "@mui/material";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TitleComp from "../TitleComp";
import AddProductModal from "./AddProductModal";
function createData(
  products: string,
  price: number,
  quantity: string,
  value: string,
  expiryDate: Date,
  availability: string
) {
  return { products, price, quantity, value, expiryDate, availability };
}

const rows = [
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

const InventoryTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = rows.length;

  // Sayfa değiştirme işlemi
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Gösterilecek satırları hesaplama
  const displayedRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const handleAddProduct = () => setOpenModal(true); // Modalı aç
  const handleCloseModal = () => setOpenModal(false); // Modalı kapat
  const handleFilters = () => alert("Filters Clicked!");
  const handleDownloadAll = () => alert("Download All Clicked!");
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          p: 1,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TitleComp
          title="Products"
          buttons={[
            {
              text: "Add Product",
              onClick: handleAddProduct,
              variant: "contained",
            },
            {
              text: "Filters",
              onClick: handleFilters,
              icon: "../../icons/Filters.svg",
            },
            {
              text: "Download all",
              onClick: handleDownloadAll,
            },
          ]}
        />

        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "14px", color: "#5D6679" }}>
                  Products
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  Buying Price
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  Threshold Value
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  Expiry Date
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "14px", color: "#5D6679" }}
                >
                  Availability
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.products}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "14px", color: "#5D6679" }}
                  >
                    {row.products}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "14px", color: "#5D6679" }}
                  >
                    ₹{row.price}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "14px", color: "#5D6679" }}
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "14px", color: "#5D6679" }}
                  >
                    {row.value}
                  </TableCell>
                  <TableCell sx={{ fontSize: "14px", color: "#5D6679" }}>
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
        {/* Pagination */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={handlePrevious}
            disabled={page === 1}
            sx={{
              color: "#48505E",
              textTransform: "none",
              borderColor: "#48505E",
            }}
          >
            Previous
          </Button>
          <Typography sx={{ color: "#48505E" }}>
            Page {page} of {totalPages}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleNext}
            disabled={page === totalPages}
            sx={{
              color: "#48505E",
              textTransform: "none",
              borderColor: "#48505E",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
      {/* Add Product Modal */}
      <AddProductModal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default InventoryTable;
