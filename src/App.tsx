import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { ROUTER_URL_CONSTANT } from "./Utilities/constants";
import AutoScrollUp from "./Utilities/autoScrollUp";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AutoScrollUp />
        <Routes>
          <Route path={ROUTER_URL_CONSTANT.MAIN} element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
