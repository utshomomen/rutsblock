import Image from 'next/image';
import * as React from "react";
import DistanceItem from "./DistanceItem";
import PaceItem from "./PaceItem";
import runningmanImage from '../public/images/runningman.jpg';

// ... rest of the code ...

interface UrbanTrailRaceProps {
  backgroundImage: string;
}

const UrbanTrailRace: React.FC<UrbanTrailRaceProps> = ({ backgroundImage }) => {
  const [selectedPace, setSelectedPace] = React.useState<"light" | "medium" | "fast">("medium");
  const distances = [
    { distance: 5, unit: "км" },
    { distance: 10, unit: "км" },
  ];
  const paces = {
    light: [
      { pace: "5:30", unit: "мин/км." },
      { pace: "6:10", unit: "мин/км." },
    ],
    medium: [
      { pace: "6:10", unit: "мин/км." },
      { pace: "6:50", unit: "мин/км." },
    ],
    fast: [
      { pace: "6:50", unit: "мин/км." },
      { pace: "7:30", unit: "мин/км." },
    ],
  };
  const getBgColor = (pace: "light" | "medium" | "fast") => {
    if (pace === selectedPace) {
      switch (pace) {
        case "light":
          return "bg-blue-500";
        case "medium":
          return "bg-green-500";
        case "fast":
          return "bg-yellow-400";
      }
    }
    return "";
  };

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[898px] max-md:px-5 max-md:max-w-full">
        <Image
           loading="lazy"
           src="/images/whitebackground.jpg" // Update this line
           alt=""
          className="object-cover absolute inset-0 size-full"
          width={1000}
          height={1000}
        />
        <div className="flex relative flex-col mt-7 w-full max-w-[1290px] max-md:max-w-full">
          <div className="flex flex-col text-black max-md:max-w-full">
            <h1 className="text-6xl font-black uppercase leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              ВЫБИРАЙ, С КАКИМ ТЕМПОМ ПОБЕЖИШЬ
            </h1>
            <p className="mt-4 text-xl leading-6 max-md:max-w-full">
              Урбан трейл — не обычный забег. Маршрут проходит не только по
              дорогам общего пользования, но и по паркам, лестницам города и
              даже сквозь здания.
            </p>
          </div>
          <div className="flex flex-col pt-20 max-md:max-w-full">
            <div className="flex gap-0 mt-28 text-3xl font-black leading-9 text-black uppercase max-md:flex-wrap max-md:mt-10">
              <button
                className={`justify-center py-5 px-20 rounded-3xl max-md:px-8 max-md:max-w-full ${getBgColor(
                  "light"
                )}`}
                onClick={() => setSelectedPace("light")}
              >
                Легкий темп
              </button>
              <button
                className={`justify-center py-5 px-20 rounded-3xl max-md:px-8 max-md:max-w-full ${getBgColor(
                  "medium"
                )}`}
                onClick={() => setSelectedPace("medium")}
              >
                средний темп
              </button>
              <button
                className={`justify-center py-5 px-20 rounded-3xl max-md:px-8 max-md:max-w-full ${getBgColor(
                  "fast"
                )}`}
                onClick={() => setSelectedPace("fast")}
              >
                быстрый темп
              </button>
            </div>
            <div
              className={`pt-10 px-7 pb-6 max-md:px-5 max-md:max-w-full ${getBgColor(
                selectedPace
              )}`}
            >
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <Image
  loading="lazy"
  src="/images/runningman.png" // Update this line
  alt=""
  className="grow w-full aspect-[1.15] max-md:mt-10"
  width={500}
  height={500 / 1.15}
/>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                    <h2 className="text-xl font-bold leading-6 uppercase text-neutral-900 text-center">
                      ДВА ВИДА ДИСТАНЦИИ
                    </h2>
                    <div className="shrink-0 mt-5 h-px bg-black border border-black border-solid mx-auto w-1/2" />
                    <div className="flex flex-col mt-8 font-black text-white whitespace-nowrap">
                      {distances.map((item, index) => (
                        <DistanceItem
                          key={index}
                          distance={item.distance}
                          unit={item.unit}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto font-black text-white max-md:mt-10">
                    <h2 className="text-xl font-bold leading-6 uppercase text-neutral-900 text-center">
                      БЕЖИМ СО СКОРОСТЬЮ
                    </h2>
                    <div className="shrink-0 mt-5 h-px bg-black border border-black border-solid mx-auto w-1/2" />
                    <div className="mt-14 max-md:mt-10">
                      {paces[selectedPace].map((item, index) => (
                        <PaceItem
                          key={index}
                          pace={item.pace}
                          unit={item.unit}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbanTrailRace;
