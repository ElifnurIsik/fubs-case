import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { width } from "@mui/system";

interface TitleCompProps {
  title: string; // Başlık metni
  buttonText?: string; // Opsiyonel buton metni
  iconButton?: string;
  onButtonClicks?: () => void;
  onButtonClick?: () => void; // Opsiyonel tıklama işlevi
}

const TitleComp: React.FC<TitleCompProps> = ({
  title,
  buttonText,
  iconButton,
  onButtonClick,
  onButtonClicks,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        p: 1,
      }}
    >
      {/* Başlık */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: "#383E49", fontSize: "20px" }}
      >
        {title}
      </Typography>

      {/* Opsiyonel Buton */}
      {buttonText && onButtonClick && (
        <Typography
          onClick={onButtonClick}
          sx={{
            cursor: "pointer",
            color: "#0F50AA",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {buttonText}
        </Typography>
      )}
      {/* Opsiyonel Buton 2 */}
      {iconButton && onButtonClicks && (
        <Button
          variant="outlined"
          onClick={onButtonClick}
          sx={{
            color: "#5D6679",
            borderColor: "#D0D3D9",
            textTransform: "none",
          }}
          startIcon={
            <img
              src="../icons/Calendar.svg"
              alt="Calendar Icon"
              style={{ width: 20, height: 20 }}
            />
          }
        >
          {iconButton}
        </Button>
      )}
    </Box>
  );
};

export default TitleComp;
