import React from "react";
import styled from "styled-components";
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

const ChartOrder: React.FC = () => {
  const data = [
    { month: "Jan", Ordered: 2000, Delivered: 3000 },
    { month: "Feb", Ordered: 1500, Delivered: 4000 },
    { month: "Mar", Ordered: 1800, Delivered: 2500 },
    { month: "Apr", Ordered: 2200, Delivered: 3800 },
    { month: "May", Ordered: 2700, Delivered: 4200 },
  ];

  return (
    <ChartOrder__Container>
      <TitleComp title="Order Summary" />
      <ChartOrder__ChartWrapper>
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
      </ChartOrder__ChartWrapper>
      <ChartOrder__Legend>
        <ChartOrder__LegendItem>
          <ChartOrder__LegendIcon color="#D0A26B" />
          <ChartOrder__LegendText>Ordered</ChartOrder__LegendText>
        </ChartOrder__LegendItem>
        <ChartOrder__LegendItem>
          <ChartOrder__LegendIcon color="#74B0FA" />
          <ChartOrder__LegendText>Delivered</ChartOrder__LegendText>
        </ChartOrder__LegendItem>
      </ChartOrder__Legend>
    </ChartOrder__Container>
  );
};

export default ChartOrder;

/** Styled Components */

const ChartOrder__Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  flex: 1;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto; /* Yatay kaydırma */
`;

const ChartOrder__ChartWrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const ChartOrder__Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
  overflow-y: auto; /* Yatay kaydırma */
`;

const ChartOrder__LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChartOrder__LegendIcon = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ChartOrder__LegendText = styled.span`
  font-size: 14px;
  color: #5d6679;
`;
