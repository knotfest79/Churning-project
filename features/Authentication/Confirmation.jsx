import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageNav from "../../src/components/PageNav";
import Footer from "../../src/pages/Footer";

const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
`;

const ConfirmationBox = styled.div`
  background: #f4f4f4;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #3b82f6;
`;

const LoadingText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ff9800;
`;

const LoginButton = styled.button`
  background-color: #9062f2;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  padding: 14px;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 20px;

  &:hover {
    background-color: #7a4adb;
  }
`;

export default function Confirmation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [instanceName, setInstanceName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Simulate Processing Time
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      setInstanceName(`myCRM-${randomSuffix}`);
      setUsername(`user${randomSuffix}`);
      setPassword(`Pass@${randomSuffix}`);
      setLoading(false);
    }, 3000); // Simulate 3 seconds of processing
  }, []);

  return (
    <>
      <PageNav />
      <ConfirmationWrapper>
        <ConfirmationBox>
          {loading ? (
            <>
              <Title>🔄 Processing your order...</Title>
              <LoadingText>
                Please wait while we create your CRM instance.
              </LoadingText>
            </>
          ) : (
            <>
              <Title>🎉 Congratulations!</Title>
              <Text>Your CRM subscription is successfully created.</Text>

              <Text>
                <strong>Instance Name:</strong>{" "}
                <Highlight>{instanceName}</Highlight>
              </Text>
              <Text>
                <strong>Username:</strong> <Highlight>{username}</Highlight>
              </Text>
              <Text>
                <strong>Temporary Password:</strong>{" "}
                <Highlight>{password}</Highlight>
              </Text>

              <LoginButton onClick={() => navigate("/dashboard")}>
                Login to Dashboard
              </LoginButton>
            </>
          )}
        </ConfirmationBox>
      </ConfirmationWrapper>
      <Footer />
    </>
  );
}
