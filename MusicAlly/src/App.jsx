import { Routes, Route } from "react-router-dom";
import UrHome from "./pages/UrHome";
import Login from "./pages/login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UrHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;