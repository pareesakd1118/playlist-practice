import './App.css';
import NavBar from "./NavBar"
import FirstPage from "./FirstPage"
import FavoritePage from './FavoritePage';
import Song from "./Song"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={ <FirstPage />} />
      <Route path="/favs" element={ <FavoritePage />} />
      <Route path="/song/:id" element={ <Song />} />
      </Routes>
    </div>
  );
}

export default App;
