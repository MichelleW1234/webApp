import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LevelProvider } from './LevelProvider.jsx'; 
import { InputProvider } from './InputProvider.jsx'; 
import { ReferenceProvider } from './ReferenceProvider.jsx'; 
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LevelProvider>
      <InputProvider>  <ReferenceProvider>
        <App />
      </ReferenceProvider> </InputProvider>
    </LevelProvider>
  </StrictMode>,
)
