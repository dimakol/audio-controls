import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./AudioControl.css";

const AudioControl = (props) => {
  const [label, setLabel] = useState(props.label);
  const [value, setValue] = useState(props.value);
  const [isVolumeAndGreaterThan90, setIsVolumeAndGreaterThan90] =
    useState(false);

  const downIcon = <FontAwesomeIcon icon={faCaretDown} />;
  const upIcon = <FontAwesomeIcon icon={faCaretUp} />;

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
      <div className="arrows-container">
        {upIcon}
        {downIcon}
      </div>
      <button className="btn" type="button" onClick={decreaseValue}>
        -
      </button>
      <div
        className="value-label-container"
        style={{ color: `${isVolumeAndGreaterThan90 ? "red" : "black"}` }}
      >
        <div className="value">{value}</div>
        <div className="label">{label.toUpperCase()}</div>
      </div>
      <button className="btn" type="button" onClick={increaseValue}>
        +
      </button>
    </div>
  );
};

export default AudioControl;
