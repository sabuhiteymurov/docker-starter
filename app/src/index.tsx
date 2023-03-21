import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/main.scss';
import 'rsuite/dist/rsuite.min.css';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
