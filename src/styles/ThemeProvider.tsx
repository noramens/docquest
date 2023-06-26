import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './variables.css';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeProviderWrapper;
