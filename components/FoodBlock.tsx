import Image from "next/image";
import Button from "./Button";
import { ArrowSimple } from "../components/Icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { MutableRefObject, useRef } from "react";

const blocks = [
  {
    id: "block0",
    title: "Pollo y Pimiento",
    alt: "Pollo y Pimiento",
    subtitle: "Energética, con ingredientes antioxidantes",
    image: "/images/pollo-pim.jpg",
  },
  {
    id: "block1",
    title: "Salmón y Arroz",
    alt: "Salmón y Arroz",
    subtitle: "Ipoalergénica, con Omega 3 y 6",
    image: "/images/salmon-arroz.png",
  },
  {
    id: "block2",
    title: "Cerdo y Calabaza",
    alt: "Cerdo y Calabaza",
    subtitle: "para dar vitalidad buena para el sistema inmune",
    image: "/images/cerdo-cal.png",
  },
  {
    id: "block3",
    button: "Tu Receta",
    alt: "Tu Receta",
    subtitle: "Ayúdanos a decidir nuestra nueva receta",
    image: "/images/receta.png",
  },
];

export function FoodBlock() {
  const ref: MutableRefObject<null | HTMLDivElement> = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  return (
    <section className="w-full foodblock-background">
      <motion.div
        className="max-w-[1500px] mx-auto lg:px-20 overflow-hidden"
        ref={ref}
        style={{ y }}
      >
        <div className="flex gap-4 justify-between foodblock-shadow mx-6 rounded-[20px] px-8 py-14 my-16 lg:px-[90px] lg:py-[83px] lg:mx-auto bg-white overflow-hidden w-full	overflow-x-scroll">
          {blocks.map((block) => (
            <div
              key={block.id}
              className="flex flex-col items-center w-[202px] text-center"
            >
              <div className="min-w-[200px]">
                <Image
                  src={block.image}
                  alt={block.alt}
                  width={1000}
                  height={1000}
                />
              </div>
              {block.title ? (
                <h2 className="text-[22px] leading-7 font-bold">
                  {block.title}
                </h2>
              ) : null}
              {block.button ? (
                <Button
                  ariaLabel="Tu receta"
                  variant="gray"
                  icon={<ArrowSimple />}
                  className="max-w-max gap-2"
                  href="https://www.typeform.com/es/"
                  target="_blank"
                >
                  {block.button}
                </Button>
              ) : null}
              <span className="mt-6 text-subtitle text-base leading-5 font-[CharlevoixPro] font-normal">
                {block.subtitle}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
