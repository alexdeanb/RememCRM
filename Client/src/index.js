import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styles from "./index.css";
import firebase from "firebase/app";
import { Flowbite } from "flowbite-react";
import React from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <Flowbite>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Flowbite>
);
