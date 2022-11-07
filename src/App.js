import {
    Route, Routes, BrowserRouter,
} from "react-router-dom";
import HomePage from "./components/Home-page/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<HomePage />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
