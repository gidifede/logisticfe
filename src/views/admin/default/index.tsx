import React, { useState } from "react";
import ItalyMap from "./components/Logistic/ItalyMap";
import PieChartCard from "./components/PieChartCard";
import LogisticCard from "./components/Logistic/LogisticCard";
import Widget from "components/widget/Widget";
import { MdPlace, MdDirections, MdDirectionsCar } from "react-icons/md";
import LogisticFilter from "./components/Logistic/LogisticFilter";

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const [pclFlagSelected, setPclFlagSelected] = useState(true);
  const [sdaFlagSelected, setSdaFlag] = useState(false);
  const [FlagSelected, setFlag] = useState(false);
  // const [PclFlagSelected, setPclFlag] = useState(false);

  const [isDetailClicked, setDetailCliked] = useState(false);

  const handleMarkerSelection = (newMessage: string) => {
    setDetailCliked(true)
    setSelectedCity(newMessage);
  };

  const handleLocationFlagSelect = () => {
    setPclFlagSelected(!pclFlagSelected);
    if (!pclFlagSelected && !sdaFlagSelected) {
      setDetailCliked(false)
    }
  };

  const handleSdaFlagSelect = () => {
    setSdaFlag(!sdaFlagSelected);
    if (!pclFlagSelected && !sdaFlagSelected) {
      setDetailCliked(false)
    }
  };


  // const handlFlagSelect = () => {
  //   setFlag(!FlagSelected);
  // };

  // const handlPclFlagSelect = () => {
  //   setPclFlag(!PclFlagSelected);
  // };

  return (
    <div className="mt-10 flex h-screen items-start">
      <div className="w-[120px]  p-4">
        <div className="!z-5 relative flex flex-grow flex-col items-center rounded-[20px] rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <LogisticFilter
            icon={<MdPlace className={`h-7 w-7`} />}
            clicked={pclFlagSelected}
            onClick={handleLocationFlagSelect}
          />
          <LogisticFilter
            icon={
              <p className="leading-1 flex font-extrabold dark:text-white">
                SDA
              </p>
            }
            clicked={sdaFlagSelected}
            onClick={handleSdaFlagSelect}
          />
          {/* <LogisticFilter
            icon={
              <img src="/filiali.png" alt="Filiali Poste" className="h-8 w-8" />
            }
            clicked={FlagSelected}
            onClick={handlFlagSelect}
          />
          <LogisticFilter
            icon={<img src="/pcl.png" alt="Pcl Poste" className="h-8 w-8" />}
            clicked={PclFlagSelected}
            onClick={handlPclFlagSelect}
          /> */}
        </div>
      </div>

      <div className="flex-grow">
        <ItalyMap
          setSelectedCity={handleMarkerSelection}
          showPclMarker={pclFlagSelected}
          sdaFlagSelected={sdaFlagSelected}
        />
      </div>

      <div className="flex w-[300px] flex-col items-end">
        {isDetailClicked && (pclFlagSelected || sdaFlagSelected) && (
          <div className="mb-10 w-[300px] self-end">
            <LogisticCard message={selectedCity} />
          </div>
        )}
        <div className="self-end">
          <PieChartCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
