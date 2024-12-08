import React from "react";
import styled from "styled-components";

const InformationPages: React.FC = () => {
  return (
    <InformationPages__Container>
      <InformationPages__Card>
        <InformationPages__CardContent>
          <InformationPages__Logo src="../icons/logo.svg" alt="Logo" />

          <InformationPages__Text>Yapım Aşamasında</InformationPages__Text>
        </InformationPages__CardContent>
      </InformationPages__Card>
    </InformationPages__Container>
  );
};

export default InformationPages;

const InformationPages__Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
`;

const InformationPages__Card = styled.div`
  width: 100%;
  max-width: 600px; /* md için genişlik */
  padding: 5% 0;
  text-align: center;
  background-color: #ffffff;
  border-radius: 16px; /* Kartın köşelerini yuvarlar */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge */
`;

const InformationPages__CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InformationPages__Logo = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 16px; /* Alt kısma boşluk ekler */
`;

const InformationPages__Text = styled.h4`
  font-weight: 700;
  color: #383e49;
  font-size: 28px;
`;
