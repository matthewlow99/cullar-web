import { Route, Routes, Router } from "react-router";
import AboutPage from "./Pages/AboutPage";
import ArtDisplayPage from "./Pages/ArtDisplayPage";
import Home from "./Pages/Home";
import HeaderBar from "./Pages/Components/HeaderBar";
import ArtDetailView from "./Pages/ArtDetailView";
import { useState } from "react";

function App() {

  const [pieceData, setPieceData] = useState({})

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
      <HeaderBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/artwork" element={<ArtDisplayPage setPieceData={setPieceData}/>}/>
          <Route path="/artDetail" element={<ArtDetailView pieceData={pieceData}/>} />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
