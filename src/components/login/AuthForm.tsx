import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthForm: React.FC = () => {
  const [type, setType] = useState<"login" | "signup">("signup");
  const isLogin = type === "login";
  const heading = isLogin ? "Log in to your account" : "Create an account";
  const subText = isLogin
    ? "Welcome back! Please enter your details."
    : "Start your 30-day free trial.";
  const buttonText = isLogin ? "Sign in" : "Get started";
  const altText = isLogin
    ? "Don't have an account?"
    : "Already have an account?";
  const altLinkText = isLogin ? "Sign up" : "Log in";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    navigate("/dashboard");
  };

  return (
    <FormContainer>
      <Logo src="../../icons/Logo.svg" alt="Logo" />
      <HeaderText>{heading}</HeaderText>
      <SubText>{subText}</SubText>
      <Form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              required
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder={isLogin ? "Password" : "Create a password"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        {!isLogin && <HelperText>Must be at least 8 characters.</HelperText>}
        <Button>{buttonText}</Button>
      </Form>
      {isLogin && (
        <OptionsContainer>
          <Options>
            <RememberMe>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember for 30 days</label>
            </RememberMe>
            <ForgotPassword href="/forgot-password">
              Forgot password
            </ForgotPassword>
          </Options>
        </OptionsContainer>
      )}
      <GoogleButton>
        <img
          src="../../icons/socialicon.svg"
          alt="Google"
          style={{ width: "24px", height: "24px" }}
        />
        Sign {isLogin ? "in" : "up"} with Google
      </GoogleButton>
      <AltText>
        {altText}{" "}
        <AltLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setType(isLogin ? "signup" : "login"); // Type değiştir
          }}
        >
          {altLinkText}
        </AltLink>
      </AltText>
    </FormContainer>
  );
};

export default AuthForm;

// Styled Components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 16px;
  width: 48px;
  height: 48px;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #2b2f38;
  margin: 10px 0;
`;

const SubText = styled.p`
  text-align: center;
  color: #667085;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px 12px;
  margin-bottom: 10px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
`;

const HelperText = styled.span`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1366d9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const OptionsContainer = styled.div`
  width: 100%; /* Geniş bir alan */
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 5px;
    font-size: 14px;
  }
`;

const ForgotPassword = styled.a`
  color: #1366d9;
  font-size: 14px;
  text-decoration: none;
`;

const GoogleButton = styled(Button)`
  background-color: #fff;
  color: #000;
  width: 100%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const AltText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #667085;
`;

const AltLink = styled.a`
  color: #1366d9;
  text-decoration: none;
  margin-left: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  color: #48505e;
  display: block;
`;
