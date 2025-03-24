import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../../src/components/PageNav";
import Footer from "../../src/pages/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  background: linear-gradient(to bottom right, #f9f9fb, #eef1f8);
  align-items: center;
  justify-content: flex-start;
  padding: 100px 20px 40px;
  text-align: center;
`;

const Box = styled.div`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  max-width: 520px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const Note = styled.p`
  font-size: 0.9rem;
  margin-top: 10px;
  color: #666;
`;

const FieldGroup = styled.div`
  background: #f4f6fa;
  border-radius: 8px;
  padding: 10px 16px;
  margin: 12px 0;
  text-align: left;
  font-family: "Courier New", Courier, monospace;

  strong {
    display: block;
    color: #333;
    margin-bottom: 2px;
  }

  span {
    color: #3b82f6;
    font-weight: 600;
    word-break: break-word;
  }
`;

const LoadingText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #ff9800;
`;

const LoginButton = styled.button`
  background-color: #7a4adb;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  padding: 14px;
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #5e36c8;
  }
`;

const DashboardButton = styled.button`
  margin-top: 12px;
  background: transparent;
  color: #7a4adb;
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Confirmation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [instanceName, setInstanceName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      setInstanceName(`myCRM-${randomSuffix}`);
      setUsername(`user${randomSuffix}`);
      setPassword(`Pass@${randomSuffix}`);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <PageNav />
      <Wrapper>
        <Box>
          {loading ? (
            <>
              <Title>⏳ Creating your instance...</Title>
              <LoadingText>
                Please wait while we set up your CRM account.
              </LoadingText>
            </>
          ) : (
            <>
              <Title>🎉 Congratulations!</Title>
              <Text>Your CRM subscription is successfully created.</Text>

              <FieldGroup>
                <strong>Instance Name</strong>
                <span>{instanceName}</span>
              </FieldGroup>

              <FieldGroup>
                <strong>Username</strong>
                <span>{username}</span>
              </FieldGroup>

              <FieldGroup>
                <strong>Temporary Password</strong>
                <span>{password}</span>
              </FieldGroup>

              <Note>
                📝 You’ll need this username and password the next time you log
                in.
              </Note>

              <LoginButton onClick={() => navigate("/dashboard")}>
                Login to Dashboard
              </LoginButton>

              <DashboardButton onClick={() => navigate("/dashboard")}>
                Go to Dashboard →
              </DashboardButton>
            </>
          )}
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
}
