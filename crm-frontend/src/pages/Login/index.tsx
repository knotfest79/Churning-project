import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChartContainer,
  ErrorText,
  ForgotPassword,
  Input,
  LoginBox,
  LoginContainer,
  LogoContainer,
  RememberMeContainer,
  StyledButton,
} from "./styles";
import React from "react";
import Logo from "../../../ui/Logo";

export const data = [
  { name: "Mon", value: 52 },
  { name: "Tue", value: 81 },
  { name: "Wed", value: 73 },
  { name: "Thu", value: 90 },
  { name: "Fri", value: 65 },
];

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@crm.com");
  const [password, setPassword] = useState("secret123");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) navigate("/");
  }, [navigate]);

  const handleLogin = () => {
    console.log("Login clicked!");
    const mockUser = {
      email: "admin@crm.com",
      password: "secret123",
    };

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (email === mockUser.email && password === mockUser.password) {
      // Store token
      localStorage.setItem("authToken", "mock-session-token");

      // Redirect to dashboard
      navigate("/");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo />
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </LogoContainer>
      <LoginBox>
        <h2>Welcome to CRM</h2>
        <p>Please sign in to your account and start the adventure</p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RememberMeContainer>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </RememberMeContainer>
        <StyledButton onClick={handleLogin}>Log in</StyledButton>
        {error && <ErrorText>{error}</ErrorText>}
        <ForgotPassword href="#">Forgot Password?</ForgotPassword>
        <p>
          New on our platform? <a href="#">Create an account</a>
        </p>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;
