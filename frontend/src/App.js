import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { WhiteBoardPage } from "./pages/WhiteBoardPage"; 

function Home() {
  return <h1>Home Page</h1>;
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whiteboard" element={<WhiteBoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;