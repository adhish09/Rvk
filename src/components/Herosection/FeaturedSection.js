import "./FeaturedSection.css";

const FeaturedSection = () => {
  return (
    <div className="featured-parent">
      <div className="featured">Featured</div>
      <div className="card-1-parent">
        <div className="card-1">
          <img className="card-1-child" alt="" src="../rectangle-822.svg" />
          <div className="glimpse">Glimpse</div>
          <div className="image-21-wrapper">
            <img className="image-21-icon" alt="" src="../image-21@2x.png" />
          </div>
        </div>
        <div className="card-2">
          <img className="card-1-child" alt="" src="../rectangle-8221.svg" />
          <div className="glimpse">
            <p className="work-with-us">Humanitarian</p>
          </div>
          <div className="image-5-wrapper">
            <img className="image-21-icon" alt="" src="../image-5@2x.png" />
          </div>
        </div>
        <div className="card-3">
          <img className="card-1-child" alt="" src="../rectangle-8222.svg" />
          <div className="glimpse">
            <p className="work-with-us">Interviews</p>
          </div>
          <div className="image-4-parent">
            <img className="image-21-icon" alt="" src="../image-4@2x.png" />
            <img className="image-6-icon" alt="" src="../image-6@2x.png" />
          </div>
        </div>
      </div>
      <div className="card-4-parent">
        <div className="card-1">
          <img className="card-1-child" alt="" src="../rectangle-8223.svg" />
          <div className="events1">
            <p className="work-with-us">Events</p>
          </div>
          <div className="image-2-parent">
            <img className="image-21-icon" alt="" src="../image-2@2x.png" />
            <img className="image-20-icon" alt="" src="../image-20@2x.png" />
          </div>
        </div>
        <div className="card-2">
          <img className="card-1-child" alt="" src="../rectangle-8224.svg" />
          <div className="glimpse">
            <p className="work-with-us">Special Events</p>
          </div>
          <div className="image-4-group">
            <img className="image-21-icon" alt="" src="../image-4@2x.png" />
            <img className="image-7-icon" alt="" src="../image-7@2x.png" />
          </div>
        </div>
        <div className="card-3">
          <img className="card-1-child" alt="" src="../rectangle-8225.svg" />
          <div className="glimpse">
            <p className="work-with-us">Work with us</p>
          </div>
          <div className="image-2-group">
            <img className="image-21-icon" alt="" src="../image-2@2x.png" />
            <img className="image-21-icon" alt="" src="../image-19@2x.png" />
          </div>
        </div>
      </div>
      <div className="image-2" />
      <div className="image-4" />
    </div>
  );
};

export default FeaturedSection;
