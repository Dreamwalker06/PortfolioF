import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portfoliof" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
