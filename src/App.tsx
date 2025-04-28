import { Route, Routes } from "react-router-dom";
import landingPageData from "../content/data.json";
import "./App.css";
import Landing from "./pages/Landing";
import Dealers from "./pages/Dealers";
import { Navbar } from "./components/navbar/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar
        data={landingPageData}
        onSearch={(query) => console.log("Searching for:", query)}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dealers" element={<Dealers />} />
      </Routes>
    </>
  );
}

export default App;
