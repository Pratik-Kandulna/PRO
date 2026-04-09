import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import UrHome from "./pages/UrHome";
import TopCharts from "./pages/TopCharts";
import Trending from "./pages/TrendNow";
import AllGenres from "./pages/AllGenres";
import NewRelease from "./pages/NewRel";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/UrHome" element={<UrHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/TrendNow" element={<Trending />} />
        <Route path="/TopCharts" element={<TopCharts />} />
        <Route path="/AllGenres" element={<AllGenres />} />
        <Route path="/NewRel" element={<NewRelease />} />


        
      </Routes>
    </>
  );
}

export default App;