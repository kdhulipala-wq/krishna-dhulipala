export interface Photo {
  id: string;
  imageUrl: string;
  imageAlt: string;
  caption: string;
  createdAt: string;
}

export const photos: Photo[] = [
  {
    id: '1',
    imageUrl: 'images/gallery-1.svg',
    imageAlt: 'Sunset over a calm ocean with silhouetted rocks',
    caption: 'Algarve coast, Portugal — the Atlantic doing its thing.',
    createdAt: '2025-09-15',
  },
  {
    id: '2',
    imageUrl: 'images/gallery-2.svg',
    imageAlt: 'A narrow cobblestone alley with colorful doors',
    caption: 'Somewhere in the Marrakech medina. I found my way back eventually.',
    createdAt: '2026-01-12',
  },
  {
    id: '3',
    imageUrl: 'images/gallery-3.svg',
    imageAlt: 'Snow-capped mountains reflected in a still lake',
    caption: 'Torres del Paine — the water was so still it felt like cheating.',
    createdAt: '2025-08-25',
  },
  {
    id: '4',
    imageUrl: 'images/gallery-4.svg',
    imageAlt: 'A steaming bowl of ramen on a wooden counter',
    caption: 'The best ramen in Kyoto, or at least the best I found.',
    createdAt: '2025-11-18',
  },
  {
    id: '5',
    imageUrl: 'images/gallery-5.svg',
    imageAlt: 'A winding mountain road disappearing into fog',
    caption: 'Ruta 40, Patagonia. The road goes on like this for hours.',
    createdAt: '2025-08-20',
  },
  {
    id: '6',
    imageUrl: 'images/gallery-6.svg',
    imageAlt: 'Rows of traditional Japanese lanterns glowing at dusk',
    caption: 'Lantern festival near Yasaka Shrine, Kyoto.',
    createdAt: '2025-11-16',
  },
];
