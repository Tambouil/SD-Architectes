import React from "react";

const About = () => {
  return (
    <div>
      <main>
        <section className="agency">
          <div className="agency-wrapper">
            <h1 className="title">Agence SD Architectes</h1>
            <div className="agency-content">
              <h4 className="subtitle">
                Chez SD Architectes, chaque projet est considéré comme un
                nouveau défi à relever. Depuis plus de 22 ans, nous mettons nos
                savoir-faire, notre maîtrise technique et notre culture
                diversifiée au service de projets variés, tant par leur taille
                que par leur nature.
              </h4>
              <p>
                Nous capitalisons les expériences dans tous les secteurs:
                {"\n"}Tertiaire, industriel, scolaire, logement, construction,
                restructuration ou encore réhabilitation. Notre poyvalence est
                un atout et notre curiosité une chance de se réinventer.
              </p>
              <p>
                Pour chaque opération, notre réussite s'appuie sur le travail de
                notre équipe et sur sa faculté à travailler en étroite
                collaboration avec l'ensemble des intervenants et partenaires.
                La composition pluridisciplinaire de notre agence et les
                compétences de chacun créaient une véritable cohésion nous
                permettant ainsi d'avoir une capacité d'adaptation permanente
                face aux besoins et contraintes des projets.
              </p>
            </div>
            <div className="signature">
              <h4 className="title-signature">Pascale Durand & Bruno Sourd</h4>
            </div>
            <div className="agency-stats">
              <div className="stat-1">
                <p>22 Années d'expériences</p>
              </div>
              <div className="stat-2">
                <p>+ de 700 Projets</p>
              </div>
              <div className="stat-3">
                <p>+ de 60 Clients</p>
              </div>
            </div>
          </div>
        </section>

        <section className="environment">
          <div className="environment-wrapper">
            <h2 className="title">Environnement</h2>
            <p>
              Notre souci environnemental se concrétise par nos choix
              architecturaux et constructifs et s'enrichit de formations. Nous
              appliquons naturellement les enseignements reçus et les
              expériences acquises aux projets qui nous sont confiés. Nous les
              inscrivons dans une démarche de développement durable et
              d'amélioration de la qualité de vie des utilisateurs. Efficacité
              énergétique, orientation des espaces de vie, meilleure utilisation
              des sources d'énergie renouvelable, prescription de matériaux
              sains, tout est réfléchi à travers ces prismes.
            </p>
            <p>
              Nos connaissances se sont d'autant plus illustrées lors de la
              conception et de la réalisation de projets certifiés ou répondant
              aux labels Effinergie, Cerqual "H&E", Certivea NF H&E et BEPOS.
            </p>
          </div>
        </section>

        <section id="team" className="team-section">
          <div className="team">
            <h2 className="title">L'équipe</h2>
            <div className="team-wrapper">
              <div className="associates-wrapper">
                <div className="associate associate-1">
                  <div className="associate-header">
                    <img src="/img/ceo/bruno.jpg" alt="ceo image" />
                    <h5>
                      Bruno Sourd<span>Architecte DPLG</span>
                    </h5>
                  </div>
                  <div className="content">
                    <p>
                      Diplômée de l'école d'architecture de Bordeaux en 1992.
                    </p>
                    <ul>
                      <li>Formations : </li>
                      <li>Conception de batiments basse consommation</li>
                      <li>
                        Développement durable; connaissances techniques et
                        méthodes de conception intégratives
                      </li>
                      <li>
                        Rénovation à très basse consommmation d'énergie des
                        bâtiments existants - RT 2012
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="associate associate-2">
                  <div className="associate-header">
                    <img src="/img/ceo/pascale.jpg" alt="ceo image" />
                    <h5>
                      Pascale Durand<span>Architecte DPLG</span>
                    </h5>
                  </div>
                  <div className="content">
                    <p>
                      Diplômée de l'école d'architecture de Bordeaux en 1993.
                    </p>
                    <ul>
                      <li>Formations : </li>
                      <li>Haute Qualité Environnementale Niveaux 1 et 2</li>
                      <li>Conception de batiments basse consommation</li>
                      <li>
                        Développement durable; connaissances techniques et
                        méthodes de conception intégratives
                      </li>
                      <li>
                        Rénovation à très basse consommmation d'énergie des
                        bâtiments existants - RT 2012
                      </li>
                      <li>Conception de batiments: Passif BEPOS</li>
                      <li>
                        Formation Maquette numérique / BIM et nouvelles
                        pratiques
                      </li>
                      <li>
                        Conception bas carbone et énergies positive (label E+
                        C-)
                      </li>
                      <li>Anticiper la Réglementation 2020 (RE 2020)</li>
                      <li>Construire en chanvre</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="subteam-wrapper">
              <div className="subteam">
                <h6>
                  Marlène Delahaye<span>Architecte DE</span>
                </h6>
              </div>
              <div className="subteam">
                <h6>
                  Nihed Kolsi<span>Architecte</span>
                </h6>
              </div>
              <div className="subteam">
                <h6>
                  Esthel Lenain<span>Architecte HMNOP</span>
                </h6>
              </div>
              <div className="subteam">
                <h6>
                  Cyrille Lecomte<span>Secrétaire</span>
                </h6>
              </div>
              <div className="subteam">
                <h6>
                  Philippe Page
                  <span>
                    Conducteur Travaux & Economiste de la Construction
                  </span>
                </h6>
              </div>
              <div className="subteam">
                <h6>
                  Matthieu Sanfourche<span>Dessinateur Projeteur</span>
                </h6>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients-section">
          <div className="clients-wrapper">
            <h2 className="title">Nos clients</h2>
            <div className="clients-list">
              <ul className="client-list">
                <li>ADSEA 17 LP</li>
                <li>Centre Hospitalier de La Rochelle</li>
                <li>Centre Hospitalier de Rochefort</li>
                <li>Communauté d’Agglomération de La Rochelle</li>
                <li>Communauté d’Agglomération Rochefort Océan</li>
                <li>Communauté de Communes de la Charente-Arnoult</li>
                <li>Communauté de Communes de la Seudre et de l’Arnoult</li>
                <li>Communauté de Communes Sud-Charente</li>
                <li>Communauté des Communes Ile Oléron</li>
                <li>Commune de Bourgneuf</li>
                <li>Commune de Breuil-Magné</li>
                <li>Commune de Cabariot</li>
                <li>Commune de Château d’Oléron</li>
                <li>Commune de Ciré d’Aunis</li>
                <li>Commune de Echillais</li>
                <li>Commune de Fouras</li>
              </ul>

              <ul className="client-list">
                <li>Commune de Geay, Landrais</li>
                <li>Commune de La Jarrie, Luchat</li>
                <li>Commune de Le Thou</li>
                <li>Commune de Malakoff</li>
                <li>Commune de Muron</li>
                <li>Commune de Port des Barques</li>
                <li>Commune de Rochefort</li>
                <li>Commune de Royan</li>
                <li>Commune de Saint Pierre d’Oléron</li>
                <li>Commune de Soulignonnes</li>
                <li>Commune de St Christophe</li>
                <li>Commune de St Georges de Didonne</li>
                <li>Commune de St Jean d’Angély</li>
                <li>Commune de Thairé</li>
                <li>Commune de Thézac</li>
              </ul>

              <ul className="client-list">
                <li>Commune de Tonnay-Charente</li>
                <li>Conseil Général de la Charente-Maritime</li>
                <li>Conseil Régional Poitou-Charentes</li>
                <li>Conservatoire du Littoral</li>
                <li>Croix-Rouge Française</li>
                <li>CROUS</li>
                <li>DDTM 17</li>
                <li>EAU 17</li>
                <li>Entraide Coopérative Arc en Ciel</li>
                <li>GAMM Vert</li>
                <li>Groupe CIC OUEST</li>
                <li>Groupe Crédit Mutuel</li>
                <li>IN EXTENSO cabinet comptable</li>
                <li>INNOV’IA</li>
                <li>Institut Médico-professionnel Tonnay-Charente</li>
              </ul>

              <ul className="client-list">
                <li>Ligue de Protection des Oiseaux</li>
                <li>
                  Maison de Retraite La Résidence du Lac St Palais sur Mer
                </li>
                <li>Maison de Retraite Notre Dame St Pierre d’Oléron</li>
                <li>Ministère de la Justice</li>
                <li>Musée des Commerces d’Autrefois</li>
                <li>Office Public de l’Habitat</li>
                <li>ORPEA</li>
                <li>Pons Primeur Rochefort</li>
                <li>SCI STREGIMO cabinet comptable</li>
                <li>SEMDAS</li>
                <li>SEMIS</li>
                <li>Sivos Ciré d’Aunis</li>
                <li>Sivos Landrais Le Thou</li>
                <li>SOROMAP</li>
                <li>STELIA Aerospace</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
