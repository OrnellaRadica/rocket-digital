import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FoodBlock } from "../components/FoodBlock";
import { FeaturedHardware } from "../components/FeaturedHardware";
import { Evaluation } from "../components/Evaluation";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ornella Radica - Kibus</title>
        <meta
          name="description"
          content="Prueba Ornella Radica para Rocket Digital"
        />
        <link
          rel="icon"
          href="https://www.kibuspetcare.com/wp-content/uploads/2021/03/cropped-kibus-favicon-192x192.png"
        />
      </Head>

      <Header />

      <main className="scroll-smooth">
        <Hero />
        <FoodBlock />
        <FeaturedHardware />
        <Evaluation />
      </main>

      <Footer />
    </>
  );
}
