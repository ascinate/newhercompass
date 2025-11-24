'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Line = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Line),
  { ssr: false }
);

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
  if (!data) return <p>Loading...</p>;
  if (data.length === 0) return <p>No prediction data.</p>;

  const labels = data.map(item =>
    new Date(item.created_at).toLocaleDateString()
  );

  const moodValues = data.map(item => item.feature_vector.mood);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Mood',
        data: moodValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      }
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
