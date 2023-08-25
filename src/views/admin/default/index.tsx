import React from "react";
import ItalyMap from "./components/Logistic/ItalyMap";
import PieChartCard from "./components/PieChartCard";

const Dashboard = () => {
  return (
    <div className="mt-10 flex h-screen items-start">
      <div className="w-[200px] bg-gray-200 p-4">
        {/* Placeholder per il menu */}
        <p>Filters</p>
      </div>
      <div className="flex max-w-screen-xl flex-grow flex-col justify-center">
        <ItalyMap />
      </div>
      <div className="flex w-full flex-col md:w-[300px]">
        <PieChartCard />
        <PieChartCard />
      </div>
    </div>
  );
};

export default Dashboard;
