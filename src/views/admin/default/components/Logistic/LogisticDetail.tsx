import React from "react";
import PieChart from "components/charts/PieChart";
import ColumnChart from "components/charts/BarChart";
import PieChartCard from "../PieChartCard";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PieChartCardVeicoli from "../PieChartCardVeicoli";


function LogisticDetail() {

  return (

    <div className="h-50 grid grid-cols-3 gap-4">
      <ColumnChart></ColumnChart>
      <PieChartCard></PieChartCard>
      <PieChartCardVeicoli></PieChartCardVeicoli>
    </div>
  );
}

export default LogisticDetail;
