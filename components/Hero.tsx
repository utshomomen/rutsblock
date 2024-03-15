import * as React from "react";

interface PricingCardProps {
  title: string;
  slots: number;
  price: number;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  slots,
  price,
  buttonText,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full border-2 border-black shadow-[0_4px_8px_0_rgba(0,0,0,1),4px_0_8px_0_rgba(0,0,0,1)] ${
        isHovered ? "bg-pink-500" : "bg-white"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex flex-col justify-center px-14 py-9 mt-14 w-full shadow-sm max-md:px-5 max-md:mt-10 ${
          isHovered ? "bg-pink-500 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="self-center text-3xl font-black leading-9 uppercase">
              {title}
            </div>
            <div className="self-center mt-2 text-base leading-5">
              всего {slots} слотов
            </div>
          </div>
          <div className="flex gap-1 self-center px-px pt-3 pb-1 mt-6 text-5xl font-black text-center whitespace-nowrap max-md:text-4xl">
            <div className="grow max-md:text-4xl">{price}</div>
            
            {/* <img 
              loading="lazy"
              src="{{ext_3}}"
              alt=""
              className="shrink-0 self-start w-11 aspect-square"
            /> */} 
            {/* icon ruble */}


          </div>
          <div
            className={`justify-center items-center px-16 py-5 mt-6 text-xl font-black text-center bg-black text-white rounded-[35px] max-md:px-5`}
          >
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

const pricingData = [
  {
    title: "Первая волна",
    slots: 300,
    price: 1000,
    buttonText: "Sold out",
  },
  {
    title: "вторая волна",
    slots: 300,
    price: 1500,
    buttonText: "Регистрация",
  },
  {
    title: "третья волна",
    slots: 300,
    price: 2000,
    buttonText: "Скоро",
  },
];

const ParticipationCostSection: React.FC = () => {
  return (
    <section className="flex flex-col px-20 py-20 bg-yellow-400 rounded-3xl shadow-sm max-md:px-5">
      <h2 className="self-center mt-8 text-6xl font-black text-center text-black uppercase leading-[66px] max-md:max-w-full max-md:text-4xl">
        СТОИМОСТЬ УЧАСТИЯ
      </h2>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {pricingData.map((pricing, index) => (
            <PricingCard
              key={index}
              title={pricing.title}
              slots={pricing.slots}
              price={pricing.price}
              buttonText={pricing.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipationCostSection;
