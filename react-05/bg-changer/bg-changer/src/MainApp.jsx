import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ColorPicker from "./ColorPicker";

export default function MainApp() {
  const { bgColor } = useContext(ThemeContext); // Get the current background color

  return (
    <div style={{
      backgroundColor: bgColor,
      height: "100vh",
      padding: "20px",
      transition: "background-color 0.3s ease",
      margin: "0 auto"
    }}>
      <h2>Background Changer</h2>
      <ColorPicker />
    </div>
  );
}
