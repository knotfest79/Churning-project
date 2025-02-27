import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";



 function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage />}  />
      <Route path = "features" element = {<Features />}  /> 
      <Route path = "pricing" element = {<Pricing />}  />
      <Route path = "about" element = {<About />}  />
      <Route path = "contact" element = {<Contact />}  />
      <Route path = "login" element = {<Login />}  />
      <Route path = "signup" element = {<Signup />}  />
      <Route path = "app" element = {<AppLayout />}  />
      <Route path = "*" element = {<PageNotFound />}  />
    

    </Routes>
    </BrowserRouter>
  )
}

export default App;