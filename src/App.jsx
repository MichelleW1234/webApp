import React from "react";
import Startscreen from "./components/Startscreen.jsx";
import Gamescreen from "./components/Gamescreen.jsx";
import Instructionsscreen from "./components/Instructionsscreen.jsx";
import Summaryscreen from "./components/Gamesummary.jsx";
import NoPage from "./components/NoPage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Startscreen />}/>
        <Route path="/start" element={<Startscreen />}/>
        <Route path="/game" element={<Gamescreen />}/>
        <Route path="/instructions" element={<Instructionsscreen />}/>
        <Route path="/summary" element={<Summaryscreen />}/>

        {/*Page doesn't exist error*/}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
