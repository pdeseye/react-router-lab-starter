import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Procedures from './components/Procedures';
import Contact from './components/Contact';
import Home from './components/Home';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <Home/>
              </main>
          }
          />
      <Route path="procedures" element={<Procedures />}/>
      <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
document.getElementById('root')
);
