import { render, screen } from '@testing-library/react';
import Root from '../components/Root';

describe('Root component', () => {
  it('renders the Root component correctly', () => {
    render(<Root />);

    // Assert RootTitle component
    const rootTitleElement = screen.getByText(/DocQuest:/i);
    expect(rootTitleElement).toBeInTheDocument();

    // Assert RootContext component
    const rootContextElement = screen.getByText(
      /DocQuest is an AI-powered app/i
    );
    expect(rootContextElement).toBeInTheDocument();

    // Assert Button component
    const buttonElement = screen.getByRole('button', {
      name: /Give it a try/i
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
