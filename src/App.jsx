import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hook/ThemeContext"; // ✅ same file

import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
// import Homepage from "./pages/Homepage";
import Payment from "../features/Authentication/Payment";
import Confirmation from "../features/Authentication/Confirmation";
import Signup from "../features/Authentication/signup";
import Homepage1 from "./pages/Homepage1";
import OnboardingWelcome from "./pages/OnboardingWelcome";
import OnboardingSource from "./pages/OnboardingSource";
import OnboardingTools from "./pages/OnboardingTools";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DataProcessing from "./pages/DataProcessing";
import GDPRCompliance from "./pages/GDPRCompliance";
import Documentation from "./pages/Documentation";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="/home1" replace />} />
              {/* 🚀 Redirects root ("/") to "home" */}
              <Route path="home1" element={<Homepage1 />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<TermsOfService />} />
              <Route path="data-processing" element={<DataProcessing />} />
              <Route path="gdpr" element={<GDPRCompliance />} />
              <Route path="docs" element={<Documentation />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="signup" element={<Signup />} />
            <Route path="payment" element={<Payment />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="onboarding" element={<OnboardingWelcome />} />
            <Route path="onboarding1" element={<OnboardingSource />} />
            <Route path="onboardingtools" element={<OnboardingTools />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
