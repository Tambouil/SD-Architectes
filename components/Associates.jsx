import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const Associates = ({ associates }) => {
  return (
    <>
      <div className="associate associate-1">
        <div className="associate-header">
          <img
            src={"https:" + associates.fields.photo.fields.file.url}
            alt="ceo image"
          />
          <h5>
            {associates.fields.name}
            <span>{associates.fields.job}</span>
          </h5>
        </div>
        <div className="content">
          <p>{associates.fields.graduate}</p>
        </div>
        <div className="skills">
          {documentToReactComponents(associates.fields.skills, options)}
        </div>
      </div>
    </>
  );
};

export default Associates;
