import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ColorPicker from "./ColorPicker";

export default function MainApp() {
  const { bgColor } = useContext(ThemeContext); // Get the current background color

  return (
    <div style={{
      backgroundColor: bgColor,
      minHeight: "100vh",
      padding: "20px",
      transition: "background-color 0.3s ease"
    }}>
      <h2>Background Changer</h2>
      <ColorPicker />
    </div>
  );
}
