import React from "react";
import { Button } from "@mui/material";

interface ButtonCompProps {
  onButtonClick: () => void; // Click handler function
  buttonText: string; // Button text
  variant?: "text" | "outlined" | "contained"; // Optional variant
  icon?: string; // Optional icon
  sx?: object; // Optional additional styles
}

const ButtonComp: React.FC<ButtonCompProps> = ({
  onButtonClick,
  buttonText,
  variant = "contained", // Default variant is contained
  icon,
  sx = {}, // Default empty styles
}) => {
  return (
    <Button
      variant={variant}
      onClick={onButtonClick}
      sx={{
        color: variant === "contained" ? "#FFFFFF" : "#5D6679",
        backgroundColor: variant === "contained" ? "#0F50AA" : "transparent",
        borderColor: variant === "outlined" ? "#D0D3D9" : "none",
        textTransform: "none",
        ...sx, // Merge additional styles
      }}
      startIcon={
        icon && <img src={icon} alt="Icon" style={{ width: 20, height: 20 }} />
      }
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComp;
