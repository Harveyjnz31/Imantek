import { brand } from '../lib/brand-colors';

const imageBase = `${import.meta.env.BASE_URL}images/`;

export function imagePath(fileName: string) {
  return `${imageBase}${fileName}`;
}

export function imageFallback(label: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${brand.charcoalDeep}"/><stop offset="55%" stop-color="${brand.charcoal}"/><stop offset="100%" stop-color="${brand.copperDark}"/></linearGradient></defs><rect width="1200" height="750" fill="url(#g)"/><circle cx="980" cy="120" r="180" fill="${brand.teal}" opacity="0.12"/><circle cx="180" cy="620" r="220" fill="${brand.copper}" opacity="0.16"/><text x="600" y="390" fill="${brand.cream}" font-family="Arial,sans-serif" font-size="34" text-anchor="middle" letter-spacing="6">${label.toUpperCase()}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
