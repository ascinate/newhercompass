'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Bar = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Bar),
  { ssr: false }
);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  if (!data) return <p>Loading...</p>;
  if (data.length === 0) return <p>No symptom prediction data.</p>;

  const labels = data.map(item => item.predicted_symptoms.top_symptom);
  const values = data.map(item => item.predicted_symptoms.intensity);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Symptom Frequency',
        data: values,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }
    ]
  };

  const options = { responsive: true };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
