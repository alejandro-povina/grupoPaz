import React from 'react';
import { Carousel } from 'react-bootstrap';
import planta from "../img/planta.png"
import plantacion from "../img/plantacion.jpeg"
import granel from "../img/granel.JPG"

const Slider1 = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 alturaSlider"
      src={planta}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 alturaSlider"
      src={plantacion}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 alturaSlider"
      src={granel}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider1;