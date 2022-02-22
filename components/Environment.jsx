import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const Environment = ({ agencyEnv }) => {
  return (
    <section className="environment">
      <div className="environment-wrapper">
        <h2 className="title">{agencyEnv.fields.title}</h2>
        <div>{documentToReactComponents(agencyEnv.fields.texte, options)}</div>
      </div>
    </section>
  );
};

export default Environment;
