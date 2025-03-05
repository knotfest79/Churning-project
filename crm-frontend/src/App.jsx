import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Cohort from "./pages/Cohort";
import ChurnPredictions from "./pages/ChurnPredictions";
import Interaction from "./pages/Interaction";
import Subscription from "./pages/Subscription";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signout from "./pages/Signout";
import GlobalStyles from "../styles/GlobalStyles";
import AppLayout from "../ui/AppLayout";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="customer" element={<Customer />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Product />} />
            <Route path="cohort" element={<Cohort />} />
            <Route path="churnprediction" element={<ChurnPredictions />} />
            <Route path="interaction" element={<Interaction />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="settings" element={<Settings />} />
            <Route path="signout" element={<Signout />} />
          </Route>
          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
