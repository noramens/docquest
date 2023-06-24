import React from 'react';
import styled, { keyframes } from 'styled-components';

type ButtonProps = {
  primary?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ primary }) =>
    primary
      ? `
      color: #212b36;
      background-color: #ffffff;
    `
      : `
      color: #ffffff;
      background-color: #3056d3;
    `}

  svg {
    margin-left: 8px;
  }

  &:hover {
    animation: ${hoverAnimation} 0.3s linear forwards;
  }
`;

const Button: React.FC<ButtonProps> = ({ primary, icon, children }) => {
  return (
    <StyledButton primary={primary}>
      {children}
      {icon && icon}
    </StyledButton>
  );
};

export default Button;
