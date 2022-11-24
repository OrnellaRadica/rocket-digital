import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import { Time, Water, Quantity, History, Wash, App } from "./Icons";

const items = [
  {
    id: "item1",
    icon: <Time />,
    title: "Programable 24h",
  },
  {
    id: "item2",
    icon: <Water />,
    title: "Agua siempre disponible",
  },
  {
    id: "item3",
    icon: <Quantity />,
    title: "Cantidad personalizable",
  },
  {
    id: "item4",
    icon: <History />,
    title: "Histórial de las comidas",
  },
  {
    id: "item5",
    icon: <Wash />,
    title: "Fácil de usar y lavar",
  },
  {
    id: "item6",
    icon: <App />,
    title: "App para iOS y Android",
  },
];
export function Evaluation() {
  const ref: MutableRefObject<null | HTMLElement> = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="bg-background w-full py-16">
      <div className="max-w-[1500px] mx-auto lg:px-20 md:flex md:flex-row-reverse md:justify-center md:items-start lg:gap-20">
        <div className="relative">
          <Image
            src="/images/image-13.png"
            alt="maquina"
            width={610}
            height={550}
            className="bg-transparent"
          />
          <div className="absolute bottom-0 right-10 w-[50%] md:top-24 md:right-0">
            <Image
              src="/images/image-15.png"
              alt="telefono"
              width={220}
              height={520}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-8 mt-8 md:mt-0 md:flex md:flex-col md:gap-8  px-6 lg:px-0 sm:min-w-[312px]">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 justify-start items-center"
              style={{
                transform: isInView ? "none" : "scale(0.3)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  index * 250
                }ms`,
              }}
            >
              <div className="w-11 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="font-semibold text-base leading-5 text-center">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
