import { Route, Routes, Router } from "react-router";
import AboutPage from "./Pages/AboutPage";
import ArtDisplayPage from "./Pages/ArtDisplayPage";
import Home from "./Pages/Home";
import HeaderBar from "./Pages/Components/HeaderBar";

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artwork" element={<ArtDisplayPage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </>

  );
}

export default App;
