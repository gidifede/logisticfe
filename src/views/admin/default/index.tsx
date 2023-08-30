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

  const [LocationHovered, setLocationHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [placeFilterSelected, setPlaceFilterSelected] = useState(true);

  const handleChildEvent = (newMessage: string) => {
    setSelectedCity(newMessage);
  };

  return (
    <div className="mt-10 flex h-screen items-start">
      <div className="w-[120px]  p-4">
        <Card extra="flex-grow items-center rounded-[20px]">
          <LogisticFilter
            icon={
              <MdPlace
                className={`hover:bg-sky-700 h-7 w-7 ${
                  (LocationHovered && !clicked) || (!LocationHovered && clicked)
                    ? "text-red-500"
                    : ""
                }`}
              />
            }
            title={"SDA Facilities"}
          />
          <LogisticFilter
            icon={<MdDirections className={`h-7 w-7`} />}
            title={"Routes"}
          />
          <LogisticFilter
            icon={<MdDirectionsCar className={`h-7 w-7 `} />}
            title={"Fleet"}
          />
        </Card>
      </div>

      <div className="flex-grow">
        <ItalyMap setSelectedCity={handleChildEvent} />
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
