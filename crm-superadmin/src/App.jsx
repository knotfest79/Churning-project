import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApppLayout from "../ui/AppLayout";
import AdminDashboard from "./pages/adminDashboard";
import Instance from "./pages/Instance";
import SecuritySettings from "./pages/SecuritySettings";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "../../crm-frontend/styles/GlobalStyles";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<ApppLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="instance" element={<Instance />} />
            <Route path="securitysettings" element={<SecuritySettings />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
