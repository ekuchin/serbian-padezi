export type Gender = 'masculine' | 'feminine' | 'neuter';
export type Quantity = 'singular' | 'plural';
export type Case =
  | 'nominative'
  | 'genitive'
  | 'dative'
  | 'accusative'
  | 'locative'
  | 'instrumental';

export interface CaseInfo {
  ending: string;
  prepositions: string[];
  example: string;
}

export const cases: Record<Gender, Record<Quantity, Record<Case, CaseInfo>>> = {
  masculine: {
    singular: {
      nominative: {
        ending: '-∅, -ak, -ar',
        prepositions: [],
        example: 'stol (table), mačak (cat), voz (train)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (from)', 'do (until)', 'ispod (under)', 'iznad (above)'],
        example: 'od stola (from the table), do mačka (to the cat)',
      },
      dative: {
        ending: '-u',
        prepositions: ['prema (towards)', 'suprotno (contrary)'],
        example: 'stolu (to the table), mački (to the cat)',
      },
      accusative: {
        ending: '-∅, -a (for animates)',
        prepositions: ['kroz (through)', 'preko (across)', 'uz (along)'],
        example: 'stol (table), mačka (cat - animate)',
      },
      locative: {
        ending: '-u, -i',
        prepositions: ['u (in)', 'na (on)', 'pri (at)', 'kod (near)'],
        example: 'na stolu (on the table), kod mačka (near the cat)',
      },
      instrumental: {
        ending: '-om, -em',
        prepositions: ['s, sa (with)', 'između (between)'],
        example: 'stolom (with the table), mačkom (with the cat)',
      },
    },
    plural: {
      nominative: {
        ending: '-i, -ovi, -a',
        prepositions: [],
        example: 'stolovi (tables), mačci (cats), vozovi (trains)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (from)', 'do (until)', 'ispod (under)', 'iznad (above)'],
        example: 'od stolova (from the tables), mačaka (of cats)',
      },
      dative: {
        ending: '-ima',
        prepositions: ['prema (towards)'],
        example: 'stolovima (to the tables), mačkama (to the cats)',
      },
      accusative: {
        ending: '-e, -a',
        prepositions: ['kroz (through)', 'preko (across)'],
        example: 'stolove (tables), mačke (cats)',
      },
      locative: {
        ending: '-ima, -ama',
        prepositions: ['u (in)', 'na (on)', 'kod (near)'],
        example: 'na stolovima (on the tables), kod mačaka (near the cats)',
      },
      instrumental: {
        ending: '-ima, -ama',
        prepositions: ['s, sa (with)'],
        example: 'stolovima (with the tables), mačkama (with the cats)',
      },
    },
  },
  feminine: {
    singular: {
      nominative: {
        ending: '-a, -∅',
        prepositions: [],
        example: 'ženski (female), knjiga (book), stvar (thing)',
      },
      genitive: {
        ending: '-e, -i',
        prepositions: ['od (from)', 'do (until)'],
        example: 'ženske (of female), knjige (of the book)',
      },
      dative: {
        ending: '-i, -e',
        prepositions: ['prema (towards)'],
        example: 'ženskoj (to female), knjizi (to the book)',
      },
      accusative: {
        ending: '-u, -∅',
        prepositions: ['kroz (through)'],
        example: 'ženu (woman - animate), stvar (thing - inanimate)',
      },
      locative: {
        ending: '-i, -e',
        prepositions: ['u (in)', 'na (on)'],
        example: 'ženskoj (in female), knjizi (in the book)',
      },
      instrumental: {
        ending: '-om, -ju',
        prepositions: ['s, sa (with)'],
        example: 'ženom (with woman), knjigom (with book)',
      },
    },
    plural: {
      nominative: {
        ending: '-e, -i',
        prepositions: [],
        example: 'ženske (females), knjige (books), stvari (things)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (from)', 'do (until)'],
        example: 'ženskih (of females), knjiga (of books)',
      },
      dative: {
        ending: '-ama, -ima',
        prepositions: ['prema (towards)'],
        example: 'ženama (to females), knjigama (to books)',
      },
      accusative: {
        ending: '-e, -a, -i',
        prepositions: ['kroz (through)'],
        example: 'ženske (females), stvari (things)',
      },
      locative: {
        ending: '-ama, -ima',
        prepositions: ['u (in)', 'na (on)'],
        example: 'ženama (in females), knjigama (in books)',
      },
      instrumental: {
        ending: '-ama, -ima',
        prepositions: ['s, sa (with)'],
        example: 'ženama (with females), knjigama (with books)',
      },
    },
  },
  neuter: {
    singular: {
      nominative: {
        ending: '-o, -e',
        prepositions: [],
        example: 'dijete (child), polje (field), oko (eye)',
      },
      genitive: {
        ending: '-a, -eta',
        prepositions: ['od (from)', 'do (until)'],
        example: 'djeteta (of child), polja (of field)',
      },
      dative: {
        ending: '-u, -etu',
        prepositions: ['prema (towards)'],
        example: 'djetetu (to child), polju (to field)',
      },
      accusative: {
        ending: '-o, -e',
        prepositions: ['kroz (through)'],
        example: 'dijete (child), polje (field) - same as nominative',
      },
      locative: {
        ending: '-u, -etu',
        prepositions: ['u (in)', 'na (on)'],
        example: 'djetetu (in child), polju (in field)',
      },
      instrumental: {
        ending: '-om, -etom',
        prepositions: ['s, sa (with)'],
        example: 'djetetom (with child), poljem (with field)',
      },
    },
    plural: {
      nominative: {
        ending: '-a, -ena',
        prepositions: [],
        example: 'djeca (children), polja (fields), oči (eyes)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (from)', 'do (until)'],
        example: 'djece (of children), polja (of fields)',
      },
      dative: {
        ending: '-ima, -ama',
        prepositions: ['prema (towards)'],
        example: 'djeci (to children), poljima (to fields)',
      },
      accusative: {
        ending: '-a, -ena',
        prepositions: ['kroz (through)'],
        example: 'djeca (children), polja (fields)',
      },
      locative: {
        ending: '-ima, -ama',
        prepositions: ['u (in)', 'na (on)'],
        example: 'djeci (in children), poljima (in fields)',
      },
      instrumental: {
        ending: '-ima, -ama',
        prepositions: ['s, sa (with)'],
        example: 'djeci (with children), poljima (with fields)',
      },
    },
  },
};
