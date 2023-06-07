import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 Population", "2000 Population"],

  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
  ["Pakistan, PK", 1999000, 2000000],
];

export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  colors: ["rgb(81, 190, 255)", "rgb(255, 105, 138)"],
};

export default function HBarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="290px"
      data={data}
      options={options}
    />
  );
}
