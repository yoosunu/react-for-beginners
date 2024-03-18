import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>"
      </Routes>
    </Router>
  );
}
export default App;
