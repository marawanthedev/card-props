// src/App.js

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WithoutProps from "./pages/WithoutProps";
import WithProps from "./pages/WithProps";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Without Props</Link>
        <Link to="/with-props">With Props</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WithoutProps />} />
        <Route path="/with-props" element={<WithProps />} />
      </Routes>
    </Router>
  );
}

export default App;
