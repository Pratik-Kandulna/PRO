import { Routes, Route } from "react-router-dom";
import UrHome from "./pages/UrHome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<UrHome />} />
      </Routes>
    </>
  );
}

export default App;
