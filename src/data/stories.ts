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
    title: 'A Week in Kyoto',
    slug: 'a-week-in-kyoto',
    createdAt: '2025-11-15',
    imageUrl: 'images/kyoto.svg',
    imageAlt: 'A traditional torii gate in Kyoto surrounded by autumn leaves',
    imageCaption: 'Fushimi Inari Taisha at golden hour — the crowds thin out if you go late enough.',
    content: `The train from Osaka rolled into Kyoto Station with the kind of quiet precision you'd expect. No fanfare, no delay — just doors opening onto a city that has spent fourteen centuries perfecting the art of understatement.

I'd planned loosely: a few temples, a bamboo grove, some good food. But Kyoto doesn't really operate on itineraries. It operates on moments — the particular way light falls through maple leaves at Tofuku-ji, the shock of silence inside a moss garden, the elderly woman in full kimono who appeared to glide rather than walk along Philosopher's Path.

The first morning I went to Fushimi Inari early, before the tourist buses arrived. The thousands of vermillion torii gates stretched up the mountainside like a sentence that refuses to end. I climbed for two hours, passing stone foxes and tiny shrines tucked into the forest, until the city below became a gray smear and the only sound was wind through cedar.

Nishiki Market became my daily anchor. I'd wander through picking up grilled mochi, pickled vegetables, and matcha soft-serve, watching vendors who'd clearly been doing this for decades move with practiced economy. One fish seller, noticing me eyeing his display of fugu, simply shook his head and pointed me toward the safer mackerel sushi next door.

The ryokan I stayed in — a traditional inn with tatami floors and futon bedding — served kaiseki dinners that were less meals and more meditations. Each course arrived in sequence: a clear broth with a single yuzu peel floating in it, sashimi arranged like a small garden, grilled ayu fish with its head still on, bowing slightly as if in apology.

By the fourth day I'd stopped trying to see everything and started just sitting — in temple gardens, on canal bridges, at bus stops. Kyoto rewards patience more than ambition. The city reveals itself slowly, like a woodblock print being carved one layer at a time.

I left on a Sunday morning, the shinkansen humming south toward Tokyo. Through the window, the last of the autumn color blurred past. I realized I'd barely taken any photos. Some places are better held in memory than on a screen.`,
  },
  {
    id: '2',
    title: 'Patagonia by Bus',
    slug: 'patagonia-by-bus',
    createdAt: '2025-08-22',
    imageUrl: 'images/patagonia.svg',
    imageAlt: 'Jagged mountain peaks reflected in a glacial lake in Patagonia',
    imageCaption: 'Torres del Paine at dawn — worth every freezing, sleepless minute.',
    content: `Nobody tells you about the wind. Every guide mentions Patagonia's glaciers, its peaks, its impossible blue lakes. But the wind is the real main character. It's a physical presence — a thing that pushes, shoves, and occasionally tries to knock you off a ridge.

I arrived in El Calafate by bus from Buenos Aires, a journey that took roughly twenty-two hours and crossed the kind of flat, featureless steppe that makes you question your life choices. The bus was comfortable enough — Argentina's long-distance coaches are genuinely good — but the landscape through the window was aggressively monotonous: brown grass, gray sky, the occasional guanaco staring at nothing.

Then the mountains appeared. Just like that, the horizon crumpled upward into granite spires and ice fields, and suddenly everything made sense.

Perito Moreno Glacier was the first stop. Standing on the metal walkways across from it, you hear the glacier before you understand what you're hearing — deep groans and cracks that sound like a building being slowly dismantled. Then a house-sized chunk of ice calves off the face and crashes into the milky water below, and the sound catches up a second later, a thunderclap that echoes off the valley walls.

I spent four days in Torres del Paine, sleeping in refugios along the W trek. The trail is well-marked but relentless — up over rocky passes, down through lenga forests, along turquoise rivers that look photoshopped. The famous towers themselves require a pre-dawn start: you stumble up a boulder field in the dark, headlamp bouncing, and arrive at the lookout just as the first light hits the granite.

The sunrise that morning was absurd. The three towers turned from gray to gold to burning orange in about ninety seconds, their reflection shimmering in the lake below. Everyone around me was silent. One woman was quietly crying. I understood why.

The bus back to El Calafate passed through a rainstorm that turned the road to mud. The driver didn't slow down. Patagonia doesn't really accommodate hesitation.`,
  },
  {
    id: '3',
    title: 'Lost in Marrakech',
    slug: 'lost-in-marrakech',
    createdAt: '2026-01-10',
    imageUrl: 'images/marrakech.svg',
    imageAlt: 'Colorful spice market in the Marrakech medina',
    imageCaption: 'The spice souks — a maze of color and persuasive salesmanship.',
    content: `Getting lost in the Marrakech medina isn't a risk. It's the entire point. The old city is a labyrinth of narrow alleys, dead ends, and sudden courtyards, designed over centuries by people who apparently considered straight lines a form of weakness.

I'd been warned about the hustle — the touts, the "guides" who materialize at your elbow, the shopkeepers who greet you like a long-lost cousin. And yes, all of that is real. But underneath the commerce is a city of extraordinary beauty and genuine warmth, and finding that balance is what makes Marrakech so compelling.

My riad — a traditional courtyard house converted to a guesthouse — sat behind an unmarked door on a street barely wide enough for a donkey. Inside was a tiled paradise: a central fountain, orange trees, and a rooftop terrace with Atlas Mountain views. The owner, Hassan, served mint tea with the gravity of a sommelier and the generosity of a grandmother.

Jemaa el-Fnaa, the main square, transforms completely between day and night. Mornings are quiet — just juice vendors and a few snake charmers going through the motions. By sunset, it becomes a carnival: food stalls belching smoke, musicians drumming in circles, storytellers gathering crowds, and an energy that feels genuinely ancient.

I ate my way through the souks: lamb tagine with preserved lemons, pigeon pastilla dusted with cinnamon and sugar, harira soup thick enough to stand a spoon in. The best meal was at a nameless stall near the tanneries — a man cooking merguez sausages over charcoal, served in bread with harissa that nearly removed the lining of my mouth. It cost about two dollars.

The tanneries themselves are medieval in the most literal sense. Workers stand waist-deep in stone vats of dye, scraping and soaking hides using methods unchanged in five hundred years. A guide handed me a sprig of mint to hold under my nose. It didn't help much.

On my last evening, I climbed to the rooftop of a tea house near the Koutoubia Mosque. The call to prayer drifted across the rooftops as the sky turned pink, and for a moment the entire city seemed to pause. Then someone below started an argument about a carpet, and the moment passed. That's Marrakech: the sublime and the transactional, always in the same breath.`,
  },
];
