const Team = ({ team }) => {
  return (
    <>
      <div className="subteam">
        <h6>
          {team.fields.name}
          <span>{team.fields.job}</span>
        </h6>
      </div>
    </>
  );
};

export default Team;
