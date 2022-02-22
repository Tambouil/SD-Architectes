import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const Agency = ({ agency }) => {
  return (
    <section className="agency">
      <div className="agency-wrapper">
        <h1 className="title">{agency.fields.title}</h1>
        <div className="agency-content">
          <h4 className="subtitle">{agency.fields.subtitle}</h4>
          <div className="agency-description">
            {documentToReactComponents(agency.fields.description, options)}
          </div>
        </div>
        <div className="signature">
          <h4 className="title-signature">{agency.fields.signature}</h4>
        </div>
        <div className="agency-stats">
          <div className="stat-1">
            <p>{agency.fields.stat1}</p>
          </div>
          <div className="stat-2">
            <p>{agency.fields.stat2}</p>
          </div>
          <div className="stat-3">
            <p>{agency.fields.stat3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
