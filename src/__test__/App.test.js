import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Tests to check if the header renders on each page
test('renders header on each page', () => {
  render(<App />);
  const headerElement = screen.getByText(/Home/i);
  expect(headerElement).toBeInTheDocument();
});

// Tests to check if the footer renders on each page
test('renders footer on each page', () => {
  render(<App />);
  const footerElement = screen.getByText(/Website by MRK Designs/i);
  expect(footerElement).toBeInTheDocument();
});

// Ensures that Banner img renderss on the home page
test('renders banner image', () => {
  render(<App />);
  const bannerImage = screen.getByAltText('Banner Image');
  expect(bannerImage).toBeInTheDocument();
});