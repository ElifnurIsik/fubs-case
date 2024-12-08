import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string; // Buton metni
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Tıklama işlevi
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
    <TitleComp__Container>
      {/* Başlık */}
      <TitleComp__Title>{title}</TitleComp__Title>

      {/* Eğer textButtons varsa */}
      {textButtons.length > 0 && (
        <TitleComp__TextButtons>
          {textButtons.map((textButton, index) => (
            <TitleComp__TextButton key={index} onClick={textButton.onClick}>
              {textButton.text}
            </TitleComp__TextButton>
          ))}
        </TitleComp__TextButtons>
      )}

      {/* Eğer buttons varsa */}
      {buttons.length > 0 && (
        <TitleComp__Buttons>
          {buttons.map((button, index) => (
            <TitleComp__Button
              key={index}
              onClick={button.onClick}
              isContained={button.variant === "contained"}
            >
              {button.icon && (
                <img
                  src={button.icon}
                  alt="Button Icon"
                  style={{ width: 20, height: 20 }}
                />
              )}
              {button.text}
            </TitleComp__Button>
          ))}
        </TitleComp__Buttons>
      )}
    </TitleComp__Container>
  );
};

export default TitleComp;

/** Styled Components */
const TitleComp__Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
`;

const TitleComp__Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #383e49;
`;

const TitleComp__TextButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const TitleComp__TextButton = styled.span`
  cursor: pointer;
  color: #0f50aa;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const TitleComp__Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

interface StyledButtonProps {
  isContained: boolean;
}

const TitleComp__Button = styled.button<StyledButtonProps>`
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
  border: ${(props) => (props.isContained ? "none" : "1px solid #D0D3D9")};
  border-radius: 4px;
  text-transform: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isContained ? "#0D3F85" : "rgba(0, 0, 0, 0.04)"};
  }
`;
