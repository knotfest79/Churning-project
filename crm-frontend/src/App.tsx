import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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

import ViewChurnInsights from "./pages/ViewChurnInsights";
import GlobalStyles from "../styles/GlobalStyles";
import AppLayout from "../ui/AppLayout";
import ChurnRecommendation from "./pages/ChurnRecommendation";
import UploadChurnData from "./pages/UploadChurnData";
import ChurnRetentionMetrics from "./pages/ChurnRetentionMetrics";

import ProtectedRoute from "./auth/ProtectedRoute";
import PublicRoute from "./auth/PublicRoute";
import HelpSupport from "./pages/HelpSupport";
import Reports from "./pages/Reports";
import AdminUser from "./pages/AdminUser";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Navigate to="/" replace />} />
              <Route path="customer" element={<Customer />} />
              <Route path="order" element={<Order />} />
              <Route path="product" element={<Product />} />
              <Route path="cohort" element={<Cohort />} />
              <Route path="churnprediction" element={<ChurnPredictions />}>
                <Route
                  index
                  element={
                    <Navigate to="/churnprediction/ViewChurnInsights" replace />
                  }
                />
                <Route
                  path="ViewChurnInsights"
                  element={<ViewChurnInsights />}
                />
                <Route
                  path="ChurnRecommendations"
                  element={<ChurnRecommendation />}
                />
                <Route path="UploadChurnData" element={<UploadChurnData />} />
                <Route
                  path="ChurnRetentionMetrics"
                  element={<ChurnRetentionMetrics />}
                />
              </Route>
              <Route path="interaction" element={<Interaction />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="Help" element={<HelpSupport />} />
              <Route path="Reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
              <Route path="user" element={<AdminUser />} />
              <Route path="signout" element={<Signout />} />
            </Route>
          </Route>

          {/* Public Route (login only when NOT logged in) */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
