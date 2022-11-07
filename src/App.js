import {
    Route, Routes, BrowserRouter,
} from "react-router-dom";
import HomePage from "./components/Home-page/HomePage";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<HomePage />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
