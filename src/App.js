import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Nav";
import Routing from "./components/Router";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routing />
      </Router>
    </div>
  );
}
