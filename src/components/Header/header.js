import "./header.css";
import "../global.css"



const Header = () => {
  return (
    <div className="header">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="raj-vidya-kender">Raj Vidya Kender</div>
        <b className="rvk">RVK</b>
      </div>
      <div className="epmenu-parent">
        <img className="epmenu-icon" alt="" src="../epmenu.svg" />
        <div className="home">Home</div>
        <div className="about-us">About us</div>
        <div className="events">
          <span className="events-txt">
            <span>Events</span>
            <span className="span">{` `}</span>
          </span>
        </div>
        <div className="initiatives">Initiatives</div>
        <div className="more">More</div>
      </div>
      <div className="group-parent">
        <div className="rectangle-group">
          <div className="group-child" />
          <div className="login">Login</div>
        </div>
        <div className="material-symbolsarrow-back-io-parent">
          <img
            className="material-symbolsarrow-back-io-icon"
            alt=""
            src="../materialsymbolsarrowbackiosnewrounded.svg"
          />
          <div className="language">Language</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
