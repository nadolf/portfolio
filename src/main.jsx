import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DarkLightMode } from './components/ModeContext';
import Main from './pages/MainPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkLightMode>
      <Main />
    </DarkLightMode>
  </StrictMode>
);
