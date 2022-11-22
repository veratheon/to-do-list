import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZnALr7bKvVPdujuDlvCfyb6Br7EhVuBg",
  authDomain: "todo-list-e5299.firebaseapp.com",
  projectId: "todo-list-e5299",
  storageBucket: "todo-list-e5299.appspot.com",
  messagingSenderId: "747846429048",
  appId: "1:747846429048:web:ed5880dff52cf8a653408d",
  measurementId: "G-K98Z77SC1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//my app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const storage = getStorage(app);
