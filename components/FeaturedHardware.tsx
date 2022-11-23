import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { ArrowCircle, ArrowSimple } from "./Icons";

const images = [
  "/images/featured-1.png",
  "/images/featured-2.jpeg",
  "/images/featured-3.jpeg",
  "/images/featured-4.jpeg",
];

function MobileCarousel() {
  return (
    <div className="md:hidden bg-featured bg-contain bg-no-repeat gap-4 bg-center w-auto min-h-[400px] flex justify-start md:justify-center items-center relative  overflow-x-scroll lg:ml-20">
      {images.map((image) => (
        <div
          key={image}
          className="first-of-type:ml-6 last-of-type:mr-6 rounded-[25px] overflow-hidden min-w-[85%] md:min-w-0 my-10 max-w-[600px]"
        >
          <Image
            src={image}
            alt="kibus"
            width={680}
            height={520}
            className="object-cover aspect-[4/3]"
          />
        </div>
      ))}
    </div>
  );
}

function DesktopCarousel() {
  const [index, setIndex] = useState(0);
  const handlePrevious = () => {
    setIndex((p) => (p > 0 ? p - 1 : 0));
  };
  const handleNext = () => {
    setIndex((p) => (p < images.length - 1 ? p + 1 : images.length - 1));
  };
  const image = images[index];

  return (
    <div className="hidden md:flex bg-featured bg-contain bg-no-repeat gap-4 bg-center w-auto min-h-[400px] justify-start items-center relative overflow-x-scroll ">
      <div className="rounded-[25px] overflow-hidden my-10">
        <Image
          key={image}
          src={image}
          alt="kibus"
          width={680}
          height={520}
          className="object-cover aspect-[4/3]"
        />
      </div>

      {index > 0 ? (
        <button
          onClick={handlePrevious}
          type="button"
          className="h-14 w-14 z-10 flex justify-center items-center bg-black/[0.16] hover:bg-black/25 absolute rounded-full left-5 rotate-180"
        >
          <ArrowSimple />
        </button>
      ) : null}
      {index < images.length - 1 ? (
        <button
          type="button"
          onClick={handleNext}
          className="h-14 w-14 z-10 flex justify-center items-center bg-black/[0.16] hover:bg-black/25 absolute rounded-full right-5"
        >
          <ArrowSimple />
        </button>
      ) : null}
    </div>
  );
}

export function FeaturedHardware() {
  return (
    <section className="bg-background w-full py-16">
      <div className="max-w-[1500px] mx-auto md:flex md:items-center md:justify-between md:gap-8  md:px-6 lg:px-20">
        <MobileCarousel />
        <DesktopCarousel />
        <div className="md:max-w-[400px] lg:max-w-[460px] mx-auto sm:mx-0 px-6 lg:px-0 mt-16 md:mt-0">
          <h2 className="text-4xl leading-[43px] font-bold mb-4">
            Mejor para ellos, más fácil y cómodo para ti
          </h2>
          <span className="text-base leading-6 text-[#111111]">
            Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta
            sana y natural a tu perro de forma cómoda y rápida. Nuestro
            dispositivo cocina automáticamente la cantidad exacta en cada comida
            e incluso lo puedes programar a través de la app. Tu perro
            disfrutará comida de casera de primera calidad, con el mínimo
            esfuerzo.
          </span>
          <div className="flex flex-col lg:flex-row gap-4 mt-10 lg:mt-[47px]">
            <Button ariaLabel="Reserva ahora" href="#footer">
              Reserva ahora
            </Button>
            <Button
              ariaLabel="Reserva ahora"
              variant="secondary"
              onClick={() => console.log("Quiero saber más")}
              icon={<ArrowCircle />}
            >
              Quiero saber mas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
