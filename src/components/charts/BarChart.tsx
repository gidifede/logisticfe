import React from "react";
import Chart from "react-apexcharts";

type ChartProps = {
  // using `interface` is also ok
  [x: string]: any;
};
type ChartState = {
  chartData: any[];
  chartOptions: any;
};

class ColumnChart extends React.Component<ChartProps, ChartState> {
  constructor(props: { chartData: any[]; chartOptions: any }) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
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
      });
    }, 1000); // Simula un ritardo di 1 secondo per il caricamento dei dati
  }


  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default ColumnChart;
