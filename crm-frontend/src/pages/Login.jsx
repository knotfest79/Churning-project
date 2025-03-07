import styled from "styled-components";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f7;
  gap: 3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoginBox = styled.div`
  padding: 2rem;
  width: 500px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
`;

const ForgotPassword = styled.a`
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #7a5af5;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const ChartContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  padding: 1rem;
`;

const data = [
  { name: "Mon", value: 52 },
  { name: "Tue", value: 81 },
  { name: "Wed", value: 73 },
  { name: "Thu", value: 90 },
  { name: "Fri", value: 65 },
];

function Login() {
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
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </LogoContainer>
      <LoginBox>
        <h2>Welcome to CRM</h2>
        <p>Please sign-in to your account and start the adventure</p>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <RememberMeContainer>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </RememberMeContainer>
        <Button size="large" variation="primary">
          Log in
        </Button>
        <ForgotPassword href="#">Forgot Password?</ForgotPassword>
        <p>
          New on our platform? <a href="#">Create an account</a>
        </p>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;
