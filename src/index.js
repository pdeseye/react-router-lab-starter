import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
