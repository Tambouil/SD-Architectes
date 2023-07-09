import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {
  renderText: (text) => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const ContactInfos = ({ contact }) => {
  return (
    <>
      <div className="inner-content">
        <h1 className="title">{contact.fields.title}</h1>
        <div className="text">{documentToReactComponents(contact.fields.adress, options)}</div>
        <p className="email">
          Email:
          <a href="mailto:agence@sdarchitectes.fr" target="_blank" rel="noreferrer">
            {contact.fields.email}
          </a>
        </p>
      </div>
      <div className="inner-info">
        <p className="call">Téléphone</p>
        <p className="call">
          <a href="tel:0546995913">{contact.fields.phone}</a>
        </p>
      </div>
    </>
  );
};

export default ContactInfos;
