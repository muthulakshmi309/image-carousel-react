import { useState } from "react";
import { Carousel } from "./carousel";
import "./styles.css";

export default function App() {
  let [duration, setDuration] = useState(2);
  let [direction, setDirection] = useState("1");
  let [caroDuration, setCaroDuration] = useState(2);
  let [caroDirection, setCaroDirection] = useState("1");

  function onFormSubmit(event) {
    setCaroDuration(duration);
    setCaroDirection(direction);
  }

  function onDirectionChange(event) {
    setDirection(event.target.value);
  }

  function onDurationChange(event) {
    setDuration(event.target.value);
  }

  return (
    <div className="App">
      <form>
        <div className="duration-continer">
          <label htmlFor="duration"> Duration : </label>
          <input
            id="duration"
            type="number"
            min="0"
            defaultValue={duration}
            onChange={onDurationChange}
          />
        </div>
        <br />
        <div className="direction-continer">
          <label htmlFor="direction"> Direction : </label>
          <input
            type="radio"
            id="forward"
            name="direction"
            value="1"
            defaultChecked
            onChange={onDirectionChange}
          />
          <label htmlFor="forward">Forward</label>
          <input
            type="radio"
            id="reverse"
            name="direction"
            value="2"
            onChange={onDirectionChange}
          />
          <label htmlFor="backward">Reverse</label>
        </div>
        <br />
        <input type="button" value="Submit" onClick={onFormSubmit} />
      </form>
      <br />
      <Carousel duration={caroDuration * 1000} direction={caroDirection} />
    </div>
  );
}
