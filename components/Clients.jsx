import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const Clients = ({ clients }) => {
  return (
    <>
      <div className="clients-wrapper">
        <h2 className="title">{clients.fields.title}</h2>
        <div className="clients-list">
          {documentToReactComponents(clients.fields.texte, options)}
        </div>
      </div>
    </>
  );
};

export default Clients;
