import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import ImageText from './ImageText';
import IMAGE_SOURCES from './imageSrc';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />

      {IMAGE_SOURCES.map(({url}, index) => (
        <Route path={url} element={<ImageText index={index} />} />
      ))}
    </Routes>
  </Router>
);
