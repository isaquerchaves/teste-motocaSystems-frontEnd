import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
