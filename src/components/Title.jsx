const Title = (props) => {
  return (
    <div className="titleContainer">
      <div>
        <h1>{props.name}</h1>
        <p className="description">{props.description}</p>
      </div>
      <img src={props.img} alt="Photo du Restaurant" className="titleImg" />
    </div>
  );
};
export default Title;
