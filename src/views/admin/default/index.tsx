import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_italyLow from "@amcharts/amcharts4-geodata/italyLow";
import PieChartCard from "./components/PieChartCard";
import LineChart from "components/charts/LineChart";

const Dashboard = () => {
  useEffect(() => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_italyLow;
    map.projection = new am4maps.projections.Miller();

    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // Aggiungi marker alle città
    let imageSeries = map.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let marker = imageSeriesTemplate.createChild(am4core.Circle);
    marker.radius = 4;
    marker.fill = am4core.color("#ff0000");
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    imageSeries.data = [
      { latitude: 41.9028, longitude: 12.4964 }, // Roma
      { latitude: 45.4642, longitude: 9.19 }, // Milano
      { latitude: 40.8518, longitude: 14.2681 }, // Napoli
      { latitude: 38.1157, longitude: 13.3615 }, // Palermo
    ];

    // Connetti Roma e Milano con una linea
    // let lineSeries = map.series.push(new am4maps.MapLineSeries());
    // lineSeries.data = [
    //   {
    //     multiGeoLine: [
    //       [
    //         { latitude: 41.9028, longitude: 12.4964 }, // Roma
    //         { latitude: 45.4642, longitude: 9.19 }, // Milano
    //       ],
    //     ],
    //   },
    // ];

    return () => {
      map.dispose();
    };
  }, []);

  return (
    <div className="mt-10 flex h-screen flex-col items-center">
      <div className="flex h-full w-full max-w-screen-xl justify-between">
        {/* Mappa dell'Italia per restringierla leggermentew-1/2*/}
        <div id="chartdiv" className="h-screen w-full"></div>

        {/* Grafici */}
        <div className="justify-right flex h-screen w-[300px] flex-col">
          {/* Grafico a torta */}
          <div className="h-[245px]">
            <PieChartCard />
          </div>

          {/* Grafico a linee */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
