import { Box } from "@mui/material";
import React from "react";
import InventoryCard from "../components/inventory/InventoryCard";
import InventoryTable from "../components/inventory/InventoryTable";

const InventoryPage = () => {
  const inventoryData = [
    {
      title: "Categories",
      value: 14,
      description: "Last 7 days",
      color: "#1570EF",
    },
    {
      title: "Total Products",
      value: 868,
      price: "₹25000",
      description: "Last 7 days",
      type: "Revenue",
      color: "#E19133",
    },
    {
      title: "Top Selling",
      value: 5,
      price: "₹2500",
      description: "Last 7 days",
      type: "Cost",
      color: "#845EBC",
    },
    {
      title: "Low Stocks",
      value: 12,
      price: "2",
      description: "Ordered",
      type: "Not in stock",
      color: "#F36960",
    },
  ];
  return (
    <>
      <Box>
        <InventoryCard data={inventoryData} title="Overall Inventory" />
      </Box>
      <Box sx={{ mt: "1.5%" }}>
        {" "}
        <InventoryTable />{" "}
      </Box>
    </>
  );
};

export default InventoryPage;
