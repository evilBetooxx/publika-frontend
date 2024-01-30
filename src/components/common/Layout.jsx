import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className={isDashboard ? "grid grid-cols-3 p-4 overflow-scroll" : "flex-grow p-4"}>{children}</div>
    </div>
  );
};

export default Layout;
