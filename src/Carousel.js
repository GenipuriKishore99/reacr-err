export const Carousel = () => {
  return (
    <div className="container-fluid">
      <div className="carousel slide" data-bs-theme="dark" data-bs-ride="carousel" id="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="	https://cdn.smartslider3.com/wp-content/uploads/2018/11/WordPresscarousel-840x441.png" className="w-100 d-block"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="	https://cdn.smartslider3.com/wp-content/uploads/2018/11/WordPresscarousel-840x441.png" alt="car" className="w-100 d-block" />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="	https://cdn.smartslider3.com/wp-content/uploads/2018/11/WordPresscarousel-840x441.png" className="w-100 d-block" />
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carousel">
        <span className="carousel-control-prev-icon"></span></button>
        <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carousel">
        <span className="carousel-control-next-icon"></span>
      </button>
      <div className="carousel-indicators">
        <button className="active" data-bs-slide-to="0" data-bs-target="#carousel"></button>
        <button data-bs-slide-to="1" data-bs-target="#carousel"></button>
        <button data-bs-slide-to="2" data-bs-target="#carousel"></button>

      </div>
    </div>
  );
};
