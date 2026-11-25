import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import React from 'react';

vi.mock('@/components/sections/Hero', () => ({
  default: () => <div data-testid="hero-preview" />,
}));

vi.mock('@/components/ui/AboutVideo', () => ({
  default: () => <div data-testid="about-video" />,
}));

import Home from '@/app/page';

describe('Homepage', () => {
  it('presents the main sustainability tools as navigable features', () => {
    render(<Home />);

    const features = screen.getByRole('region', { name: /make your next green choice easier/i });
    expect(within(features).getByRole('link', { name: /know your footprint/i })).toHaveAttribute('href', '/carbon');
    expect(within(features).getByRole('link', { name: /sort with confidence/i })).toHaveAttribute('href', '/scan');
    expect(within(features).getByRole('link', { name: /see the bigger picture/i })).toHaveAttribute('href', '/analytics');
  });

  it('shows a clear three-step journey and a carbon assessment call to action', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /measure your impact/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /find your next step/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /build better habits/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start tracking/i })).toHaveAttribute('href', '/carbon');
  });
});
