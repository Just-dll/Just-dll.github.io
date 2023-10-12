import { useState } from 'react';
import image1 from "../utils/sliderfiles/slider1.jpg"
import image2 from "../utils/sliderfiles/slider2.jpg"
import image3 from "../utils/sliderfiles/slider3.jpg"
import image4 from "../utils/sliderfiles/slider4.jpg"
import image5 from "../utils/sliderfiles/slider5.jpg"
import styles from '../styles/Carousel.module.scss'

function ImageSlider() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    image5, 
    image2,
    image3,
    image4,
    image1
  ];


  return (
    <div className="">
      <div className={styles.slider}>

            {slides.map((slide, index) => (
              <img 
                key={index}
                src={slide}
                alt="Slide image"
                className={index === currentSlide ? 'slide active' : 'slide'}
                loading="lazy"
                style={{display: index === currentSlide ? 'block' : 'none'}}
              />
            ))}
      </div>
      <ol className={styles['flex-control-nav']}>
      {slides.map((_, index) => (
        <li key={index}>
          <a 
            className={index === currentSlide ? styles.active : ''}
            onClick={() => setCurrentSlide(index)}
          ></a>  
        </li>
      ))}
    </ol>
    </div>
    
  );
}

export default ImageSlider;