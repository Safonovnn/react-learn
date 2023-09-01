import "./App.css";
import HEADER from "./component/HEADER";
import NAV from "./component/NAV";
import CONTENT from "./component/main/CONTENT";
import MESSAGE from "./component/message/MESSAGE";
import NEWS from "./component/main/NEWS";
import SETTINGS from "./component/main/SETTINGS";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App-wraper">
        <HEADER />
        <NAV />
        <div className="mainContent">
          <Routes>
            <Route path="/CONTENT" element={<CONTENT />} />
            <Route path="/MESSAGE" element={<MESSAGE />} />
            <Route path="/NEWS" element={<NEWS />} />
            <Route path="/SETTINGS" element={<SETTINGS />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
