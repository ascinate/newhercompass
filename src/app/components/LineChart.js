'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Line chart
const Line = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Line),
  { ssr: false }
);

// Chart.js imports
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {

  // If data not loaded yet, use placeholders
  const moodValues =
    data?.predictions?.map(p => p.feature_vector?.avg_mood ?? null) || [12, 19, 8, 15, 22, 30, 28];

  const sleepValues =
    data?.predictions?.map(p => p.feature_vector?.avg_sleep ?? null) || [8, 12, 10, 18, 25, 27, 30];

  const labels =
    data?.predictions?.map(p =>
      new Date(p.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    ) || ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  // Chart dataset
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Mood',
        data: moodValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Sleep Avg',
        data: sleepValues,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
