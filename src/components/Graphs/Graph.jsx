import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const Graph = () => {
  const data = {
    labels: [
      "May 12",
      "May 13",
      "May 14",
      "May 15",
      "May 16",
      "May 17",
      "May 18",
    ],
    datasets: [
      {
        data: [8, 7.5, 6, 7, 4, 8, 5.5],
        backgroundColor: "transparent",
        borderColor: "#551E19",
        pointBackgroundColor:"#551E19",
        pointBorderColor: "transparent",
        pointBorderWidth: 2,
        borderWidth: 1.7,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Active Status",
        position: "bottom",
        color: "#551E19",
        font: {
          size: "24px",
          family: "Helvetica Neue",
        },
        padding: {
          top: 30,
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + "K",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default Graph;
