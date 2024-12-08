import { Box } from "@mui/system";
import React from "react";
import TitleComp from "../components/TitleComp";

const ProductDetailPage = () => {
  const handleEdit = () => alert("Edit Clicked!");
  const handleDownloadAll = () => alert("Download All Clicked!");
  return (
    <>
      {" "}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          p: 1,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
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
      </Box>
    </>
  );
};

export default ProductDetailPage;
