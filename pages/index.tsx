import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
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

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
