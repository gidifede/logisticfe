import React, { useState } from "react";
import ItalyMap from "./components/Logistic/ItalyMap";
import PieChartCard from "./components/PieChartCard";
import LogisticCard from "./components/Logistic/LogisticCard";
import Widget from "components/widget/Widget";
import { MdPlace, MdDirections, MdDirectionsCar } from "react-icons/md";
import LogisticFilter from "./components/Logistic/LogisticFilter";
import Card from "components/card";

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const [locationFlagSelected, setLocationFlag] = useState(true);
  const [sdaFlagSelected, setSdaFlag] = useState(false);
  const [FlagSelected, setFlag] = useState(false);
  

  
  const [clicked, setClicked] = useState(false);
  const [placeFilterSelected, setPlaceFilterSelected] = useState(true);


  const handleChildEvent = (newMessage: string) => {
    setSelectedCity(newMessage);
  };

  const handleLocationFlagSelect = () => {
    setLocationFlag(!locationFlagSelected);
  };

  const handleSdaFlagSelect = () => {
    setSdaFlag(!sdaFlagSelected);
  };

  const handlFlagSelect = () => {
    setFlag(!FlagSelected);
  };


  return (
    <div className="mt-10 flex h-screen items-start">
      <div className="w-[120px]  p-4">
        <div className="!z-5 relative flex flex-grow flex-col items-center rounded-[20px] rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <LogisticFilter
            icon={<MdPlace className={`h-7 w-7`} />}
            clicked={locationFlagSelected}
            onClick={handleLocationFlagSelect}
          />
          <LogisticFilter
            icon={<MdDirections className={`h-7 w-7`} />}
            clicked={sdaFlagSelected}
            onClick={handleSdaFlagSelect}
          />
          <LogisticFilter
            icon={<MdDirectionsCar className={`h-7 w-7 `} />}
            clicked={FlagSelected}
            onClick={handlFlagSelect}
          />
        </div>
      </div>


      <div className="flex-grow">
        <ItalyMap
          setSelectedCity={handleChildEvent}
          showAllMarkers={locationFlagSelected}
        />
        <button onClick={() => setLocationFlag(!locationFlagSelected)}>
          Location Flag
        </button>
      </div>
     




      <div className="flex w-[300px] flex-col items-end">
        <div className="mb-10 w-[300px] self-end">
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
