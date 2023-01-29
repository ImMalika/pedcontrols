import { Routes, Route } from "react-router-dom";
import { Home } from './pages/main/home/home';

function App() {
  return (

    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
