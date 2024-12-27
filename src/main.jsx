import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LevelProvider } from './LevelProvider.jsx'; 
import { InputProvider } from './InputProvider.jsx'; 
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LevelProvider>
      <InputProvider>  
        <App />
      </InputProvider>
    </LevelProvider>
  </StrictMode>,
)
