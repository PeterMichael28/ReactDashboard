
import './chart.scss'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '../../../data';


const Chart = ({aspect, title}) => {

    
  return (
      <div className='chart'>  
      <p className="title">{ title }</p>
    <ResponsiveContainer aspect={aspect}>
    <AreaChart width={730} height={350} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="90%" stopColor="#8884d8" stopOpacity={0.1}/>
    </linearGradient>
  
  </defs>
  <XAxis dataKey="name" />
  {/* <YAxis /> */}
  <CartesianGrid strokeDasharray="3 3"  className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
</ResponsiveContainer>

          
    
    </div>
  )
}

export default Chart