// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter } from "react-router-dom";
// // import Router from './routes'


 
// const root = ReactDOM.createRoot(document.getElementById('root'));
 
 
// root.render(
//   <React.StrictMode>
//        <BrowserRouter>
//           <div className="App">
//               <h1>useRoutes Example</h1>
//               <App/>
//            </div>
//       </BrowserRouter>
//   </React.StrictMode>
// );
 
// reportWebVitals();
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
           <div className="App">
             
           <App />
          </div>
       </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();
