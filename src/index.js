import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';

const root = document.getElementById('root');
const rootContainer = createRoot(root);
rootContainer.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
