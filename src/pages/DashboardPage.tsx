import { Box, Grid } from "@mui/material";

import React from "react";
import CardOne from "../components/dashboard/CardOne";
import CardTwo from "../components/dashboard/CardTwo";
import TableComp from "../components/dashboard/TableComp";
import ListComp from "../components/dashboard/ListComp";
import ChartSales from "../components/dashboard/ChartSales";
import ChartOrder from "../components/dashboard/ChartOrder";

const DashboardPage = () => {
  const array = [
    {
      value: "₹ 832",
      label: "Sales",
      icon: "/icons/Sales.svg",
    },
    {
      value: "₹ 18,300",
      label: "Revenue",
      icon: "/icons/Revenue.svg",
    },
    {
      value: "₹  868",
      label: "Profit",
      icon: "/icons/Profit.svg",
    },
    {
      value: "₹ 17,432",
      label: "Cost",
      icon: "/icons/Cost.svg",
    },
  ];
  const arrayPurchase = [
    {
      value: "82",
      label: "Purchase",
      icon: "/icons/Purchase.svg",
    },
    {
      value: "₹ 13,573",
      label: "Cost",
      icon: "/icons/Cost.svg",
    },
    {
      value: "5",
      label: "Cancel",
      icon: "/icons/Cancel.svg",
    },
    {
      value: "₹ 17,432",
      label: "Return",
      icon: "/icons/Profit.svg",
    },
  ];
  const data = [
    {
      value: "868",
      label: "Quantity in Hand",
      icon: "/icons/Quantity.svg",
    },
    {
      value: "200",
      label: "To be received",
      icon: "/icons/Ontheway.svg",
    },
  ];
  const dataSummary = [
    {
      value: "31",
      label: "Number of Suppliers",
      icon: "/icons/Supplierss.svg",
    },
    {
      value: "21",
      label: "Number of Categories",
      icon: "/icons/Categories.svg",
    },
  ];
  return (
    <>
      <Box>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item sm={8} xs={12}>
            <CardOne array={array} titles="Sales Overview" />
          </Grid>

          <Grid item sm={4} xs={12}>
            <CardTwo data={data} titles="Inventory Summary" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: "1.5%" }}>
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12}>
            <CardOne array={arrayPurchase} titles="Purchase Overview" />
          </Grid>

          <Grid item sm={4} xs={12}>
            <CardTwo data={dataSummary} titles="Product Summary" />
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ mt: "1.5%" }}>
        <Grid container spacing={2} sx={{ height: "100%", width: "100%" }}>
          <Grid item sm={8} xs={12}>
            <ChartSales />
          </Grid>
          <Grid item sm={4} xs={12}>
            <ChartOrder />
          </Grid>
        </Grid>
      </Box> */}
      <Box sx={{ mt: "1.5%" }}>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{ height: "100%", width: "100%" }}
        >
          <Grid item sm={8} xs={12}>
            <TableComp />
          </Grid>
          <Grid item sm={4} xs={12}>
            <ListComp />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardPage;
