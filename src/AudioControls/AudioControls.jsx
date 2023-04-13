import React, { useState, useEffect } from "react";
import AudioControl from "./AudioControl/AudioControl";
import "./AudioControls.css";

const controls = {
  volume: "volume",
  bass: "bass",
  mid: "mid",
  treble: "treble",
};

const AudioControls = () => {
  const [controlsList, setControlsList] = useState([]);
  const [controlNameInput, setControlNameInput] = useState("");

  useEffect(() => {
    const volume = (
      <AudioControl
        key={`${controls.volume}_1`}
        label={controls.volume}
        value={0}
      />
    );
    const bass = (
      <AudioControl
        key={`${controls.bass}_2`}
        label={controls.bass}
        value={0}
      />
    );
    const mid = (
      <AudioControl key={`${controls.mid}_3`} label={controls.mid} value={0} />
    );
    const treble = (
      <AudioControl
        key={`${controls.treble}_4`}
        label={controls.treble}
        value={0}
      />
    );
    const controlsList = [volume, bass, mid, treble];
    setControlsList(controlsList);
  }, []);

  /**
   * on input change of the control name
   * @param {*} event
   */
  const handleInputChange = (event) => {
    // remove all non-letters
    const result = event.target.value.replace(/[^a-z]/gi, "");
    setControlNameInput(result);
  };

  /**
   * On submit, a new control should be added to the end of the controls list,
   * with the filled name and the value of zero.
   */
  const onSubmit = () => {
    const newControl = (
      <AudioControl
        key={`${controlNameInput}_${controlsList.length + 1}`}
        label={controlNameInput}
        value={0}
      />
    );
    // create a copy of controlsList on a new reference
    let controlsListCopy = [...controlsList];
    // update the content of the newly created array
    controlsListCopy.push(newControl);
    // new reference is given to setControlsList
    setControlsList(controlsListCopy);
    setControlNameInput("");
  };

  return (
    <div className="audio-controls">
      {controlsList}
      <div className="new-control-container">
        <input
          type="text"
          className="control-name-input"
          placeholder="Enter Control Name..."
          value={controlNameInput}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={onSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AudioControls;
