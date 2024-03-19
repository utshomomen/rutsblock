import * as React from "react";
import runningmanImage from '../public/images/runningman.jpg';
interface PaceItemProps {
  pace: string;
  unit: string;
}

const PaceItem: React.FC<PaceItemProps> = ({ pace, unit }) => (
  <div className="flex gap-4 whitespace-nowrap">
    <div className="grow text-6xl uppercase leading-[66px] max-md:text-4xl">
      {pace}
    </div>
    <div className="justify-center my-auto text-xl leading-6">{unit}</div>
  </div>
);

export default PaceItem;
