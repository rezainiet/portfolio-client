import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function renderPage(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);
}

test('shows the two selected projects instead of old coursework', () => {
  renderPage();
  expect(screen.getByRole('heading', { level: 1, name: /from storefront to fulfillment/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'ConfirmX' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Rio District' })).toBeInTheDocument();
  expect(screen.queryByText(/parts producer/i)).not.toBeInTheDocument();
});

test('shows the verified Rio District localized product links and existing contact', () => {
  renderPage();
  expect(screen.getByRole('link', { name: /spanish product page/i })).toHaveAttribute('href', 'https://rio-district.store/producto/veste-bresil-vert');
  expect(screen.getByRole('link', { name: /french product page/i })).toHaveAttribute('href', 'https://rio-district.store/produit/veste-bresil-vert');
  expect(screen.getByRole('link', { name: /email masud/i })).toHaveAttribute('href', 'mailto:masudreza.dev@gmail.com');
});

test('keeps old project URLs useful', async () => {
  Element.prototype.scrollIntoView = jest.fn();
  renderPage('/project/old-project');
  expect(await screen.findByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});
