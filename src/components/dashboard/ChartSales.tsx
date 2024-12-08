import React from "react";
import styled from "styled-components";
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

const ChartSales: React.FC = () => {
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

  const handleClilk = () => alert("Weekly!");

  return (
    <ChartSales__Container>
      <TitleComp
        title="Sales & Purchase"
        buttons={[
          {
            text: "Weekly",
            onClick: handleClilk,
            icon: "../../icons/Calendar.svg",
          },
        ]}
      />
      <ChartSales__ChartWrapper>
        <BarChart
          width={500}
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
      </ChartSales__ChartWrapper>
    </ChartSales__Container>
  );
};

export default ChartSales;

/** Styled Components */

const ChartSales__Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const ChartSales__ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%; /* Mobil uyumluluk */

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto; /* Grafik yatay kaydırma */
  }
`;
