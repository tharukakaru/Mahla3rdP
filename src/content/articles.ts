import { legacyOrigin } from '../lib/config.ts';
export interface Article { slug: string; number: string; title: string; category: string; excerpt: string; image: string; source: string; paragraphs: string[]; }
// Editorial introductions derived from the supplied brief. Full original articles remain on the live journal.
export const articles: Article[] = [
  { slug: 'a-position-beyond-duality', number: '01', title: 'A position beyond duality.', category: 'Sovereignty', excerpt: 'What becomes possible when you stop choosing between two familiar reactions?', image: 'threshold-desktop', source: `${legacyOrigin}/articles/what-is-the-3rd-point`, paragraphs: [
    'Between one position and its opposite, it is easy to feel that there are only two possible responses. The Third Point begins by questioning that assumption.',
    'Observation creates a little distance. From that distance, a pattern can become visible: the same reaction, a familiar story, a decision made before the question has been fully understood.',
    'The invitation is to see the structure more clearly before choosing your next step. Clarity does not promise certainty. It gives you a different relationship with the choice.',
  ] },
  { slug: 'a-different-relationship-with-timing', number: '02', title: 'A different relationship with timing.', category: 'Timing', excerpt: 'Cycles can offer a rhythm for reflection, without deciding your future for you.', image: 'material-desktop', source: `${legacyOrigin}/articles/quantum-scheduling-lunar-cycles`, paragraphs: [
    'Timing is part of every decision. There are moments to begin, moments to observe and moments to reconsider the direction you have chosen.',
    'Astrological cycles can be used as prompts for reflection. They are not a guarantee that a particular action will produce a particular result.',
    'The useful question is practical: what deserves your attention now, and what would a deliberate next step look like?',
  ] },
  { slug: 'recognising-the-pattern', number: '03', title: 'Recognising the pattern is a beginning.', category: 'Identity', excerpt: 'Where an inherited way of being ends, a more conscious choice can begin.', image: 'threshold-mobile', source: `${legacyOrigin}/articles/what-is-the-matrix`, paragraphs: [
    'A familiar pattern can feel like an identity. It can become difficult to separate what you have learned to do from who you are.',
    'Reflection begins by noticing the structures around that pattern: expectations, routines, boundaries and assumptions. Noticing them does not require an immediate dramatic change.',
    'A small, deliberate choice can be a starting point. The work is to bring insight into practice, with room to question, adjust and return.',
  ] },
];
