import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
};

export default Layout;
