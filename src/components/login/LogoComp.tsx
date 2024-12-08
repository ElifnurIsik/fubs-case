import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  height: auto;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-size: 47px;
  font-weight: 600;
  color: #009ed8;
  margin: 20px 0;
`;

const LogoComp: React.FC = () => {
  return (
    <div>
      <Logo src="../icons/logoB.svg" alt="Logo" />
      <HeaderText>KANBAN</HeaderText>
    </div>
  );
};

export default LogoComp;
