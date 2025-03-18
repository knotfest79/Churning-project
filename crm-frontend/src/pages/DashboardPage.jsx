import React, { useEffect, useState } from "react";
import KPISection from "../../ui/KPI";
import GraphSection from "../../ui/Graph";
import RecentActivities from "../../ui/RecentActivities";

function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(null);
  const adminId = "67c17c7fa37308fbd7d43fe4"; // Replace with dynamic adminId if needed

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/dashboard/${adminId}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const result = await res.json();
        console.log("Fetched Data:", result);
        setDashboardData(result.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, [adminId]);

  if (!dashboardData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <KPISection data={dashboardData} />
      <GraphSection chartData={dashboardData.chartData} />
      <RecentActivities activities={dashboardData.recentActivities} />
    </div>
  );
}

export default DashboardPage;
