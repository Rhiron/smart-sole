import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header on each page', () => {
  render(<App />);
  const headerElement = screen.getByText(/Home/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders footer on each page', () => {
  render(<App />);
  const footerElement = screen.getByText(/Website by MRK Designs/i);
  expect(footerElement).toBeInTheDocument();
});


test('renders banner image', () => {
  render(<App />);
  const bannerImage = screen.getByAltText('Banner Image');
  expect(bannerImage).toBeInTheDocument();
});