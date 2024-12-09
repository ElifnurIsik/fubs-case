import React from "react";
import styled from "styled-components";
import TitleComp from "../TitleComp";

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface CardTwoProps {
  data: StatItem[];
  titles: string;
}

const CardTwo: React.FC<CardTwoProps> = ({ data, titles }) => {
  return (
    <CardTwo__Container>
      <TitleComp title={titles} />
      <CardTwo__Content>
        {data.map((stat, index) => (
          <CardTwo__Item key={index}>
            <CardTwo__IconWrapper>
              <CardTwo__Icon src={stat.icon} alt={stat.label} />
            </CardTwo__IconWrapper>
            <CardTwo__Value>{stat.value}</CardTwo__Value>
            <CardTwo__Label>{stat.label}</CardTwo__Label>
            {index < data.length - 1 && <CardTwo__Divider />}
          </CardTwo__Item>
        ))}
      </CardTwo__Content>
    </CardTwo__Container>
  );
};

export default CardTwo;

/** Styled Components */

const CardTwo__Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 8px;
  flex: 1;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTwo__Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap; /* Responsive için öğeleri sarar */
`;

const CardTwo__Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margin: 8px; /* Öğeler arasında boşluk */
`;

const CardTwo__IconWrapper = styled.div`
  margin-bottom: 4px;
`;

const CardTwo__Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const CardTwo__Value = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #5d6679;
  margin-bottom: 4px;
`;

const CardTwo__Label = styled.span`
  font-size: 14px;
  color: #444444;
  word-wrap: break-word; /* Uzun kelimeleri bölerek bir alt satıra geçmesini sağlar */
  white-space: normal; /* Metnin normal şekilde sarılmasını sağlar */
  overflow: hidden; /* Taşan içeriği gizler */
  text-align: center;
`;

const CardTwo__Divider = styled.div`
  height: 50%;
  width: 1px;
  background-color: #e5e7eb;
  position: absolute;
  right: -10px;

  @media (max-width: 600px) {
    display: none; /* Mobilde görünmesin */
  }
`;
