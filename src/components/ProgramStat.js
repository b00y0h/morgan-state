// TODO: Fix size styling when there's a range of numbers
const ProgramStat = ({ stat, description }) => (
  <div className="programStat">
    <span>{stat}</span>
    {description}
  </div>
);

export default ProgramStat;
