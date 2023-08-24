import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_italyLow from "@amcharts/amcharts4-geodata/italyLow";
import PieChartCard from "./components/PieChartCard";

// Dati per i marker delle città
const cityData = [
  { latitude: 41.9028, longitude: 12.4964, city: "Roma" }, // Roma
  { latitude: 45.4642, longitude: 9.19, city: "Milano" }, // Milano
  { latitude: 40.8518, longitude: 14.2681, city: "Napoli" }, // Napoli
  { latitude: 38.1157, longitude: 13.3615, city: "Palermo" }, // Palermo
];

const initializeMap = () => {
  let map = am4core.create("chartdiv", am4maps.MapChart);
  map.geodata = am4geodata_italyLow;
  map.projection = new am4maps.projections.Miller();

  let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;

  let imageSeries = map.series.push(new am4maps.MapImageSeries());
  let imageSeriesTemplate = imageSeries.mapImages.template;
  let marker = imageSeriesTemplate.createChild(am4core.Circle);
  marker.radius = 4;
  marker.fill = am4core.color("#ff0000");
  imageSeriesTemplate.propertyFields.latitude = "latitude";
  imageSeriesTemplate.propertyFields.longitude = "longitude";

  marker.tooltipText = "{city}";

  marker.tooltipY = -10; // Posizione del tooltip rispetto al marker
  // Utilizza l'array di dati esterno per i marker delle città
  imageSeries.data = cityData;

  return map;
};

const Dashboard = () => {
  useEffect(() => {
    const map = initializeMap();
    return () => {
      map.dispose();
    };
  }, []);

  return (
    <div className="mt-10 flex h-screen flex-col items-center">
      <div className="flex h-full w-full max-w-screen-xl justify-between">
        <div id="chartdiv" className="h-screen w-full"></div>
        <div className="justify-right flex h-screen w-[300px] flex-col">
          <div className="h-[245px]">
            <PieChartCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
