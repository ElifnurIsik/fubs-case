import React from "react";
import styled from "styled-components";

interface ButtonCompProps {
  onButtonClick: () => void; // Click handler function
  buttonText: string; // Button text
  variant?: "text" | "outlined" | "contained"; // Optional variant
  icon?: string; // Optional icon
}

const ButtonComp: React.FC<ButtonCompProps> = ({
  onButtonClick,
  buttonText,
  variant = "contained", // Default variant is contained
  icon,
}) => {
  return (
    <ButtonComp__Button
      onClick={onButtonClick}
      isContained={variant === "contained"}
      isOutlined={variant === "outlined"}
    >
      {icon && <ButtonComp__Icon src={icon} alt="Button Icon" />}
      {buttonText}
    </ButtonComp__Button>
  );
};

export default ButtonComp;

/** Styled Components */
interface StyledButtonProps {
  isContained: boolean;
  isOutlined: boolean;
}

const ButtonComp__Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isContained ? "#FFFFFF" : "#5D6679")};
  background-color: ${(props) =>
    props.isContained ? "#0F50AA" : "transparent"};
  border: ${(props) => (props.isOutlined ? "1px solid #D0D3D9" : "none")};
  border-radius: 4px;
  text-transform: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isContained ? "#0D3F85" : "rgba(0, 0, 0, 0.04)"};
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;

const ButtonComp__Icon = styled.img`
  width: 20px;
  height: 20px;
`;
