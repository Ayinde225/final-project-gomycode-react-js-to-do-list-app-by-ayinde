// Import necessary libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

// Import fonts and global styles
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./styles/GlobalStyles.css";

// Import the Redux store
import { store } from "./app/store";

// Render the React application
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error(
    "Root element not found. Make sure you have an element with the id 'root' in your HTML."
  );
}
