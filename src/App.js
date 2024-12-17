import "./styles.scss";
import DangerLabel from "./DangerLabel";
import DefaultLabel from "./DefaultLabel";
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <DangerLabel visible>DangerLabel</DangerLabel>
      <DefaultLabel visible>DefaultLabel</DefaultLabel>
    </div>
  );
}
