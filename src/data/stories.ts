export interface Story {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  content: string;
}

export const stories: Story[] = [
  {
    id: '1',
    title: 'My Balls Exploded in Jordan',
    slug: 'balls-exploded-in-jordan',
    createdAt: '2026-04-01',
    imageUrl: 'images/camel.JPG',
    imageAlt: 'A camel in the Wadi Rum',
    imageCaption: 'An interesting trip in the most cucked country in the Middle East.',
    content: `TODO, trip in Jordan. My balls exploded because I rode a camel for four days through the Wadi.`,
  },
];
