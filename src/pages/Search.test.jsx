import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Search from './Search';
import { SearchProvider } from '../context/SearchContext';
import { CartProvider } from '../context/CartContext';

describe('Search page', () => {
  it('shows a helpful message when query is empty', () => {
    render(
      <MemoryRouter>
        <SearchProvider initialQuery="">
          <CartProvider>
            <Search />
          </CartProvider>
        </SearchProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/search for a product/i)).toBeInTheDocument();
  });

  it('shows matching products for a valid query', () => {
    render(
      <MemoryRouter>
        <SearchProvider initialQuery="iphone">
          <CartProvider>
            <Search />
          </CartProvider>
        </SearchProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/iphone 15/i)).toBeInTheDocument();
  });
});
