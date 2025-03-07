import { Outlet } from "react-router-dom";

function ChurnPredictions() {
  return (
    <div>
      <h1>Churn Predictions Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default ChurnPredictions;
