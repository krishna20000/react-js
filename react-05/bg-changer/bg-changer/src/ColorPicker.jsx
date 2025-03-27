import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ColorPicker() {
  const { setBgColor } = useContext(ThemeContext); // Get setBgColor function

  return (
    <div>
      <h3>Select a Background Color:</h3>
      <input type="color" onChange={(e) => setBgColor(e.target.value)} />
    </div>
  );
}
