import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  console.error('Render error:', error);
  rootElement.innerHTML = `<div style="padding: 20px; color: red;"><h1>Render Error</h1><pre>${error instanceof Error ? error.message : String(error)}</pre></div>`;
}
