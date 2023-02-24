import "./container.css";

const Container = () => {
  return (
    <div className="rectangle-container">
      <div className="frame-item" />
      <b className="our-goal-is-container">
        <p className="our-goal-is">{`Our goal is to help `}</p>
        <p className="poor-people">poor people</p>
      </b>
      <b className="m">15M+</b>
      <b className="become-volunteer">Become Volunteer</b>
      <div className="become-volunteer1">Become Volunteer</div>
      <img className="frame-inner" alt="" src="../arrow-6.svg" />
      <div className="line-div" />
    </div>
  );
};

export default Container;
