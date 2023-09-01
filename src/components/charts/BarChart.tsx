import React from "react";
import Chart from "react-apexcharts";

type ChartProps = {
  // using `interface` is also ok
  [x: string]: any;
};
type ChartState = {
  chartData: any[];
  chartOptions: any;
  numberOfPackages: number;
  numberOfPackagesProcessed: number;
  averageProcessingTime: number;
};

class ColumnChart extends React.Component<ChartProps, ChartState> {
  constructor(props: { chartData: any[]; chartOptions: any }) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
      numberOfPackages: 0,
      numberOfPackagesProcessed: 0,
      averageProcessingTime: 0,
    };
  }

  componentDidMount() {
    // Simuliamo il caricamento dei dati da una fonte esterna, ad esempio una richiesta API
    setTimeout(() => {
      this.setState({
        chartData: [
          { name: "Categoria 1", data: [10, 15, 8, 12] },
          { name: "Categoria 2", data: [5, 12, 6, 10] },
        ],
        chartOptions: {
          chart: {
            type: "bar",
          },
          xaxis: {
            categories: ["Gennaio", "Febbraio", "Marzo", "Aprile"],
          },
        },
        numberOfPackages: 42,
        numberOfPackagesProcessed: 35,
        averageProcessingTime: 24,
      });
    }, ); // Simula un ritardo di 1 secondo per il caricamento dei dati
  }

  
  render() {
    return (
      <div className="my-5">
        <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="100%"
        />
        <div className="my-10 flex flex-col items-center">
          <p className="mb-4">
            Numero di pacchi attesi:{" "}
            <span className="border-black border bg-white text-black px-2 py-1 rounded-full">
              {this.state.numberOfPackages}
            </span>
          </p>
          <p className="mb-4">
            Numero di pacchi lavorati:{" "}
            <span className="border-black border bg-white text-black px-2 py-1 rounded-full">
              {this.state.numberOfPackagesProcessed}
            </span>
          </p>
          <p className="mb-4">
            Tempo medio di elaborazione:{" "}
            <span className="border-black border bg-white text-black px-2 py-1 rounded-full">
              {this.state.averageProcessingTime} min
            </span>
          </p>
        </div>
      </div>
    );
  }
}
export default ColumnChart;





