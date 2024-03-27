import './style.scss';
// @ts-ignore
import birdImage from './img/bird.png';
// @ts-ignore
import contactImage from './img/contact.jpg';
// @ts-ignore
import moonlightImage from './img/moonlight.jpg';

export const BootstrapComponent = () => {
    return (
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={birdImage} className="d-block w-100" alt="Bird" />
          </div>
          <div className="carousel-item">
            <img src={contactImage} className="d-block w-100" alt="Contact" />
          </div>
          <div className="carousel-item">
            <img src={moonlightImage} className="d-block w-100" alt="Moonlight" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
    );
  }  
