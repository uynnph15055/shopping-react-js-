import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

function emitComment(id){
 setInterval(() => {
  window.dispatchEvent(
    new CustomEvent('lesson' + id , {
      detail: 'Đang theo dõi comment của bài :',
    }) 
  )
 }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
