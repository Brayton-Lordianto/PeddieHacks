
import HomePage from "./screens/pages/HomePage";
import Main from "./screens/pages/Main";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;