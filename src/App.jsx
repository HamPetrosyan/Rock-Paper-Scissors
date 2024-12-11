import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Play } from "./components/Play";
import { Game } from "./components/Game";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Play />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
