import React from "react";
import styled from "styled-components";
import InventoryCard from "../components/inventory/InventoryCard";
import InventoryTable from "../components/inventory/InventoryTable";

const InventoryPage: React.FC = () => {
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
    <InventoryPage__Container>
      {/* Inventory Card */}
      <InventoryPage__CardContainer>
        <InventoryCard data={inventoryData} title="Overall Inventory" />
      </InventoryPage__CardContainer>

      {/* Inventory Table */}
      <InventoryPage__TableContainer>
        <InventoryTable />
      </InventoryPage__TableContainer>
    </InventoryPage__Container>
  );
};

export default InventoryPage;

/** Styled Components */
const InventoryPage__Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5%;
  margin-top: 16px;
`;

const InventoryPage__CardContainer = styled.div`
  width: 100%;
`;

const InventoryPage__TableContainer = styled.div`
  width: 100%;
  margin-top: 1.5%;
`;
