import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import About from './pages/About/About';

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
        </Routes>
      </Router>
  );
}

export default App;
