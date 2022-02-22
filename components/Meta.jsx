import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "SD Architectes | Agence d'architecture à Rochefort sur Mer",
  keywords:
    "atelier d'architecture, sourd-durand, pascale durand, bruno sourd, architectes, ARCHITECTE, ARCHITECTES, architecte rochefort, 17, maitrise d'oeuvre, maitre d’oeuvre, marchés publics, maitrise d'ouvrage publique, commande publique et privée, construction, rénovation, réhabilitation, salle de spectacles, maison individuelle, logements, espaces publics, école, halte garderie, suivi de chantier, atelier d'architecture, architectes DPLG, architecture, architectes , dplg, desa, atelier, agence, poitou charentes, france, projet, individuelle, contemporaine, galerie, panorama, book, portfolio, traditionnelle, loft, villa, pavillon, duplex, triplex, construire, leger, cuisine, mezzanine, terrasse, vegetale, terrain, urbanisme, urbaniste, amenagement urbain, mobilier design, structure, ossature bois, acier",
  description:
    "L’agence Sourd-Durand Architectes, créée en 1999, a depuis acquis de nombreuses expériences permettant aujourd’hui de répondre à des projets très variés.",
};

export default Meta;
