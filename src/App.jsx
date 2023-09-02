import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// PAGES
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import ComicsCharacter from "./pages/ComicsCharacter";

//COMPONENTS
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route
            path="/character/:characterId"
            element={<ComicsCharacter />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
