import * as React from "react";
import runningmanImage from '../public/images/runningman.jpg';
interface DistanceItemProps {
  distance: number;
  unit: string;
}

const DistanceItem: React.FC<DistanceItemProps> = ({ distance, unit }) => (
  <div className="flex gap-4">
    <div className="text-6xl uppercase leading-[66px] max-md:text-4xl">
      {distance}
    </div>
    <div className="flex-auto my-auto text-3xl leading-9">{unit}</div>
  </div>
);

export default DistanceItem;
