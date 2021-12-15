import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import Features from "./pages/Features/Features"
import RoadmapPage from "./pages/RoadmapPage/RoadmapPage"
import FaqPage from "./pages/FaqPage/FaqPage"

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/features" element={<Features />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/roadmap" element={<RoadmapPage />}/>
            <Route exact path="/faq" element={<FaqPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
