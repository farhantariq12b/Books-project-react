import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path={`/detailPage/:id`}
            element={<DetailPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;