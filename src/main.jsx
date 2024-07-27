import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Include any global styles you need

const root = ReactDOM.createRoot(document.getElementById('root'));

// Initially prevent scrolling
document.body.style.overflow = 'hidden';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hide loader after 2 seconds and allow scrolling
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.classList.add('hidden');
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  }, 2000); // 2 seconds delay
});
