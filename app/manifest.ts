import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bazardor',
    short_name: 'Bazardor',
    description: 'Bengali market price dashboard for daily shopping decisions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4faf5',
    theme_color: '#16834a',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/logo-icon.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
