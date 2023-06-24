import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Nav';

describe('Navbar', () => {
  it('renders Navbar component', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if Navbar logo is rendered
    const logoElement = screen.getByText('DOCQUEST');
    expect(logoElement).toBeInTheDocument();
  });

  it('displays Sign in and Sign up links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if Sign in and Sign up links are present
    const signInLink = screen.getByText('Sign in');
    const signUpLink = screen.getByText('Sign up');
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });
});
