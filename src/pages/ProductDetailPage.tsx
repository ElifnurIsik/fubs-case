import React from "react";
import styled from "styled-components";
import TitleComp from "../components/TitleComp";
import ProductTab from "../components/inventory/ProductTab";

const ProductDetailPage: React.FC = () => {
  const handleEdit = () => alert("Edit Clicked!");
  const handleDownloadAll = () => alert("Download All Clicked!");

  return (
    <ProductDetailPage__Container>
      <TitleComp
        title="Maggi"
        buttons={[
          {
            text: "Edit",
            onClick: handleEdit,
            icon: "../../icons/edit.svg",
          },
          {
            text: "Download",
            onClick: handleDownloadAll,
          },
        ]}
      />
      <ProductTab />
    </ProductDetailPage__Container>
  );
};

export default ProductDetailPage;

/** Styled Components */
const ProductDetailPage__Container = styled.div`
  padding: 16px;
  background-color: #ffffff;
  min-height: 90vh;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
