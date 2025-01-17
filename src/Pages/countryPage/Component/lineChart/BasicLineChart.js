import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({ population }) {
  const xData = population.map(item => item.year);
  const yData = population.map(item => item.value);

  return (
    <LineChart
      xAxis={[{ data: xData }]}
      series={[
        {
          data: yData,
          point: { visible: false },
        },
      ]}
      width={800}
      height={300}
    />
  );
}
