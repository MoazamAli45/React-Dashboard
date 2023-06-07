import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Sales", "Expense per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Others", 2],
  ["Extra", 7], // CSS-style declaration
];

export const options = {
  title: "Sales ",
  pieHole: 0.4,
  is3D: false,
  colors: [
    "rgb(81, 190, 255)",
    "rgb(255, 105, 138)",
    "rgb(40,34,70)",
    "#188310",
    "#f39f2a",
  ],
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
}
