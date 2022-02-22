import { createClient } from "contentful";
import Agency from "../components/Agency";
import Associates from "../components/Associates";
import Clients from "../components/Clients";
import Environment from "../components/Environment";
import Team from "../components/Team";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "agency",
  });
  const resp = await client.getEntries({
    content_type: "agencyEnv",
  });
  const response = await client.getEntries({
    content_type: "agencyCeo",
    order: "sys.createdAt",
  });
  const team = await client.getEntries({
    content_type: "agencyTeam",
    order: "sys.createdAt",
  });
  const clients = await client.getEntries({
    content_type: "agencyClients",
  });

  return {
    props: {
      agency: res.items,
      agencyEnv: resp.items,
      associates: response.items,
      team: team.items,
      clients: clients.items,
    },
    revalidate: 60,
  };
}

const About = ({ agency, agencyEnv, associates, team, clients }) => {
  return (
    <div>
      <main>
        {agency.map((agency) => (
          <Agency key={agency.sys.id} agency={agency} />
        ))}
        {agencyEnv.map((agencyEnv) => (
          <Environment key={agencyEnv.sys.id} agencyEnv={agencyEnv} />
        ))}

        <section id="team" className="team-section">
          <div className="team">
            <h2 className="title">L'équipe</h2>
            <div className="team-wrapper">
              <div className="associates-wrapper">
                {associates.map((associates) => (
                  <Associates key={associates.sys.id} associates={associates} />
                ))}
              </div>
            </div>
            <div className="subteam-wrapper">
              {team.map((team) => (
                <Team key={team.sys.id} team={team} />
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="clients-section">
          {clients.map((clients) => (
            <Clients key={clients.sys.id} clients={clients} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default About;
