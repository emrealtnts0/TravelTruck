import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import 'modern-normalize';
import './index.css';
import { persistor, store } from './redux/store';
import { Toaster } from 'react-hot-toast';

const root = createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: '10px',
                background: 'var(--color-card, #23262F)',
                color: 'var(--color-text, #101828)',
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
              },
              success: { style: { background: '#4ADE80', color: '#101828' } },
              error: { style: { background: '#FF5C5C', color: '#fff' } },
            }}
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);