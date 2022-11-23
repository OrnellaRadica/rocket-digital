import Image from "next/image";
import Button from "./Button";
import { ArrowCircle } from "./Icons";

export function Hero() {
  return (
    <section className="w-full">
      <div className="sm:flex sm:flex-row-reverse justify-between items-center gap-4 max-w-[1500px] mx-auto px-6 lg:px-20">
        <div className="mb-10 sm:mb-0 max-w-md ml-auto mr-auto lg:max-w-none lg:m-0">
          <Image
            src="/../public/images/hero_image.png"
            alt="perro con su dueña"
            width={690}
            height={700}
          />
        </div>
        <div className="mx-auto sm:mx-0">
          <h1 className="text-[32px] leading-none lg:text-7xl font-bold max-w-[710px] mb-2 lg:mb-8">
            Alimentar bien a tu perro es más fácil que nunca
            <span className="text-primary">.</span>
          </h1>
          <h2 className="text-[16px] lg:text-[22px] opacity-60 lg:leading-7 max-w-[652px]">
            La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
            tu compañero comida sana, rica y recién cocinada de una forma fácil
            y cómoda
          </h2>
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
