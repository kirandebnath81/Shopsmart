import "./App.css";

import { useTheme } from "./context";

import Signup from "./pages/Auth/Signup";
import { Navbar } from "./components";

function App() {
  const [themeMode] = useTheme();

  return (
    <div className="app" data-theme={themeMode}>
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;
