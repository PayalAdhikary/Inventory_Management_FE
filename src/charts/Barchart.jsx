import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Month", "Sales", "Expenses"],
  ["Jan", 1000, 400],
  ["Feb", 1170, 460],
  ["Mar", 660, 1120],
  ["Apr", 1030, 540],
  ["May", 1000, 400],
  ["Jun", 1170, 460],
  ["Jul", 660, 1120],
  ["Aug", 1030, 540],
];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Months",
  },
  
};

function Barchart() {
  return (
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      data={data}
      options={options}
      height={"400px"}
    />
  );
}

export default Barchart;