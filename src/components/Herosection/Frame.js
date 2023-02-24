import "./Frame.css";

const Frame = () => {
  return (
    <div className="image-16-parent">
      <img className="image-16-icon" alt="" src="../image-16@2x.png" />
      <img className="rectangle-icon" alt="" src="../rectangle-815@2x.png" />
      <div className="prem-rawat">Prem Rawat</div>
      <div className="ambassador-of-peace">Ambassador of Peace</div>
      <div className="a-non-profit-charitable">
        A non-profit charitable organization Its objective is presenting the
        Message of Peace of Prem Rawat and undertaking humanitarian activities
        to bring harmony in life. It organizes live events with Prem Rawat and
        video events related to his message.
      </div>
      <div className="group-div">
        <div className="group-item" />
        <div className="know-more">Know more</div>
        <img className="group-inner" alt="" src="../arrow-1.svg" />
      </div>
    </div>
  );
};

export default Frame;
