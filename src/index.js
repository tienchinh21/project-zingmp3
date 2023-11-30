import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlayListMenu from "~/shared/components/PlayListMenu";

import '@fortawesome/fontawesome-free/css/all.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        {/* <PlayListMenu /> */}
    </React.StrictMode>
);

reportWebVitals();
