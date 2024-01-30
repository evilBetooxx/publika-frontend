import Card from "../card/Card";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex-grow p-4">
        <Card />
      </div>
    </div>
  );
}

export default Dashboard;
