import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FoodBlock } from "../components/FoodBlock";
import { FeaturedHardware } from "../components/FeaturedHardware";

export default function Home() {
  return (
    <div>
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
      </main>

      <footer></footer>
    </div>
  );
}
