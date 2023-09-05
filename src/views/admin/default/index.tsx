import React, { useState, useEffect } from "react";
import ItalyMap from "./components/Logistic/ItalyMap";
import PieChartCard from "./components/PieChartCard";
import LogisticCard from "./components/Logistic/LogisticCard";
import Widget from "components/widget/Widget";
import { MdPlace, MdDirections, MdDirectionsCar } from "react-icons/md";
import LogisticFilter from "./components/Logistic/LogisticFilter";
import CustomMdPlaceIcon from "./components/Logistic/icons";
import CustomMdPlaceIconSDA from "./components/Logistic/iconSDA";

import fetchTotalParcelSla from "./components/Logistic/client/parcelApiClient";
import PieChartCardWip from "./components/PieChartCardWIP";

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const [pclFlagSelected, setPclFlagSelected] = useState(true);
  const [sdaFlagSelected, setSdaFlag] = useState(false);

  const [parcelData, setParcelData] = useState({
    parcel_in_sla: 0,
    parcel_out_sla: 0,
  });

  const [isDetailClicked, setDetailCliked] = useState(false);

  const handleMarkerSelection = (newMessage: string) => {
    setDetailCliked(true);
    setSelectedCity(newMessage);
  };

  const handleLocationFlagSelect = () => {
    setPclFlagSelected(!pclFlagSelected);
    if (!pclFlagSelected && !sdaFlagSelected) {
      setDetailCliked(false);
    }
  };

  const handleSdaFlagSelect = () => {
    setSdaFlag(!sdaFlagSelected);
    if (!pclFlagSelected && !sdaFlagSelected) {
      setDetailCliked(false);
    }
  };

  async function fetchData() {
    try {
      const data = await fetchTotalParcelSla();
      setParcelData(data);
    } catch (error) {
      console.error("Error fetching parcel data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-10 flex h-screen items-start">
      <div className="w-[120px]  p-4">
        <div className="!z-5 relative flex flex-grow flex-col items-center rounded-[20px] rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <LogisticFilter
            icon={<CustomMdPlaceIcon />}
            clicked={pclFlagSelected}
            onClick={handleLocationFlagSelect}
          />

          {/* <LogisticFilter
            icon={
              <p className="leading-1 flex font-extrabold dark:text-white">
                SDA
              </p>
            }
            clicked={sdaFlagSelected}
            onClick={handleSdaFlagSelect}
          /> */}

          <LogisticFilter
            icon={
              <img
                src={process.env.PUBLIC_URL + "/sdaa.png"}
                alt="Custom Icon"
                className={`h-8 w-7`}
              />
            }
            clicked={sdaFlagSelected}
            onClick={handleSdaFlagSelect}
          />
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
        <div className="self-end">
          /* Change this in Piechart normal if api is down only for test */
          <PieChartCardWip
            chartName="Pacchi"
            showAdditionalInfo={false}
            inSlaParcels={parcelData.parcel_in_sla}
            outOfSlaParcels={parcelData.parcel_out_sla}
          />
        </div>
        {isDetailClicked && (pclFlagSelected || sdaFlagSelected) && (
          <div className="mb-10 mt-5 w-[300px] self-end">
            <LogisticCard message={selectedCity} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
