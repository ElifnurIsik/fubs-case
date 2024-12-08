import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface ButtonProps {
  text: string; // Buton metni
  onClick: () => void; // Tıklama işlevi
  variant?: "text" | "outlined" | "contained"; // Opsiyonel buton tipi
  icon?: string; // Opsiyonel ikon
}

interface TextButtonProps {
  text: string; // Sadece metin içeren buton
  onClick: () => void; // Tıklama işlevi
}

interface TitleCompProps {
  title: string; // Başlık metni
  buttons?: ButtonProps[]; // Standart butonlar
  textButtons?: TextButtonProps[]; // Sadece metin içeren butonlar
}

const TitleComp: React.FC<TitleCompProps> = ({
  title,
  buttons = [],
  textButtons = [],
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

      {/* Eğer textButtons varsa */}
      {textButtons.length > 0 && (
        <Box sx={{ display: "flex", gap: 2 }}>
          {textButtons.map((textButton, index) => (
            <Typography
              key={index}
              onClick={textButton.onClick}
              sx={{
                cursor: "pointer",
                color: "#0F50AA",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {textButton.text}
            </Typography>
          ))}
        </Box>
      )}

      {/* Eğer buttons varsa */}
      {buttons.length > 0 && (
        <Box sx={{ display: "flex", gap: 1 }}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || "outlined"}
              onClick={button.onClick}
              sx={{
                color: button.variant === "contained" ? "#FFFFFF" : "#5D6679",
                backgroundColor:
                  button.variant === "contained" ? "#0F50AA" : "transparent",
                borderColor: "#D0D3D9",
                textTransform: "none",
              }}
              startIcon={
                button.icon && (
                  <img
                    src={button.icon}
                    alt="Button Icon"
                    style={{ width: 20, height: 20 }}
                  />
                )
              }
            >
              {button.text}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TitleComp;
