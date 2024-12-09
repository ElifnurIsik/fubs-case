import React from "react";
import Grid from "@mui/material/Grid"; // Material-UI Grid
import styled from "styled-components";
import LogoComp from "../components/login/LogoComp";
import AuthForm from "../components/login/AuthForm";
import { useMediaQuery, useTheme } from "@mui/material";

// Block: page-container
const PageContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
  padding: 16px;
`;

// Styled Grid Item
const LoginSection = styled(Grid).attrs(() => ({
  item: true,
  xs: 12,
  sm: 6,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const AuthPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <PageContainer container>
      {isMobile && (
        <LoginSection>
          <LogoComp />
        </LoginSection>
      )}

      <LoginSection>
        <AuthForm />
      </LoginSection>
    </PageContainer>
  );
};

export default AuthPage;
