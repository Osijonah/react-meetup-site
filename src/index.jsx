import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { FavoritesContextProvider } from './components/store/favorites-context';

let container = document.getElementById("app");
let root = createRoot(container)
root.render(
  <StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </StrictMode>
);
