import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SummaryProvider } from './components/context/SummaryContext';
ReactDOM.render(
  <React.StrictMode>
    <SummaryProvider>
    <App />
    </SummaryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

