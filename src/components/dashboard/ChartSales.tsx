import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import TitleComp from "../TitleComp";
const ChartSales = () => {
  const data = [
    { month: "Jan", Purchase: 50000, Sales: 40000 },
    { month: "Feb", Purchase: 60000, Sales: 50000 },
    { month: "Mar", Purchase: 40000, Sales: 30000 },
    { month: "Apr", Purchase: 45000, Sales: 35000 },
    { month: "May", Purchase: 50000, Sales: 40000 },
    { month: "Jun", Purchase: 48000, Sales: 42000 },
    { month: "Jul", Purchase: 40000, Sales: 30000 },
    { month: "Aug", Purchase: 45000, Sales: 35000 },
    { month: "May", Purchase: 50000, Sales: 40000 },
    { month: "Jun", Purchase: 48000, Sales: 42000 },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          p: 1,
          py: 2,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflowY: "auto",
        }}
      >
        <TitleComp
          title="Sales & Purchase"
          iconButton="Weekly"
          onButtonClicks={() => console.log("See All clicked!")}
        />

        {/* Chart */}
        <Box sx={{ width: "100%", justifyContent: "center" }}>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Purchase" fill="#8884d8" radius={[10, 10, 0, 0]} />
            <Bar dataKey="Sales" fill="#82ca9d" radius={[10, 10, 0, 0]} />
          </BarChart>
        </Box>
      </Box>
    </>
  );
};

export default ChartSales;
