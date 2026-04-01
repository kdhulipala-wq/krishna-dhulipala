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
    imageUrl: 'images/abdullah.JPG',
    imageAlt: 'Better a child driver than a child soldier',
    caption: 'Chilling with his brothers sipping chai in a mud house when I first met him, Abdallah ibn Atallah drives me through the mouth of the Wadi Rum in his father\'s ancient Toyota Land Cruiser.',
    createdAt: '2026-01-15',
  },
  {
    id: '2',
    imageUrl: 'images/spear.JPG',
    imageAlt: 'Lollygagging at Refugio',
    caption: 'Chucking a palm branch into the sea while my friends polish a cheeky dart',
    createdAt: '2026-03-12',
  },
  {
    id: '3',
    imageUrl: 'images/isabel-flowers.JPG',
    imageAlt: 'Isabel picks flowers for a bundle - 2026 Carrizo Superbloom',
    caption: 'Properly something out of a soviet propaganda poster about the beauty of farm life',
    createdAt: '2026-03-01',
  },
  {
    id: '4',
    imageUrl: 'images/jack-morg-hammock.JPG',
    imageAlt: 'The Gang hammocks at Devs',
    caption: 'Jack and Morg in club hammocks, mogging the entire world during golden hour',
    createdAt: '2026-02-09',
  },
  {
    id: '5',
    imageUrl: 'images/consultation-lake.jpeg',
    imageAlt: 'Antarctic hellscape at 12,000 feet',
    caption: 'Consultation Lake in the winter -- Inyo National Forest (what forest?)',
    createdAt: '2025-05-20',
  },
  {
    id: '6',
    imageUrl: 'images/giggle-flowers.JPG',
    imageAlt: 'Sarah makes a funny',
    caption: 'Sarah makes a funny while we\'re smelling the flowers.',
    createdAt: '2025-11-16',
  },
];
