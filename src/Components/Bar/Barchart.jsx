import React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import { user } from '../Data/data';
import './Barchart.css';

const Barchart = () => {
  return (
    <ResponsiveBar className="app"
      data={user}
      keys={["name"]}
      indexBy="id"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40
      }}
    />
  );
  
}

export default Barchart