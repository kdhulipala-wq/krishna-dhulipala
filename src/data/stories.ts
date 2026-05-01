export interface InlineImage {
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  float?: 'left' | 'right';
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  epigraph?: string;
  inlineImages?: InlineImage[];
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
  {
    id: '2',
    title: 'Travels in Wartime Syria',
    slug: 'travels-in-wartime-syria',
    createdAt: '2026-04-17',
    imageUrl: 'images/horsies-syria.JPG',
    imageAlt: 'Bedouin herders on the road north from Damascus',
    imageCaption: 'My lungs taste the air of time, blown past falling sands.',
    inlineImages: [
      {
        imageUrl: 'images/leb-syr-border.jpg',
        imageAlt: 'The border into Syria',
        caption: 'The Masnaa Border crossing into Syria, under which run secret Hezbollah tunnels used to smuggle insurgents and munitions into the Beqaa. This exact bit of road was carpet-bombed by Israeli aircraft in 2023, and remains a tense area to this day.',
        float: 'right',
      },
      {
        imageUrl: 'images/homs.jpg',
        imageAlt: 'Destruction in Homs',
        caption: 'The ravages of war in central Homs.',
        float: 'right',
      },
    ],
    epigraph: 'Nothing beside remains. Round the decay\nOf that colossal wreck, boundless and bare\nThe lone and level sands stretch far away.',
    content: `A week after my last ever lecture at UCSB, I found myself at a gas station in northern Beirut, checking my watch as I waited for a man
    I had never met to traffic me across the Lebanese border with Syria. I lit a cigarette to pass the time — it was one of the Lebanese Marlboros from
    the pack I had been gifted by an old hammam-keeper in Tripoli. The sun crept over the rooftops further inland, and I closed my eyes for a second as I took in the pale warmth. Having downed a beer or five on my slightly sad and lonely stroll around the outskirts of the city the night before, I felt a little gross, and so I let the last half of my cigarette turn to ash in the morning breeze. A moment later, a gray, dumpy
    Nissan Sunny pulled into the station, scraping its sad little underside on the approach. The bald forty-something with a salt-and-pepper beard in the driver's seat jumped out, cursed as he inspected the barely-intact front bumper, and — peering around and finding me looking on amusedly — introduced himself in typical Lebanese fashion, bellowing "braather how are youu" and hugging me tight.
    
    \n\nI had come to appreciate this immediate familiarity in the Arab world after tolerating Turkish behavior for three long days in west Istanbul (many of whom are particularly cattish
    and uppity). It's one of the many archetypes of a Levantine personality; there are the quiet bedouins who observe you from their roosts
    like hawks watching their prey, and the flashy western-wannabes that flaunt their ersatz designer goods in upscale cafes. More than anything though,
    you find people with no mask at all, whose warmth you feel before you first speak to them, whose characters are built from years
    of struggle, whose generosity is less a transaction and more an instinct.

    [img:0]
    
    \n\nSuch was the case with my border coyote Sami, who told me his entire
    life story in the first hour of our meeting. The rest of the drive was silent save for the Dabke on the radio, as we sped through the Beqaa, past homes
    and military installations bombed by Israeli drone incursions, some only days prior. I approached Masnaa on the eastern edge of the Beqaa valley with some mild anxiety;
    with the nascent regime change in Syria and the inclusion of Al Qaeda and ex-ISIS fighters in the military, it was unclear exactly how friendly border
    guards would be to American citizens. This didn't stop me from taking photos of the border crossing, however — until an exceptionally angry Arab in 
    full camo and a shemagh rapped on my window with the tip of his AK-47. Having thoroughly shat my pants, I rolled down the window with a timid "As salaam alaikum",
    fully expecting this to be the end. I didn't understand the fast Arabic he was rattling off, but managed to catch the words "camera" and "telephone". I'd say
    that I'm generally quite good at maintaining composure under duress, but this was farther along the spectrum of risky situations than I was accustomed to.
    Having apologized profusely, I understood that he was demanding that I delete the photos I had taken, so I showed him my scrubbed camera roll (I recovered
    the photos from my Deleted bin later that night like a cheeky fucker). Having let us off the hook, he bade us forward with a flick of his rifle, and we left the scene
    quite happily.
    
    \n\nThe next hour of the ride was tense — the drive between Masnaa and Jdaidit Yabws is a barren no-mans-land
    through the Ouâdi ej Jobb, a neutral sector used as a buffer zone between the Hezbollah territory in Lebanon and the HTS-governed territory in Syria.
    Driving on, we left the mountains behind us and entered the barren open country. Along the road to Damascus at one of the many checkpoints, we picked up an HTS soldier
    in full gear who was hitchhiking back home. He seemed friendly enough, but I thought better of asking him if I could hold his Kalashnikov at the time.
    
    \n\nAround noon, the little Nissan that could rolled into the roundabout at the southeast corner of Ma'azanet ash Shahm in the Old City of Damascus.
    The place was overflowing with chaos — beggars, schoolchildren, flatbread sellers, fruit vendors, and the absolute disorder of a dozen shitboxes and two dozen two-strokes.
    I said goodbye to Sami and paused for a moment to take in the beautiful cacophony of all the sights and sounds, and let out a cough as I took in the smells.
    From there to my accommodation, it was on foot by my lonesome, followed closely by the discerning eyes of the cityfolk. I stood out — much more so than I did in Lebanon.
    Invariably, this is the fault of the thousands of minute details which on their own may be inconsequential, but belie inherently foreign origin when taken as a whole.
    I could have worn the clothes of the bedu, but the lack of dust in my hair or frayed ends in my pant cuffs would have betrayed me.
    
    \n\nFeeling quite conspicuous in my flannel, blue jeans, and blundstones (not to mention my ridiculous orange backpack), I found my way through the narrow alleyways of the Old City to the Hotel Talisman. The facade
    of the building was nothing more than a pleasantly decorated wooden door a meter tall, sporting a brass knocker in the shape of the Hand of Fatima and carved into the white
    crumbling brick of old Damascene construction. Hardly a third knock of the knocker and the door buzzed open; stepping through the midget-sized door with hunched head,
    I was greeted first in Arabic and then in English, my American-ness having been plainly obvious by my stupid sheepish grin. After a minute the concierge had finished playing inspector with my passport, and I was led out over the veranda and into the courtyard, where I was given
    tea and sweets, and told to wait for my contact. Having downed both tea and biscuit, I fell asleep in the gentle afternoon sun and awoke with a start as the Adhan sounded on the loudspeaker of the Great Mosque.

    \n\nSara appeared on the veranda, wearing a white crocheted hat and looking chipper as a chipmunk. Having exchanged pleasantries, she told me that over the next week we would be discovering "secrets" hidden everywhere. I didn't quite understand what she meant by this, but took it as a quirk of the language barrier. 
    We walked through the alleyways towards the via Recta, where she bought some steaming spiced sahlab for me, unfortunately poured into a thin-walled plastic cup.
    Hiding the concern that I'd be doubling the microplastic content of my balls, I took a few sips before chucking it furtively. It's quite a shame,
    since sahlab is one of those well-kept secrets from Greek and Roman antiquity that you only find now in the near east, being sold by some blind dude win a turban with rotting teeth and more stories than hairs on his head. The drink itself is made from powdered orchid root, steeped in rich milk and boiled through nutmeg, and cardamom or cinnamon, depending on the habit of your vendor. There's no place as dreamlike as Damascus; just next to the sahlab-seller was a guy maybe a year younger than me, fully blacked-out AK-47 at his hip. Sara took my photo with him, which he seemed not to like but was perhaps too polite to refuse.
    
    \n\nThe rest of the city is equally surreal; children chase each other through the souk and under the weathered frieze of the temple of Jupiter, the shops beneath which sell hats and flags featuring ISIS logos. Men with Kalashnikovs and aquiline features ride through the square on their Chinese two-strokes, across from the upscale cafes where the influencer girls take photos of their lattes with the pretty swirly bits in the foam. Out in the clearing between the inner citadel and its crumbling walls, the dervishes whirl for their audience, stirring up dust that comes to life in the rays of light cast through the branches of the mishmish tree by the afternoon sun. The sparrows screech from their trees as the muezzins sing from their minarets, accompanied from time to time by the nasal soprano of the string-cheese-merchant, and constantly by the honking of horns.

    \n\nLunch that day consisted of a chocolate croissant, zaatar flatbread, a coffee, and a traditional-style hookah with a ball of tobacco leaf and a burning ember placed upon it. Sara paid for it all, since I hadn't had the chance to exchange my precious wad of American bills for Syrian pounds. We visited the Sharafis (Syria's equivalent of Hawalas) shortly after emerging from the hookah cafe, and I exited the Sharafi hut feeling conspicuously like a pimp — with five inch-thick stacks of notes with Bashar al Assad's face on them. My jeans now annoyingly tight from the big new weights in its pockets, I walked back to the grand Umayyad Mosque of Damascus, where Sara led me through the side-gate instead of the large iron door. The small passageway opened up to a larger courtyard in which the old columns of the earlier Roman construction still stood; and walking through these and under a beautiful marble cupola, I came upon the tomb of Saladin.
    
    \n\nI have the misfortune of being too lazy to research the places I visit in advance, to the effect that I have at times come to understand the historical significance of a place only years after I have visited it, and well after the memory has begun to fade. 
    `
  },
];
