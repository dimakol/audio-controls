# Task description

## Audio Controls App

## Requirements

1. Create a component called AudioControls with 4 pieces of state: “volume”, “bass”, “mid",
   and ”treble”, each storing a value between 1 and 100
2. “volume” should become red when its value is greater than 90
3. Display each value along with a label and a pair of +/- buttons for increasing and
   decreasing the value, and up/down buttons for moving the item up and down (the first
   item cannot move up and the last one cannot move down)
4. Create an input field for adding a new control. On submit, a new control should be added
   to the end of the controls list, with the filled name and the value of zero. The input field
   should accept only english letters

The app should look like this:

![image](screenshots/UI-mockup.jpg?raw=true "UI mockup")

## Tech/framework used

- [ReactJS](https://reactjs.org/)

## Installation

**Running in development environment**

git, npm and node softwares should be installed before moving on

- git clone https://github.com/dimakol/react-audio-controls-app.git
- cd react-audio-controls-app/
- npm install
- npm run dev

**Building**

- npm run build

## Deployed to Github pages

https://dimakol.github.io/react-audio-controls-app/

## License

MIT © Dima Kolyas
