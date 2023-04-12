import React, { useState, useEffect } from "react";
import "./AudioControl.css";

const AudioControl = (props) => {
  const [label, setLabel] = useState(props.label);
  const [value, setValue] = useState(props.value);

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
      {value} {label.toUpperCase()}
      <button className="btn" type="button" onClick={increaseValue}>
        +
      </button>
    </div>
  );
};

export default AudioControl;
