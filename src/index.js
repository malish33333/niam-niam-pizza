import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';

ReactDOM.render(
  <>
    <div className="wrapper">
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </div>
  </>
  ,
  document.getElementById('root')
);

reportWebVitals();
