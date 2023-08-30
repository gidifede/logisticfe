import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_italyLow from "@amcharts/amcharts4-geodata/italyLow";

// Dati per i marker delle città
const cityData = [
  { latitude: 41.9028, longitude: 12.4964, city: "Roma" }, // Roma
  { latitude: 45.4642, longitude: 9.19, city: "Milano" }, // Milano
  { latitude: 40.8518, longitude: 14.2681, city: "Napoli" }, // Napoli
  { latitude: 38.1157, longitude: 13.3615, city: "Palermo" }, // Palermo
];

interface ItalyMapProps {
  setSelectedCity: (message: string) => void;
}

const ItalyMap: React.FC<ItalyMapProps> = ({ setSelectedCity }) => {
  useEffect(() => {
    const map = initializeMap();
    return () => {
      map.dispose();
    };
  }, []);

  const initializeMap = () => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_italyLow;
    map.projection = new am4maps.projections.Miller();

    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    let imageSeries = map.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let marker = imageSeriesTemplate.createChild(am4core.Circle);
    marker.radius = 6;
    marker.fill = am4core.color("#4318FFFF");

    marker.tooltipHTML = "{city}";
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    marker.events.on("hit", function (event) {
      const clickedCityData = event.target.dataItem.dataContext;
      console.log(clickedCityData);
      console.log((clickedCityData as any).city);

      console.log(event);
      setSelectedCity((clickedCityData as any).city);
      // if (clickedCityData && clickedCityData.city) {
      //   setSelectedCity(clickedCityData.city);
      // }
    });

    imageSeries.data = cityData;

    return map;
  };

  return <div id="chartdiv" className="h-screen w-full"></div>;
};

export default ItalyMap;
