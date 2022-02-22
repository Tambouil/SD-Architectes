import { createClient } from "contentful";
import ContactInfos from "../components/ContactInfos";
import Meta from "../components/Meta";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "contact",
  });

  return {
    props: {
      contactInfo: res.items,
    },
    revalidate: 60,
  };
}

const Contact = ({ contactInfo }) => {
  return (
    <>
      <Meta title="SD Architectes | Contact" />
      <div className="sda-container">
        <main className="contact-container">
          <section className="contact-content-wrapper">
            <div className="contact-info-boxed">
              {contactInfo.map((contact) => (
                <ContactInfos key={contact.sys.id} contact={contact} />
              ))}
            </div>
          </section>

          <section className="map-container">
            <div className="google-map-area">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4620.079454378818!2d-0.9638590610625006!3d45.93944780821861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480140f650906015%3A0x50fda4c2a020bd1d!2sSourd-Durand%20Architectes!5e0!3m2!1sfr!2sfr!4v1612994408261!5m2!1sfr!2sfr"
                width="100%"
                height="550"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
