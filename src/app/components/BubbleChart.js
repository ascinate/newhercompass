'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Bubble = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Bubble),
  { ssr: false }
);

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const BubbleChart = ({ data }) => {
  if (!data) return <p>Loading...</p>;
  if (data.length === 0) return <p>No prediction data.</p>;

  const dataset = data.map(item => ({
    x: item.feature_vector.sleep_hours,
    y: item.feature_vector.mood,
    r: item.feature_vector.energy_level * 4
  }));

  const chartData = {
    datasets: [
      {
        label: 'Sleep vs Mood',
        data: dataset,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { text: "Sleep Hours", display: true } },
      y: { title: { text: "Mood Level", display: true } }
    }
  };

  return <Bubble data={chartData} options={options} />;
};

export default BubbleChart;
