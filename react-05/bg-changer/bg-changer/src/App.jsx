import { ThemeProvider } from "./ThemeContext";
import MainApp from "./MainApp";

export default function App() {
  return (
    <ThemeProvider> 
      <MainApp /> 
    </ThemeProvider>
     
  );
}


