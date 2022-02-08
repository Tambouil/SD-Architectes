import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          SD Architectes | Agence d'architecture à Rochefort sur mer
        </title>
        <meta name="description" content="Agence d'architecture à Rochefort" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-container">
        <h1>Homepage</h1>
      </div>
    </div>
  );
}
