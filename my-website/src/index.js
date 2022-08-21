import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; */
import 'react-bootstrap';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './routes/Resume';
import Welcome from './routes/Welcome';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<ChakraProvider>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}> 
    <Route path="welcome" element={<Welcome />} />
    <Route path="resume" element={<Resume />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Route>
    
  </Routes>
  </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
