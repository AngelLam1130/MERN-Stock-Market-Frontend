import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', async () => {
  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });
  const linkElement = screen.getByText((content, element) => {
    return content.match(/learn react/i);
  });
  expect(linkElement).toBeInTheDocument();
});
