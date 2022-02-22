const ContactInfos = ({ contact }) => {
  return (
    <>
      <div className="inner-content">
        <h1 className="title">{contact.fields.title}</h1>
        <span className="text">{contact.fields.adress}</span>
        <span className="email">
          Email:
          <a
            href="mailto:agence@sdarchitectes.fr"
            target="_blank"
            rel="noreferrer"
          >
            {contact.fields.email}
          </a>
        </span>
      </div>
      <div className="inner-info">
        <p className="call">Téléphone</p>
        <span className="call">
          <a href="tel:0546995913">{contact.fields.phone}</a>
        </span>
      </div>
    </>
  );
};

export default ContactInfos;
