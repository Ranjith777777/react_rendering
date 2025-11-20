import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./pages/Homepage";
import Number from "./pages/Number";
import String from "./pages/String";
import Ternaryoperator from "./pages/Ternaryoperator";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/number" element={<Number />} />
        <Route path="/string" element={<String />} />
        <Route path="/ternary" element={<Ternaryoperator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
