import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import reportWebVitals from './reportWebVitals';

import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the Provider component with the store and the App component (Router). */
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();