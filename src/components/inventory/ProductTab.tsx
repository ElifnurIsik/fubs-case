import React, { useState } from "react";
import styled from "styled-components";
import OverviewDetails from "./OverviewDetails";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <TabPanelContent>{children}</TabPanelContent>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
}

const ProductTab: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <ProductTabContainer>
      {/* Tabs */}
      <ProductTab__Header>
        <ProductTab__Tabs>
          {["Overview", "Purchases", "Adjustments", "History"].map(
            (tabLabel, index) => (
              <ProductTab__Tab
                key={index}
                onClick={() => handleChange(index)}
                isSelected={value === index}
                disabled={index !== 0} // İlk sekme dışında tüm sekmeler devre dışı
                {...a11yProps(index)}
              >
                {tabLabel}
              </ProductTab__Tab>
            )
          )}
        </ProductTab__Tabs>
      </ProductTab__Header>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <OverviewDetails />
      </TabPanel>
    </ProductTabContainer>
  );
};

export default ProductTab;

/** Styled Components */
const ProductTabContainer = styled.div`
  width: 100%;
  color: #ffffff;
`;

const ProductTab__Header = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const ProductTab__Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
`;

interface ProductTab__TabProps {
  isSelected?: boolean;
  disabled?: boolean;
}

const ProductTab__Tab = styled.button<ProductTab__TabProps>`
  background: none;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  color: ${(props) => (props.disabled ? "#A0A0A0" : "#48505E")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-bottom: ${(props) =>
    props.isSelected ? "2px solid #0F50AA" : "none"};

  &:hover {
    color: ${(props) => (props.disabled ? "#A0A0A0" : "#0F50AA")};
  }

  ${(props) =>
    props.isSelected &&
    `
      color: #0F50AA;
      font-weight: bold;
  `}
`;

const TabPanelContent = styled.div`
  padding: 24px;
  font-size: 16px;
  color: #48505e;
`;
