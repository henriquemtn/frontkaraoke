// ...imports

import React, { useRef } from 'react';
import Chart from 'react-apexcharts';

interface ChartExportProps {
  options: any;
  series: any;
}

const ChartExport: React.FC<ChartExportProps> = ({ options, series }) => {
  const chartRef = useRef<any>(null);

  return (
    <div className='pt-10'>
      <Chart
        options={options}
        series={series}
        type="bar" 
        ref={chartRef}
      />
    </div>
  );
};

export default ChartExport;
