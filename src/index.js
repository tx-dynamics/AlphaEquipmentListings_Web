import React from "react";
import ReactDOM from 'react-dom';

import App from './App'
import './index.css'
import './assets/fonts/Lato-Light.ttf';
import './assets/fonts/Lato-Regular.ttf';
import './assets/fonts/Lato-Semibold.ttf';
import './assets/fonts/Lato-Bold.ttf';

import { Provider } from "react-redux";
import configureAppStore from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const store = configureAppStore();
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);