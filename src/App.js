import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { DriftPage } from "./components/DriftPage/DriftPage";
import { ForzaPage } from "./components/ForzaPage/ForzaPage";
import { HomePage } from "./components/HomePage/HomePage";
import { TimeAttackPage } from "./components/TimeAttackPage/TimeAttackPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
