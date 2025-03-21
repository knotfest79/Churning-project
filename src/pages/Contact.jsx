import styled from "styled-components";

const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 60px;
  background: linear-gradient(to bottom, #faf9ffd0, #7e72c2b3);
  color: white;
  min-height: 500px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContactLeft = styled.div`
  flex: 1;
  max-width: 500px;

  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const ContactDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin: 10px 0;

  &::before {
    content: "✔";
    font-size: 1.2rem;
    color: #7a4adb;
    margin-right: 10px;
  }
`;

const ContactEmail = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: #7a4adb;
`;

const ContactForm = styled.div`
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  position: relative;

  /* Folder shape effect */
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 100px;
    height: 40px;
    background: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #7a4adb;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background: #3e1acb;
  }
`;

export default function Contact() {
  return (
    <ContactSection>
      <ContactLeft>
        <ContactTitle>LET’S TALK</ContactTitle>
        <ContactDetails>
          <ContactItem>We will respond to you within 24 hours.</ContactItem>
          <ContactItem>We’ll sign an NDA if requested.</ContactItem>
          <ContactItem>Access to dedicated product specialists.</ContactItem>
        </ContactDetails>
        <ContactEmail>📩 inquiry@crmcompany.com</ContactEmail>
      </ContactLeft>

      <ContactForm>
        <InputField type="text" placeholder="Full Name *" required />
        <InputField type="email" placeholder="Email *" required />
        <InputField type="tel" placeholder="Phone Number *" required />
        <TextArea placeholder="Tell us about your project *" required />
        <SubmitButton>SEND A MESSAGE ➤</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
}
