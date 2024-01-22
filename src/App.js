import logo from "./logo.svg";
import "./App.css";
import BasicExample from "./components/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Sessions from "./components/Sessions/Sessions.jsx";

function App() {
  return (
    <div className="App">
      <BasicExample />
      {/* <Home /> */}
      <Sessions />
    </div>
  );
}

export default App;
