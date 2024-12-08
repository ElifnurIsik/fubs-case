import React, { useState } from "react";
import styled from "styled-components";
import TitleComp from "../TitleComp";
import AddProductModal from "./AddProductModal";

const InventoryTable: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

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
  const totalPages = rows.length;

  // Sayfa değiştirme işlemleri
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  // Gösterilecek satırlar
  const displayedRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleAddProduct = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <InventoryTable__Container>
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
            onClick: () => alert("Filters Clicked!"),
            icon: "../../icons/Filters.svg",
          },
          {
            text: "Download all",
            onClick: () => alert("Download All Clicked!"),
          },
        ]}
      />

      <InventoryTable__TableContainer>
        <table className="inventory-table">
          <thead className="inventory-table__head">
            <tr className="inventory-table__row">
              <th className="inventory-table__cell">Products</th>
              <th className="inventory-table__cell">Buying Price</th>
              <th className="inventory-table__cell">Quantity</th>
              <th className="inventory-table__cell">Threshold Value</th>
              <th className="inventory-table__cell">Expiry Date</th>
              <th className="inventory-table__cell">Availability</th>
            </tr>
          </thead>
          <tbody className="inventory-table__body">
            {displayedRows.map((row, index) => (
              <tr className="inventory-table__row" key={index}>
                <td className="inventory-table__cell">{row.products}</td>
                <td className="inventory-table__cell">₹{row.price}</td>
                <td className="inventory-table__cell">{row.quantity}</td>
                <td className="inventory-table__cell">{row.value}</td>
                <td className="inventory-table__cell">
                  {row.expiryDate.toLocaleDateString()}
                </td>
                <td
                  className={`inventory-table__cell ${
                    row.availability === "In-stock"
                      ? "inventory-table__availability--in-stock"
                      : row.availability === "Out of stock"
                      ? "inventory-table__availability--out-of-stock"
                      : "inventory-table__availability--low-stock"
                  }`}
                >
                  {row.availability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </InventoryTable__TableContainer>

      <InventoryTable__Pagination>
        <button
          className="inventory-table__pagination-button"
          onClick={handlePrevious}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="inventory-table__pagination-info">
          Page {page} of {totalPages}
        </span>
        <button
          className="inventory-table__pagination-button"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </InventoryTable__Pagination>

      <AddProductModal open={openModal} onClose={handleCloseModal} />
    </InventoryTable__Container>
  );
};

export default InventoryTable;

/** Styled Components */
const InventoryTable__Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InventoryTable__TableContainer = styled.div`
  margin-top: 16px;

  .inventory-table {
    width: 100%;
    border-collapse: collapse;

    &__row {
      border-bottom: 1px solid #e0e0e0;
    }

    &__cell {
      padding: 16px;
      font-size: 14px;
      color: #5d6679;
      text-align: left;

      &:first-child {
        font-weight: bold;
      }

      &--in-stock {
        color: green;
      }

      &--out-of-stock {
        color: red;
      }

      &--low-stock {
        color: orange;
      }
    }
  }
`;

const InventoryTable__Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .inventory-table__pagination-button {
    background: none;
    border: 1px solid #48505e;
    color: #48505e;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .inventory-table__pagination-info {
    font-size: 14px;
    color: #48505e;
  }
`;
