import React, { useState } from "react";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";

interface PieChartCardProps {
  chartName : string,
  showAdditionalInfo: boolean
}


const PieChartCard : React.FC<PieChartCardProps> = ({ chartName, showAdditionalInfo }) => {

  return (
    <Card extra="rounded-[20px] p-3 " >
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            {chartName}
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">Oggi</option>
            <option value="yearly">Ieri</option>
            <option value="weekly">Ieri l'altro</option>
          </select>
        </div>
      </div>

      <div className="mb-3 flex h-[220px] w-full items-center justify-center">
        <PieChart chartOptions={pieChartOptions} chartData={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">
              Operative
            </p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            80%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">
              Non Operative
            </p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            20%
          </p>
        </div>
      </div>
      
      {
        showAdditionalInfo && (
          <div className="my-10 flex flex-col items-center">
          <p className="mb-4">
          Capacità di elaborazione giornaliera media:{" "}
            <span className="border-black border bg-white text-black px-2 py-1 rounded-full">
              10
            </span>
          </p>
          <p className="mb-4">
          Prossima manutenzione pianificata{" "}
            <span className="border-black border bg-white text-black px-2 py-1 rounded-full">
              20
            </span>
          </p>
          </div>
        )
      }
      
    </Card>
  );
};

export default PieChartCard;