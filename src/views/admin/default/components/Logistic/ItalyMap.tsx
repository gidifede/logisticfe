import React, { useEffect } from "react";
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

const ItalyMap = () => {
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
    marker.radius = 4;
    marker.fill = am4core.color("#4318FFFF");
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "custom-tooltip";
    document.body.appendChild(tooltipDiv);

    imageSeriesTemplate.events.on("over", (event) => {
      const marker = event.target;
      const cityData = marker.dataItem.dataContext;
      const tooltipContent = `
        <div class="bg-white text-black p-4 rounded shadow-lg">
          <h1 class="text-xl font-bold">${cityData}</h1>
          <p>Questo è il resto del testo</p>
          <a href="https://it.wikipedia.org/wiki/${cityData}" target="_blank" class="text-blue-500">Maggiori informazioni</a>
          <img src="https://www.example.com/${cityData}.jpg" alt="${cityData}" class="w-16 h-16 mt-2">
          <button class="bg-blue-500 text-white p-2 mt-2 rounded" onclick="window.location.href='https://www.example.com/${cityData}'">Vai alla pagina</button>
        </div>
      `;

      tooltipDiv.innerHTML = tooltipContent;

      // Posizionamento orizzontale
      const tooltipWidth = tooltipDiv.offsetWidth;
      const x = marker.pixelX - tooltipWidth / 2;
      tooltipDiv.style.left = `${x}px`;

      // Posizionamento verticale
      const y = marker.pixelY - tooltipDiv.offsetHeight - 10;
      tooltipDiv.style.top = `${y}px`;

      tooltipDiv.style.display = "block";
    });

    imageSeriesTemplate.events.on("out", () => {
      tooltipDiv.style.display = "none";
    });
    imageSeries.data = cityData;

    return map;
  };

  return <div id="chartdiv" className="h-screen w-full"></div>;
};

export default ItalyMap;
