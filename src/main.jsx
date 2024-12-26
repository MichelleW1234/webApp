import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LevelProvider } from './LevelProvider'; 
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LevelProvider> 
      <App />
    </LevelProvider>
  </StrictMode>,
)
