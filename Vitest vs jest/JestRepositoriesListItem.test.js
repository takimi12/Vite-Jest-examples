import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

jest.mock('../tree/FileIcon', () => {
  // Content of FileIcon.js
  return () => {
    return 'File Icon Component';
  };
});

function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'Javascript',
    description: 'A js library',
    owner: 'facebook',
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test('shows a link to the github homepage for this repository', async () => {
  renderComponent();

  screen.debug();
  // await screen.findByRole('img', { name: 'Javascript' });
});
