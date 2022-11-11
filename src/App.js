import {
    Route, Routes, BrowserRouter,
} from "react-router-dom";
import HomePage from "./components/Home-page/HomePage";
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import store from "./redux/store";
import GamePage from "./components/Game-page/GamePage";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                    <Routes>
                        <Route path="/:title" element={<GamePage />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
