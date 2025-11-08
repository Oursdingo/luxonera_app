// Placeholder SVG generator for watch images
export function generateWatchPlaceholder(watchName: string, color: string = '#f5f5f5'): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
    <rect fill="${color}" width="800" height="800"/>
    <circle cx="400" cy="400" r="200" fill="none" stroke="#d4af37" stroke-width="8"/>
    <circle cx="400" cy="400" r="180" fill="white"/>
    <circle cx="400" cy="400" r="160" fill="none" stroke="#333" stroke-width="2"/>
    <text fill="#333" font-family="serif" font-size="20" x="50%" y="55%" text-anchor="middle" dominant-baseline="middle">${watchName}</text>
    <text fill="#999" font-family="sans-serif" font-size="16" x="50%" y="60%" text-anchor="middle" dominant-baseline="middle">Luxonera</text>
    <line x1="400" y1="400" x2="400" y2="280" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    <line x1="400" y1="400" x2="480" y2="400" stroke="#333" stroke-width="3" stroke-linecap="round"/>
  </svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

// Common placeholders
export const PLACEHOLDER_MAIN = generateWatchPlaceholder('Collection')
export const PLACEHOLDER_GALLERY = generateWatchPlaceholder('Détail', '#fafafa')
