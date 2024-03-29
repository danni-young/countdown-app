import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Home";
import { Login } from "./Login";

export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


