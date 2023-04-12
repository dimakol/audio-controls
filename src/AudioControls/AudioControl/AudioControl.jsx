import React, { useState, useEffect } from "react";
import "./AudioControl.css";

const AudioControl = (props) => {
  const [label, setLabel] = useState(props.label);
  const [value, setValue] = useState(props.value);
  const [isVolumeAndGreaterThan90, setIsVolumeAndGreaterThan90] =
    useState(false);

  useEffect(() => {
    if (label === "volume" && value > 90) {
      setIsVolumeAndGreaterThan90(true);
    }
    if (label === "volume" && value <= 90) {
      setIsVolumeAndGreaterThan90(false);
    }
  }, [value]);

  const increaseValue = () => {
    if (value < 100) setValue(value + 1);
  };

  const decreaseValue = () => {
    if (value > 1) setValue(value - 1);
  };

  return (
    <div className="audio-control">
      <button className="btn" type="button" onClick={decreaseValue}>
        -
      </button>
      <p
        className="box"
        style={{ color: `${isVolumeAndGreaterThan90 ? "red" : "black"}` }}
      >
        {value} {label.toUpperCase()}
      </p>
      <button className="btn" type="button" onClick={increaseValue}>
        +
      </button>
    </div>
  );
};

export default AudioControl;
