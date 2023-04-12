import React, { useState, useEffect } from "react";
import AudioControl from "./AudioControl/AudioControl";

const controls = {
  volume: "volume",
  bass: "bass",
  mid: "mid",
  treble: "treble",
};

const AudioControls = () => {
  const [controlsList, setControlsList] = useState([]);

  useEffect(() => {
    const volume = (
      <AudioControl key={controls.volume} label={controls.volume} value={0} />
    );
    const bass = (
      <AudioControl key={controls.bass} label={controls.bass} value={0} />
    );
    const mid = (
      <AudioControl key={controls.mid} label={controls.mid} value={0} />
    );
    const treble = (
      <AudioControl key={controls.treble} label={controls.treble} value={0} />
    );
    const controlsList = [volume, bass, mid, treble];
    setControlsList(controlsList);
  }, []);

  return <div>{controlsList}</div>;
};

export default AudioControls;
