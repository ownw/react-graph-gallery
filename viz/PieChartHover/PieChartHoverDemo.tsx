import { data } from "./data";
import { PieChart } from "./PieChart";

export const PieChartHoverDemo = ({ width = 700, height = 400 }) => (
  <PieChart data={data} width={width} height={height} />
);
