import React from "react";
import { Box, Typography } from "@mui/material";

import TitleComp from "../TitleComp";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const ChartOrder = () => {
  const data = [
    { month: "Jan", Ordered: 2000, Delivered: 3000 },
    { month: "Feb", Ordered: 1500, Delivered: 4000 },
    { month: "Mar", Ordered: 1800, Delivered: 2500 },
    { month: "Apr", Ordered: 2200, Delivered: 3800 },
    { month: "May", Ordered: 2700, Delivered: 4200 },
  ];
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
        <TitleComp title="Order Summary" />
        {/* Grafik */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
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
            <Line
              type="monotone"
              dataKey="Ordered"
              stroke="#D0A26B"
              strokeWidth={2}
              dot={{ r: 4, fill: "#D0A26B" }}
              fillOpacity={0.1}
              fill="rgba(208, 162, 107, 0.3)"
            />
            <Line
              type="monotone"
              dataKey="Delivered"
              stroke="#74B0FA"
              strokeWidth={2}
              dot={{ r: 4, fill: "#74B0FA" }}
              fillOpacity={0.1}
              fill="rgba(116, 176, 250, 0.3)"
            />
          </LineChart>
        </ResponsiveContainer>
        {/* Legend */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            overflowY: "auto",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "#D0A26B",
                borderRadius: "50%",
              }}
            />
            <Typography sx={{ fontSize: 14, color: "#5D6679" }}>
              Ordered
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "#74B0FA",
                borderRadius: "50%",
              }}
            />
            <Typography sx={{ fontSize: 14, color: "#5D6679" }}>
              Delivered
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChartOrder;
