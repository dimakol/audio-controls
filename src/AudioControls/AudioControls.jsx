import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
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

  const moveItemDown = (index) => {
    let firstItems, lastItems, updatedControlsList;
    const currentItem = controlsList[index];
    const nextItem = controlsList[index + 1];
    // first item selected to move down
    if (index === 0) {
      lastItems = controlsList.slice(index + 2);
      updatedControlsList = [nextItem, currentItem, ...lastItems];
    } else {
      firstItems = controlsList.slice(0, index);
      lastItems = controlsList.slice(index + 2);
      updatedControlsList = [
        ...firstItems,
        nextItem,
        currentItem,
        ...lastItems,
      ];
    }
    setControlsList(updatedControlsList);
  };

  const moveItemUp = (index) => {
    let firstItems, lastItems, updatedControlsList;
    const currentItem = controlsList[index];
    const previousItem = controlsList[index - 1];
    // last item selected to move up
    if (index === controlsList.length - 1) {
      firstItems = controlsList.slice(0, index - 1);
      updatedControlsList = [...firstItems, currentItem, previousItem];
    } else {
      firstItems = controlsList.slice(0, index - 1);
      lastItems = controlsList.slice(index + 1);
      updatedControlsList = [
        ...firstItems,
        currentItem,
        previousItem,
        ...lastItems,
      ];
    }
    setControlsList(updatedControlsList);
  };

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
  const onSubmit = (e) => {
    e.preventDefault();
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

  /**
   *
   * @param {number} itemIndex
   * @returns arrows of the item for moving it up and down
   */
  const renderArrows = (itemIndex) => (
    <>
      {itemIndex !== 0 && (
        <FontAwesomeIcon
          className={"pointer-cursor"}
          icon={faCaretUp}
          onClick={() => moveItemUp(itemIndex)}
        />
      )}
      {itemIndex !== controlsList.length - 1 && (
        <FontAwesomeIcon
          className={"pointer-cursor"}
          icon={faCaretDown}
          onClick={() => moveItemDown(itemIndex)}
        />
      )}
    </>
  );

  return (
    <div className="audio-controls">
      {controlsList.map((item, index) => (
        <div key={item.key} className="control">
          <div className="arrows-container">{renderArrows(index)}</div>
          {item}
        </div>
      ))}

      <form className="new-control-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="control-name-input"
          placeholder="Enter Control Name..."
          value={controlNameInput}
          onChange={handleInputChange}
          required
        />
        <button className="add-button pointer-cursor" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AudioControls;
