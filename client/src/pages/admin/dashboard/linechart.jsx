import React, { useCallback, useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
    axis: "x",
  },
  plugins: {
    tooltip: {
      enabled: true,
    },
    legend: false,
  },
  scales: {
    y: {
      grid: {
        drawOnChartArea: true,
        drawBorder: true,
      },
      ticks: {
        color: "#929292",
      },
    },
    x: {
      grid: {
        color: "white",
        drawBorder: false,
        borderDash: [0],
        border: false,
      },
      ticks: {
        font: {
          family: "'Mulish', sans-serif",
          size: "16px",
        },
        color: "#929292",
      },
    },
  },
  elements: {
    point: {
      radius: 1,
    },
    line: {
      tension: 0.3,
      borderWidth: 2,
    },
  },
};

const createData = () => {
  return ["01", "02", "03", "04", "05", "06", "07", "08", "09"].map((month) => {
    const profit = Math.round(Math.random() * 800);
    const newUsers = ~~(Math.random() * 1000) + 50;
    return {
      month,
      sales: Math.round(profit / 100),
      profit,
      newUsers,
    };
  });
};

const fetchDataFromAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(createData());
    }, 750);
  });
};

const LineChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const results = await fetchDataFromAPI();

    setData(results);
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const chartData = {
    labels: data.map(({ month }) => month),
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(51,200,99,.1)",
        borderColor: "#3F8CFF",
        fill: false,
        data: data.map(({ sales }) => sales),
        lineTension: 0.2,
      },
    ],
  };

  if (loading) return "Loading...";

  return (
    
    <Chart
      type="line"
      data={chartData}
      options={options}
      className="w-full h-full"
    />
  );
};

export default LineChart;
