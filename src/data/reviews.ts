export interface Review {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  type: 'film' | 'book' | 'album' | 'poem';
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  rating?: number;
  content: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    title: 'The Tiger',
    slug: 'the-tiger',
    createdAt: '2026-04-01',
    type: 'poem',
    imageUrl: 'images/tiger.jpg',
    imageAlt: 'By Nael, Age 6',
    imageCaption: '',
    rating: 5,
    content: `I have no words.`,
  },
];
