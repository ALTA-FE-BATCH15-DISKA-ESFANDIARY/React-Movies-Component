import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./assets/Page/Home";
import Detail from "./assets/Page/Detail";
import Favorite from "./assets/Page/Favorite";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/"/>
      <Route element={<Detail />} path="/detail/:id"/>
      <Route element={<Favorite />} path="/favorite"/>
    </Routes>
    </BrowserRouter>
  )
}

export default App