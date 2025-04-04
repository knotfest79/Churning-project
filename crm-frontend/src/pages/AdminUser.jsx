import styled from "styled-components";
import { HiOutlineUserCircle, HiOutlineLockClosed } from "react-icons/hi";
import { FaRegEnvelope, FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { LuUser, LuLock } from "react-icons/lu";

const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  color: #475569;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.6rem;
  background: #f8fafc;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  background: #ede9fe;
  color: #7c3aed;
  border: 1px solid #ddd6fe;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #ddd6fe;
  }
`;

const SecurityBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SecurityItem = styled.div`
  margin-bottom: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function AdminUser() {
  return (
    <PageWrapper>
      <Grid>
        <Card>
          <CardTitle>
            <HiOutlineUserCircle /> Profile Photo
          </CardTitle>
          <div
            style={{
              width: "120px",
              height: "120px",
              background: "#ede9fe",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              margin: "0 auto 1.5rem",
              color: "#7c3aed",
            }}
          >
            👤
          </div>
          <Button>Change Photo</Button>
        </Card>

        <Card>
          <CardTitle>
            <LuUser /> Profile Information
          </CardTitle>
          <form>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Admin User" />
            <Label>
              <FaRegEnvelope style={{ marginRight: "0.5rem" }} />
              Email Address
            </Label>
            <Input type="email" placeholder="admin@nestcrm.com" />
            <Label>
              <FaPhoneAlt style={{ marginRight: "0.5rem" }} />
              Phone Number
            </Label>
            <Input type="tel" placeholder="+123456789" />
            <Label>
              <FaBuilding style={{ marginRight: "0.5rem" }} />
              Company
            </Label>
            <Input type="text" placeholder="NestCRM" />
          </form>
          <Button style={{ float: "right", marginTop: "1rem" }}>
            Edit Profile
          </Button>
        </Card>
      </Grid>

      <SecurityBox>
        <CardTitle>
          <HiOutlineLockClosed /> Security
        </CardTitle>
        <SecurityItem>
          <Row>
            <div>
              <strong>Password</strong>
              <p style={{ color: "#64748b", margin: 0 }}>
                Last changed 3 months ago
              </p>
            </div>
            <Button>Change Password</Button>
          </Row>
        </SecurityItem>

        <SecurityItem>
          <Row>
            <div>
              <strong>Two-Factor Authentication</strong>
              <p style={{ color: "#64748b", margin: 0 }}>
                Add an extra layer of security to your account
              </p>
            </div>
            <Button>Enable 2FA</Button>
          </Row>
        </SecurityItem>
      </SecurityBox>
    </PageWrapper>
  );
}

export default AdminUser;
