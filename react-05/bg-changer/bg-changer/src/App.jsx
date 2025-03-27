import { ThemeProvider } from "./ThemeContext";
import MainApp from "./MainApp";

export default function App() {
  return (
    <ThemeProvider>
      <BackgroundWrapper />
    </ThemeProvider>
  );
}

function BackgroundWrapper() {
  return (
    <MainApp />
  );
}
