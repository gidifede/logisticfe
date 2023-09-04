import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_italyLow from "@amcharts/amcharts4-geodata/italyLow";
import UPIcon from "./ptt.png";
import SDAIcon from "./sdaa.png";

const cityData = [
  { latitude: 41.9028, longitude: 12.4964, city: "Roma", tag: "city" }, // Roma
  { latitude: 45.4642, longitude: 9.19, city: "Milano", tag: "city" }, // Milano
  { latitude: 40.8518, longitude: 14.2681, city: "Napoli", tag: "city" }, // Napoli
  { latitude: 38.1157, longitude: 13.3615, city: "Palermo", tag: "city" }, // Palermo
];

const cityDataHubSda = [
  { latitude: 40.3539, longitude: 18.1719, city: "Lecce", tag: "hubSda" }, // Lecce
  { latitude: 41.1172, longitude: 16.8719, city: "Bari", tag: "hubSda" }, // Bari
  { latitude: 40.6828, longitude: 14.7681, city: "Salerno", tag: "hubSda" }, // Salerno
  { latitude: 45.4384, longitude: 12.3277, city: "Venezia", tag: "hubSda" }, // Venezia
];

interface ItalyMapProps {
  setSelectedCity: (message: string) => void;
  showPclMarker: boolean;
  sdaFlagSelected: boolean; // Aggiunto il flag per gli hub SDA
}

const ItalyMap: React.FC<ItalyMapProps> = ({ setSelectedCity, showPclMarker, sdaFlagSelected }) => {
  useEffect(() => {
    const map = initializeMap(showPclMarker, sdaFlagSelected);
    return () => {
      map.dispose();
    };
  }, [showPclMarker, sdaFlagSelected]);

  const initializeMap = (showAllMarkers: boolean, sdaFlagSelected: boolean) => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_italyLow;
    map.projection = new am4maps.projections.Miller();

    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    let imageSeries = map.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;

    let imageSeriesSda = map.series.push(new am4maps.MapImageSeries());
    let imageSeriesSdaTemplate = imageSeriesSda.mapImages.template;

    if (showAllMarkers || sdaFlagSelected) {
      // Crea l'icona UP solo se è selezionato showAllMarkers
      if (showAllMarkers) {
        let marker = imageSeriesTemplate.createChild(am4core.Image);
        marker.width = 24; // Personalizza la larghezza
        marker.height = 24;
        marker.horizontalCenter = "middle"; // Allinea l'icona orizzontalmente al centro
        marker.verticalCenter = "bottom"; // Allinea l'icona verticalmente in basso
        marker.marginTop = -14; // Sposta l'icona leggermente più in basso di 14 pixel
        marker.href = UPIcon;

        marker.tooltipHTML = "{city}";
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";

        marker.events.on("hit", function (event) {
          const clickedCityData = event.target.dataItem.dataContext;
          setSelectedCity((clickedCityData as any).city);
        });
        imageSeries.data = cityData;
      }

      // Crea l'icona SDA solo se è selezionato sdaFlagSelected
      if (sdaFlagSelected) {
        let markerSda = imageSeriesSdaTemplate.createChild(am4core.Image);
        markerSda.width = 24; // Personalizza la larghezza
        markerSda.height = 24;
        markerSda.horizontalCenter = "middle"; 
        markerSda.verticalCenter = "bottom"; 
        markerSda.marginTop = -8; 
        markerSda.href = SDAIcon;

        markerSda.tooltipHTML = "{city}";
        imageSeriesSdaTemplate.propertyFields.latitude = "latitude";
        imageSeriesSdaTemplate.propertyFields.longitude = "longitude";

        markerSda.events.on("hit", function (event) {
          const clickedCityData = event.target.dataItem.dataContext;
          setSelectedCity((clickedCityData as any).city);
        });

        imageSeriesSda.data = cityDataHubSda;
      }
    }

    return map;
  };

  return <div id="chartdiv" className="h-screen w-full"></div>;
};

export default ItalyMap;
