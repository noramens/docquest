import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx';
import ThemeProviderWrapper from './styles/ThemeProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router basename="/docquest">
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </Router>
);
