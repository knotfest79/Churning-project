import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div>
      <Header />
      <div>App Layout</div>
      <Outlet />
      <Sidebar />
    </div>
  );
}

export default AppLayout;
