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

  <div className="flex-grow">
    <ItalyMap setSelectedCity={handleChildEvent} />
  </div>
  
  <div className="flex w-[300px] flex-col items-end">
    <div className="self-end mb-10">
      <LogisticCard message={selectedCity} />
    </div>
    <div className="self-end">
      <PieChartCard />
    </div>
  </div>
</div>

  
  );
};

export default Dashboard;
