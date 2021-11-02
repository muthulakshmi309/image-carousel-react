import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CarouselImage } from "./carousel-image";

export function Carousel(props) {
  let [images, setImages] = useState([]);
  let [activeIndex, setActiveIndex] = useState(0);

  // On initial render
  useEffect(() => {
    fetch("https://demo5110359.mockable.io/images", {
      crossDomain: true,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((result) => {
        setImages(result.images);
        console.log(result);
      });
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      //2 is for reverse direction
      props.direction === "2" ? prevClick() : nextClick();
    }, props.duration);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, props.duration, props.direction]);

  function prevClick() {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }

  function nextClick() {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }

  return (
    <div className="carousel">
      <div className="prev-button" onClick={prevClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <CarouselImage url={images[activeIndex]} />
      <div className="next-button" onClick={nextClick}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );

  //When I use the API request it gave some random error
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg"
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
  // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
}
