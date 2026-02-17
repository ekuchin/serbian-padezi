export type Case =
  | 'nominative'
  | 'genitive'
  | 'dative'
  | 'accusative'
  | 'locative'
  | 'instrumental';

export interface AdjectiveInfo {
  ending: string;
  example: string; // Serbian with Russian translation in parentheses
}

// Typical adjective endings (illustrative). Examples use common adjectives
// and include a Russian translation in parentheses.
export const adjectiveEndings: Record<Case, Record<'masculine' | 'feminine' | 'neuter' | 'plural', AdjectiveInfo>> = {
  nominative: {
    masculine: { ending: '-∅ / -i', example: 'veliki stol (большой стол)' },
    feminine: { ending: '-a / -e', example: 'velika knjiga (большая книга)' },
    neuter: { ending: '-o / -a', example: 'veliko dete (большое ребёнок)' },
    plural: { ending: '-i / -e / -a', example: 'veliki stolovi (большие столы)' },
  },
  genitive: {
    masculine: { ending: '-og / -a (pl)', example: 'velikog stola (большого стола)' },
    feminine: { ending: '-e / -i', example: 'velike knjige (большой книги)' },
    neuter: { ending: '-og / -eta', example: 'velikog deteta (большого ребёнка)' },
    plural: { ending: '-ih / -a', example: 'velikih stolova (больших столов)' },
  },
  dative: {
    masculine: { ending: '-om / -ima (pl)', example: 'velikom stolu (большому столу)' },
    feminine: { ending: '-oj / -ama', example: 'velikoj knjizi (большой книге)' },
    neuter: { ending: '-om / -etu', example: 'velikom detetu (большому ребёнку)' },
    plural: { ending: '-im / -ama', example: 'velikim stolovima (большим столам)' },
  },
  accusative: {
    masculine: { ending: '-og / -e (pl)', example: 'velikog stola (большого стола) — animates', },
    feminine: { ending: '-u / -e', example: 'veliku knjigu (большую книгу)' },
    neuter: { ending: '-o / -a', example: 'veliko dete (большое ребёнок)' },
    plural: { ending: '-e / -a', example: 'velike stolove (большие столы)' },
  },
  locative: {
    masculine: { ending: '-om / -ima', example: 'velikom stolu (о большом столе)' },
    feminine: { ending: '-oj / -ama', example: 'velikoj knjizi (о большой книге)' },
    neuter: { ending: '-om / -etu', example: 'velikom detetu (о большом ребёнке)' },
    plural: { ending: '-im / -ama', example: 'velikim stolovima (о больших столах)' },
  },
  instrumental: {
    masculine: { ending: '-im / -oma', example: 'velikim stolom (большим столом)' },
    feminine: { ending: '-om / -om', example: 'velikom knjigom (большой книгой)' },
    neuter: { ending: '-im / -etom', example: 'velikim detetom (большим ребёнком)' },
    plural: { ending: '-im / -ama', example: 'velikim stolovima (большими столами)' },
  },
};

// Exceptions and notes for adjectives and agreement. Include typical irregulars.
export const adjectiveExceptions: { word: string; note: string }[] = [
  {
    word: 'dete / dijete',
    note: 'Child is irregular in plural and some forms (дете/dijete). Use local dialectal forms; check examples separately.',
  },
  {
    word: 'malo (small) + noun',
    note: 'When using short-form adjectives (malo, mnogo) forms may vary: e.g., malo dete — irregular stress/variants.',
  },
];

export const sampleAdjectiveExamples: string[] = [
  'veliki stol (большой стол)',
  'crni mačak (чёрный кот)',
  'stara knjiga (старая книга)',
  'malo dete (маленький ребёнок)',
  'brzi voz (быстрый поезд)',
];

export default { adjectiveEndings, adjectiveExceptions, sampleAdjectiveExamples };
