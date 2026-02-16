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
        example: 'стол, кот, поезд',
      },
      genitive: {
        ending: '-a',
        prepositions: ['от', 'до', 'под', 'над'],
        example: 'от стола, до кота',
      },
      dative: {
        ending: '-u',
        prepositions: ['к', 'против'],
        example: 'столу, коту',
      },
      accusative: {
        ending: '-∅, -a (for animates)',
        prepositions: ['через', 'по', 'вдоль'],
        example: 'стол, кота',
      },
      locative: {
        ending: '-u, -i',
        prepositions: ['в', 'на', 'при', 'у'],
        example: 'на столе, у кота',
      },
      instrumental: {
        ending: '-om, -em',
        prepositions: ['с', 'между'],
        example: 'столом, котом',
      },
    },
    plural: {
      nominative: {
        ending: '-i, -ovi, -a',
        prepositions: [],
        example: 'столы, коты, поезда',
      },
      genitive: {
        ending: '-a',
        prepositions: ['от', 'до', 'под', 'над'],
        example: 'от столов, котов',
      },
      dative: {
        ending: '-ima',
        prepositions: ['к'],
        example: 'столам, котам',
      },
      accusative: {
        ending: '-e, -a',
        prepositions: ['через', 'по'],
        example: 'столы, котов',
      },
      locative: {
        ending: '-ima, -ama',
        prepositions: ['в', 'на', 'у'],
        example: 'на столах, у котов',
      },
      instrumental: {
        ending: '-ima, -ama',
        prepositions: ['с'],
        example: 'столами, котами',
      },
    },
  },
  feminine: {
    singular: {
      nominative: {
        ending: '-a, -∅',
        prepositions: [],
        example: 'женщина, книга, вещь',
      },
      genitive: {
        ending: '-e, -i',
        prepositions: ['от', 'до'],
        example: 'женщины, книги',
      },
      dative: {
        ending: '-i, -e',
        prepositions: ['к'],
        example: 'женщине, книге',
      },
      accusative: {
        ending: '-u, -∅',
        prepositions: ['через'],
        example: 'жену, вещь',
      },
      locative: {
        ending: '-i, -e',
        prepositions: ['в', 'на'],
        example: 'о женщине, в книге',
      },
      instrumental: {
        ending: '-om, -ju',
        prepositions: ['с'],
        example: 'женщиной, книгой',
      },
    },
    plural: {
      nominative: {
        ending: '-e, -i',
        prepositions: [],
        example: 'женщины, книги, вещи',
      },
      genitive: {
        ending: '-a',
        prepositions: ['от', 'до'],
        example: 'женщин, книг',
      },
      dative: {
        ending: '-ama, -ima',
        prepositions: ['к'],
        example: 'женщинам, книгам',
      },
      accusative: {
        ending: '-e, -a, -i',
        prepositions: ['через'],
        example: 'женщин, вещи',
      },
      locative: {
        ending: '-ama, -ima',
        prepositions: ['в', 'на'],
        example: 'о женщинах, в книгах',
      },
      instrumental: {
        ending: '-ama, -ima',
        prepositions: ['с'],
        example: 'женщинами, книгами',
      },
    },
  },
  neuter: {
    singular: {
      nominative: {
        ending: '-o, -e',
        prepositions: [],
        example: 'поле, окно, место',
      },
      genitive: {
        ending: '-a, -eta',
        prepositions: ['от', 'до'],
        example: 'поля, окна',
      },
      dative: {
        ending: '-u, -etu',
        prepositions: ['к'],
        example: 'полю, окну',
      },
      accusative: {
        ending: '-o, -e',
        prepositions: ['через'],
        example: 'поле, окно — то же, что и именительный',
      },
      locative: {
        ending: '-u, -etu',
        prepositions: ['в', 'на'],
        example: 'в поле, в окне',
      },
      instrumental: {
        ending: '-om, -etom',
        prepositions: ['с'],
        example: 'полем, окном',
      },
    },
    plural: {
      nominative: {
        ending: '-a, -ena',
        prepositions: [],
        example: 'дети, поля, глаза',
      },
      genitive: {
        ending: '-a',
        prepositions: ['от', 'до'],
        example: 'детей, полей',
      },
      dative: {
        ending: '-ima, -ama',
        prepositions: ['к'],
        example: 'детям, полям',
      },
      accusative: {
        ending: '-a, -ena',
        prepositions: ['через'],
        example: 'детей, поля',
      },
      locative: {
        ending: '-ima, -ama',
        prepositions: ['в', 'на'],
        example: 'о детях, в полях',
      },
      instrumental: {
        ending: '-ima, -ama',
        prepositions: ['с'],
        example: 'детьми, полями',
      },
    },
  },
};
