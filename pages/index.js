import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SD Architectes</title>
        <meta name="description" content="Agence d'architecture à Rochefort" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <h1>Homepage</h1>
    </div>
  );
}
