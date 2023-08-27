import "./App.css";
import HEADER from "./component/HEADER";
import NAV from "./component/NAV";
import CONTENT from "./component/CONTENT";

function App() {
  return (
    <div className="App-wraper">
      <HEADER />
      <NAV />
      <CONTENT />
    </div>
  );
}

export default App;
