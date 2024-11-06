import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/style.css'
import ReserveTableButton from './ReserveTableButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function CarouselImages() {
  return (
    <>     
      <div className='main'>      
      <div className='about-company-section'>    
       <h1>Little Lemon Chicago</h1>
        <p>"Lorem ipsum dolor sit am ad minim veniam, laboris laboris laboris laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "</p>
        <p>Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ReserveTableButton/>
      </div>
      <div>
      <Carousel className="carousel-section">
      <Carousel.Item>
        <img className="d-block w-100" src={require('./ExampleCarouselImage/A.jpg')} alt="First slide" />
        <Carousel.Caption>
          <h5>Adrian and Marco</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={require('./ExampleCarouselImage/B.jpg')} alt="Second slide" />
        <Carousel.Caption>
          <h5>Adrian and Marco</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={require('./ExampleCarouselImage/C.jpg')} alt="Third slide" />
        <Carousel.Caption>
          <h5>Our restaurant</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
      </div>    
      </div>

    </>
    
  );
}

export default CarouselImages;