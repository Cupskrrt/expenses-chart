import React, { useState } from 'react';
import datas from '../utils/data.json';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function () {
  const [userData, setUserData] = useState({
    labels: datas.map((data) => data.day),
    datasets: [
      {
        label: 'amount',
        data: datas.map((data) => data.amount),
        backgroundColor: '#EB765E',
      },
    ],
  });

  console.log(userData);

  return <Bar data={userData} />;
}
