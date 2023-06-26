import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import LoginForm from './common/LoginForm';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FormContainer = styled.main`
  max-width: 30vw;
  margin: 10vh auto;
  padding: 2rem;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.7s ease-in;

  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
`;

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignIn = location.pathname === '/signin';

  const handleSubmit = () => {
    if (isSignIn) {
      // Handle sign-in logic
    } else {
      // Handle sign-up logic
    }

    navigate('/');
  };

  return (
    <FormContainer>
      <FormTitle>{isSignIn ? 'Sign In' : 'Sign Up'}</FormTitle>

      <LoginForm handleSubmit={handleSubmit} />

      <p>
        {isSignIn ? "Don't have an account? " : 'Already have an account? '}
        <Link to={isSignIn ? '/signup' : '/signin'}>
          {isSignIn ? 'Sign up' : 'Sign in'}
        </Link>
      </p>
    </FormContainer>
  );
};

export default Auth;
