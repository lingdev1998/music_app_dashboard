import React, { Component, useState } from 'react'
import { PieChart, Area, Pie, Cell, Tooltip } from 'recharts';
import axios from 'axios';
const data01 = [
  { name: 'Group A', value: 400, v: 89, color: 'rgba(52, 182, 193, 0.7)' },
  { name: 'Group B', value: 300, v: 100, color: 'rgba(56, 206, 33, 0.7)' },
  { name: 'Group C', value: 200, v: 200, color: 'rgba(208, 88, 216, 0.7)' },
  { name: 'Group D', value: 200, v: 20, color: 'rgba(206, 66, 47, 0.7)' },
  { name: 'Group E', value: 278, v: 40, color: 'rgba(72, 84, 191, 0.7)' },
  { name: 'Group F', value: 189, v: 60, color: 'rgba(222, 249, 47, 0.7)' },
];


function PieChart1(props) {
  const [chartData, setChartData] = useState(data01)
  return (
    <div style={{ margin: '0.2rem' }}>
      <PieChart width={props.width} height={props.height} >
        <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
          {
            chartData.map((entry, index) => <Cell fill={entry.color} />)
          }
        </Pie>
        <Tooltip />
        {/* <Legend/> */}
      </PieChart>
    </div>
  )
}

export default PieChart1;