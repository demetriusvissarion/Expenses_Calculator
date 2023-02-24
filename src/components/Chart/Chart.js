import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

import { useSelector } from "react-redux";

const Chart = () => {
  const dataPoints = useSelector((state) => state.data);
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
