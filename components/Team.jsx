const Team = ({ team }) => {
  return (
    <>
      <div className="subteam">
        <img
          src={"https:" + team.fields.photo.fields.file.url}
          alt="team image"
        />
        <h6>
          {team.fields.name}
          <span>{team.fields.job}</span>
        </h6>
      </div>
    </>
  );
};

export default Team;
