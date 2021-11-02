import { React } from "react";
export function CarouselImage(props) {
  //In future if we want to add more features, then this can be extended
  return <img className="carousel-img" src={props.url} />;
}
