import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  return (
    <>
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
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="signup" element={<Signup />} />
          <Route path="payment" element={<Payment />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
