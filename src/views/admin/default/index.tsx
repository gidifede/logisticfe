import React, { useState } from "react";
import ItalyMap from "./components/Logistic/ItalyMap";
import PieChartCard from "./components/PieChartCard";
import LogisticCard from "./components/Logistic/LogisticCard";

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleChildEvent = (newMessage: string) => {
    setSelectedCity(newMessage);
  };
  return (
    <div className="mt-10 flex h-screen items-start">
      <div className="w-[200px] bg-gray-200 p-4">
        {/* Placeholder per il menu */}
        <p>Filters</p>
      </div>
      <div className="flex max-w-screen-xl flex-grow flex-col justify-center">
        <ItalyMap setSelectedCity={handleChildEvent} />
      </div>
      <div className="flex w-full flex-col md:w-[300px]">
        {selectedCity ? (
          <div className="placeholder">
            <h2>{selectedCity}</h2>
          </div>
        ) : (
          <>
            <LogisticCard />
            <PieChartCard />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
