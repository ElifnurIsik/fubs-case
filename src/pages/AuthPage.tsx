import React from "react";
import { Grid2 } from "@mui/material";
import styled from "styled-components";
import LogoComp from "../components/login/LogoComp";
import AuthForm from "../components/login/AuthForm";

// Block: page-container
const PageContainer = styled(Grid2)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw; /* Tam genişlik */
  aspect-ratio: 16 / 9; /* 16:9 oranı */
`;

// Block: login-section
const LoginSection = styled(Grid2)`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthPage: React.FC = () => {
  return (
    <PageContainer container>
      <LoginSection>
        <LogoComp />
      </LoginSection>

      <LoginSection>
        <AuthForm type="login" />
      </LoginSection>
    </PageContainer>
  );
};

export default AuthPage;
