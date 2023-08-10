import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from 'react-dom/client';
import { createLogger } from "redux-logger";
import { searchRobots } from "./reducers.js";
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
