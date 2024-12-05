import "./styles.css";
import DangerLabel from "./DangerLabel";
import DefaultLabel from "./DefaultLabel";

export default function App() {
  return (
    <div className="App">
      <DangerLabel visible>DangerLabel</DangerLabel>
      <DefaultLabel visible>DefaultLabel</DefaultLabel>
    </div>
  );
}
