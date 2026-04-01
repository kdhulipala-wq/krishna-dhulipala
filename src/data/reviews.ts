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
    rating: 10,
    content: `It speaks for itself, I have no words.`,
  },
  /*{
    id: '2',
    title: 'Dept. of Speculation by Jenny Offill',
    slug: 'dept-of-speculation',
    createdAt: '2025-07-20',
    type: 'book',
    imageUrl: 'images/dept-speculation.svg',
    imageAlt: 'A book lying on a wooden table next to a cup of coffee',
    imageCaption: 'A novel that fits in your pocket but takes up residence in your head.',
    rating: 8,
    content: `Jenny Offill's "Dept. of Speculation" is 177 pages long and contains more insight per sentence than most novels manage in 400. It's a book about a marriage — its beginning, its middle crisis, and its uncertain aftermath — told in fragments that somehow add up to something whole.

The narrator, known only as "the wife," is a writer and professor living in Brooklyn. In the first half, she describes falling in love, having a baby, and navigating the beautiful mundanity of early family life. The prose is funny, sharp, and deceptively casual: "Advice for young writers: marry someone from a different country. The material is unbelievable."

Then the marriage fractures — an affair, discovered — and the second half shifts from first person to third, as if the narrator can no longer bear to inhabit her own story. This formal choice is devastating. The fragmented style, which felt playful in the first half, becomes a survival mechanism in the second.

Offill's sentences work like poetry: compressed, precise, resonant beyond their apparent meaning. She'll drop a line about the Voyager spacecraft's golden record alongside a description of cleaning up a child's vomit, and somehow both details illuminate each other. The book is full of facts — about philosophy, science, space — deployed not as showing-off but as the narrator's way of making sense of a world that has stopped making sense.

What's remarkable is how unsentimental the book is about its own sadness. There's no wallowing, no self-pity. The narrator is too smart and too honest for that. She sees her situation clearly, including her own complicity in it, and reports it with the precision of a scientist describing an experiment that went wrong.

At 177 pages, it's the kind of book you read in an afternoon and then immediately read again. I've bought it for four people. Three of them called me within a week to talk about it.`,
  },
  {
    id: '3',
    title: 'For the First Time by Black Country, New Road',
    slug: 'for-the-first-time-bcnr',
    createdAt: '2026-03-01',
    type: 'album',
    imageUrl: 'images/bcnr.svg',
    imageAlt: 'Abstract album artwork with swirling colors',
    imageCaption: 'Seven musicians making music that sounds like nothing else.',
    rating: 9,
    content: `Black Country, New Road's debut album is the sound of a band trying to contain something too large for the space it's been given. The seven-piece group from Cambridge plays a kind of post-punk that incorporates klezmer, math rock, jazz, and spoken word, and somehow none of those labels feel adequate.

"For the First Time" opens with "Instrumental," which isn't — there's a spoken-word passage about Subway and modern despair that gives way to a saxophone line that sounds like it's fleeing from something. It sets the tone: this is music built on tension, crescendo, and the feeling that everything might fly apart at any moment.

Isaac Wood's vocals are the album's most polarizing element. He doesn't sing so much as narrate — delivering anxious, self-lacerating monologues over the band's intricate arrangements. His lyrics are funny and uncomfortable in equal measure: references to Charli XCX, leaving messages on ex-girlfriends' answer machines, and a recurring anxiety about whether anything he's doing matters.

But the real star is the band as a unit. The interplay between Lewis Evans's saxophone, Georgia Ellery's violin, and Luke Mark's guitar creates a sound that is genuinely new — not fusion exactly, but a natural synthesis that sounds like all these musicians grew up listening to the same eclectic mix and decided to make something out of it.

"Science Fair" is the album's centerpiece: a six-minute build from whispered vocals and delicate strings to a wall of noise that is physically thrilling. The transition happens slowly and then all at once, like a wave breaking. "Sunglasses," the closer, is even more ambitious — nearly ten minutes of escalating intensity that ends with Wood screaming "I am made of Sunglasses" over a full-band crescendo that sounds like a building collapsing in slow motion.

This is not easy-listening music. It demands attention and rewards it generously. In a landscape of algorithmically optimized pop, it's thrilling to hear a band that sounds like they're making music primarily to figure out what music they want to make.`,
  },
  {
    id: '4',
    title: 'Past Lives',
    slug: 'past-lives',
    createdAt: '2025-11-03',
    type: 'film',
    imageUrl: 'images/past-lives.svg',
    imageAlt: 'Two people standing apart on a New York City street at night',
    imageCaption: 'A film about the lives we almost lived.',
    rating: 10,
    content: `Celine Song's "Past Lives" is a quiet film about enormous things: the paths not taken, the selves we leave behind when we emigrate, and the specific ache of wondering what might have been.

Nora (Greta Lee) left Seoul for Canada at age twelve, leaving behind her childhood friend Hae Sung (Teo Yoo). Twenty years later, they reconnect online, begin a tentative long-distance friendship, and eventually meet in person in New York, where Nora now lives with her American husband Arthur (John Magaro).

The plot, stated plainly, is almost nothing. Two people who were close as children meet as adults and walk around New York for a few days. That's it. But Song fills this simple structure with so much feeling, so much unsaid truth, that it becomes almost unbearably moving.

The genius of the film is its refusal to make anyone the villain. Hae Sung isn't the exotic romantic alternative. Arthur isn't the clueless American husband. Nora isn't torn between two men in any conventional sense. All three are fully realized, fully sympathetic people navigating a situation that has no clean resolution.

There's a scene near the end where Nora, Arthur, and Hae Sung sit together at a bar, and the conversation — polite, careful, charged — is one of the most precisely observed pieces of social interaction I've ever seen on film. Every word is doing double duty. Every pause is full.

Greta Lee is extraordinary. She carries the weight of two identities — the Korean girl she was and the American woman she became — and lets you see both simultaneously. The final scene, which I won't describe, is one of the most emotionally devastating endings in recent cinema. The woman next to me in the theater was sobbing. I was not far behind.

"Past Lives" is about the Korean concept of in-yun — the idea that even a casual encounter between strangers is the result of 8,000 layers of providence across past lives. It's a beautiful idea, and Song handles it with the lightness it deserves: not as metaphysics but as a way of honoring the weight of connection.`,
  },*/
];
