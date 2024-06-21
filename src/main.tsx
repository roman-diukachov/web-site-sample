import { App } from '@/App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
