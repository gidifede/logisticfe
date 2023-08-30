import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_italyLow from "@amcharts/amcharts4-geodata/italyLow";

const cityData = [
  { latitude: 41.9028, longitude: 12.4964, city: "Roma" }, // Roma
  { latitude: 45.4642, longitude: 9.19, city: "Milano" }, // Milano
  { latitude: 40.8518, longitude: 14.2681, city: "Napoli" }, // Napoli
  { latitude: 38.1157, longitude: 13.3615, city: "Palermo" }, // Palermo
];

const cityDataHubSda = [
  { latitude: 40.8518, longitude: 14.2681, city: "Napoli" },   // Napoli
  { latitude: 38.1157, longitude: 13.3615, city: "Palermo" },  // Palermo
  { latitude: 40.3539, longitude: 18.1719, city: "Lecce" },    // Lecce
  { latitude: 41.1172, longitude: 16.8719, city: "Bari" },     // Bari
  { latitude: 40.6828, longitude: 14.7681, city: "Salerno" },  // Salerno
  { latitude: 45.4384, longitude: 12.3277, city: "Venezia" },  // Venezia
];

interface ItalyMapProps {
  setSelectedCity: (message: string) => void;
  showAllMarkers: boolean;
  sdaFlagSelected: boolean; // Aggiunto il flag per gli hub SDA
}

const ItalyMap: React.FC<ItalyMapProps> = ({ setSelectedCity, showAllMarkers, sdaFlagSelected }) => {
  useEffect(() => {
    const map = initializeMap(showAllMarkers, sdaFlagSelected);
    return () => {
      map.dispose();
    };
  }, [showAllMarkers, sdaFlagSelected]);

  const initializeMap = (showAllMarkers: boolean, sdaFlagSelected: boolean) => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_italyLow;
    map.projection = new am4maps.projections.Miller();

    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    let imageSeries = map.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let marker = imageSeriesTemplate.createChild(am4core.Circle);
    marker.radius = 6;

      
    console.log(11111, sdaFlagSelected, showAllMarkers)
    if (sdaFlagSelected) {
      marker.stroke = am4core.color(showAllMarkers ? "#4318FFFF" : "#FF00FF"); // Blu per città, viola per hub SDA
      marker.fill = am4core.color(showAllMarkers ? "#4318FFFF" : "#FF00FF");
    } else {
      marker.stroke = am4core.color( "#4318FFFF"); // Blu per città
      marker.fill = am4core.color("#4318FFFF");
    }






    marker.tooltipHTML = "{city}";
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    marker.events.on("hit", function (event) {
      const clickedCityData = event.target.dataItem.dataContext;
      setSelectedCity((clickedCityData as any).city);
    });

  

    if (sdaFlagSelected && showAllMarkers) {
      imageSeries.data = cityData.concat(cityDataHubSda);
    } else if (sdaFlagSelected) {
      imageSeries.data = cityDataHubSda;
    } else if (showAllMarkers || showAllMarkers) {
      imageSeries.data = cityData;
    }

    return map;
  };

  return <div id="chartdiv" className="h-screen w-full"></div>;
};

export default ItalyMap;
