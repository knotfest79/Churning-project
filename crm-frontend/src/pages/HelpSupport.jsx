import styled from "styled-components";
import { FaQuestionCircle } from "react-icons/fa";

const HelpContainer = styled.div`
  padding: 2rem;
  background-color: #f9fafb; /* Light background */
`;

const HelpBanner = styled.div`
  background-color: #ede9fe; /* Soft purple */
  border: 1px solid #ddd6fe;
  border-radius: 1rem;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const BannerIcon = styled.div`
  font-size: 2.5rem;
  color: #7c3aed;
  margin-bottom: 1rem;
`;

const BannerTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const BannerDesc = styled.p`
  color: #475569;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  padding: 0.9rem 1rem;
  border: 1px solid #cbd5e1;
  border-right: none;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 100%;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  background-color: #6366f1;
  color: white;
  padding: 0 1.5rem;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #4f46e5;
  }
`;

const ResourceBox = styled.div`
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ResourceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background-color: ${({ active }) => (active ? "#1e293b" : "#e2e8f0")};
  color: ${({ active }) => (active ? "white" : "#1e293b")};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#0f172a" : "#cbd5e1")};
  }
`;

function HelpSupport() {
  return (
    <HelpContainer>
      <HelpBanner>
        <BannerIcon>
          <FaQuestionCircle />
        </BannerIcon>
        <BannerTitle>How can we help you?</BannerTitle>
        <BannerDesc>
          Search our knowledge base, FAQs, or contact our support team
        </BannerDesc>

        <SearchBarWrapper>
          <SearchInput placeholder="Search for help..." />
          <SearchButton>Search</SearchButton>
        </SearchBarWrapper>
      </HelpBanner>

      <ResourceBox>
        <ResourceTitle>Support Resources</ResourceTitle>
        <Tabs>
          <Tab active>Frequently Asked Questions</Tab>
          <Tab>Knowledge Base</Tab>
          <Tab>Contact Us</Tab>
        </Tabs>
      </ResourceBox>
    </HelpContainer>
  );
}

export default HelpSupport;
