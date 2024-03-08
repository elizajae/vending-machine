import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Food from "./Food";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
