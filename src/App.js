import { publicRoutes, privateRoutes } from "./router";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import './assets/style/common.css';
import './assets/style/global.css'

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.page;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
