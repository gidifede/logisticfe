import React, { useState } from "react";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import { parcelSLAOptions } from "variables/parcelData";
import Card from "components/card";

interface PieChartCardProps {
  chartName: string;
  showAdditionalInfo: boolean;
  outOfSlaParcels?: number;
  inSlaParcels?: number;
}

// {"parcel_in_sla": 3457, "parcel_out_sla": 6653}

function calculateSlaPercentage(inSlaParcels: number, outOfSlaParcels: number) {
  const totalParcels = inSlaParcels + outOfSlaParcels;
  const inSlaPercentage = ((inSlaParcels / totalParcels) * 100).toFixed(2);
  const outSlaPercentage = ((outOfSlaParcels / totalParcels) * 100).toFixed(2);
  return [inSlaPercentage, outSlaPercentage] as const;
}

const PieChartCard: React.FC<PieChartCardProps> = ({
  chartName,
  showAdditionalInfo,
  outOfSlaParcels,
  inSlaParcels,
}) => {
  const [inSlaPercentage, outOfSlaPercentage] = calculateSlaPercentage(
    inSlaParcels,
    outOfSlaParcels
  );

  let inSla = parseFloat(inSlaPercentage);
  let outOfSla = parseFloat(outOfSlaPercentage);

  console.log(inSla);
  console.log(outOfSla);

  return (
    <Card extra="rounded-[20px] p-3 ">
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
        <PieChartCard
          chartName={chartName}
          showAdditionalInfo={showAdditionalInfo}
          outOfSlaParcels={outOfSla}
          inSlaParcels={inSla}
        />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-1 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">In SLA</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {inSlaPercentage} %
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="mb-1 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">Out Of SLA</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {outOfSlaPercentage} %
          </p>
        </div>
      </div>

      {showAdditionalInfo && (
        <div className="my-10 flex flex-col items-center">
          <p className="mb-4">
            Capacità di elaborazione giornaliera media:{" "}
            <span className="border-black text-black rounded-full border bg-white px-2 py-1">
              10
            </span>
          </p>
          <p className="mb-4">
            Prossima manutenzione pianificata{" "}
            <span className="border-black text-black rounded-full border bg-white px-2 py-1">
              20
            </span>
          </p>
        </div>
      )}
    </Card>
  );
};

export default PieChartCard;
