import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FaSliders, FaDatabase, FaArrowRight } from "react-icons/fa6";

import CustomFieldsPopup from "../components/popup/CustomFieldsPopup";
import { useState } from "react";

const SettingsContainer = styled.div`
  padding: 2rem;
  background-color: #f9fafb; /* Matches light background from image */
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  background: #edeef0; /* ✅ Lightened background */
  color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const HeaderIcon = styled.div`
  font-size: 2rem;
  color: #6366f1; /* Purple accent */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  color: #0f172a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Soft shadow like in image */
`;

const CardHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconBox = styled.div`
  background: #4338ca;
  padding: 1rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: #64748b;
`;

const ConfigureButton = styled.button`
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background-color: #4f46e5;
  }
`;

function Settings() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <SettingsContainer>
      <SectionHeader>
        <HeaderIcon>
          <HiOutlineCog6Tooth />
        </HeaderIcon>
        <div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", margin: 0 }}>
            Settings
          </h2>
          <p style={{ color: "black" }}>
            Configure your application settings and preferences
          </p>
        </div>
      </SectionHeader>

      <Grid>
        <Card>
          <CardHeader>
            <IconBox>
              <FaSliders />
            </IconBox>
            <div>
              <CardTitle>General Settings</CardTitle>
              <CardDesc>
                Configure system preferences, themes, and notifications
              </CardDesc>
            </div>
          </CardHeader>
          <ConfigureButton onClick={() => setShowPopup(true)}>
            Configure
          </ConfigureButton>
        </Card>

        <Card>
          <CardHeader>
            <IconBox>
              <FaDatabase />
            </IconBox>
            <div>
              <CardTitle>Custom Data Fields</CardTitle>
              <CardDesc>
                Customize what information you collect across different modules
              </CardDesc>
            </div>
          </CardHeader>
          <ConfigureButton onClick={() => setShowPopup(true)}>
            Configure
          </ConfigureButton>
        </Card>

        <Card>
          <CardHeader>
            <IconBox>
              <FaArrowRight />
            </IconBox>
            <div>
              <CardTitle>Churn Prediction Field Mapping</CardTitle>
              <CardDesc>
                Map your custom fields to our churn prediction model features
              </CardDesc>
            </div>
          </CardHeader>
          <ConfigureButton>Configure</ConfigureButton>
        </Card>
      </Grid>

      {/* ✅ Show Popup Here */}
      {showPopup && <CustomFieldsPopup onClose={() => setShowPopup(false)} />}
    </SettingsContainer>
  );
}

export default Settings;
