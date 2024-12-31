import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./layout/home-layout";
import NavPark from "./pages/navigating-park";
// import Template from "./layout/template";

function App() {
  return (
    <Router>
      {/* <Template> */}
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="navigating-park" element={<NavPark />} />
          </Route>
        </Routes>
      {/* </Template> */}
    </Router>
  );
}

export default App;
