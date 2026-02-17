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
        example: 'veliki stol (большой стол), crni mačak (чёрный кот), brz voz (быстрый поезд), dobar prijatelj (хороший друг)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (от)', 'do (до)', 'ispod (под)', 'iznad (над)'],
        example: 'od velikog stola (от большого стола), do crnog mačka (до чёрного кота), od belog voza (от белого поезда)',
      },
      dative: {
        ending: '-u',
        prepositions: ['prema (к)', 'suprotno (против)'],
        example: 'velikom stolu (большому столу), crnom mačku (чёрному коту), brzom vozu (быстрому поезду)',
      },
      accusative: {
        ending: '-∅, -a (for animates)',
        prepositions: ['kroz (через)', 'preko (по)', 'uz (вдоль)'],
        example: 'veliki stol (большой стол), crnog mačka (чёрного кота), brz voz (быстрый поезд)',
      },
      locative: {
        ending: '-u, -i',
        prepositions: ['u (в)', 'na (на)', 'pri (при)', 'kod (у)'],
        example: 'na velikom stolu (на большом столе), kod crnog mačka (у чёрного кота), u brzom vozu (в быстром поезде)',
      },
      instrumental: {
        ending: '-om, -em',
        prepositions: ['s, sa (с)', 'između (между)'],
        example: 'velikim stolom (большим столом), crnim mačkom (чёрным котом), brzim vozom (быстрым поездом)',
      },
    },
    plural: {
      nominative: {
        ending: '-i, -ovi, -a',
        prepositions: [],
        example: 'veliki stolovi (большие столы), crni mačci (чёрные коты), brzi vozovi (быстрые поезда)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (от)', 'do (до)', 'ispod (под)', 'iznad (над)'],
        example: 'od velikih stolova (от больших столов), od crnih mačaka (от чёрных котов)',
      },
      dative: {
        ending: '-ima',
        prepositions: ['prema (к)'],
        example: 'velikim stolovima (большим столам), crnim mačkama (чёрным котам)',
      },
      accusative: {
        ending: '-e, -a',
        prepositions: ['kroz (kroz)', 'preko (по)'],
        example: 'velike stolove (большие столы), crne mačke (чёрных котов)',
      },
      locative: {
        ending: '-ima, -ama',
        prepositions: ['u (в)', 'na (на)', 'kod (у)'],
        example: 'na velikim stolovima (на больших столах), kod crnih mačaka (у чёрных котов)',
      },
      instrumental: {
        ending: '-ima, -ama',
        prepositions: ['s, sa (с)'],
        example: 'velikim stolovima (большими столами), crnim mačkama (чёрными котами)',
      },
    },
  },
  feminine: {
    singular: {
      nominative: {
        ending: '-a, -∅',
        prepositions: [],
        example: 'lepa žena (красивая женщина), nova knjiga (новая книга), stara pesma (старая песня)',
      },
      genitive: {
        ending: '-e, -i',
        prepositions: ['od (от)', 'do (до)'],
        example: 'od lepe žene (от красивой женщины), od nove knjige (от новой книги), od stare pesme (от старой песни)',
      },
      dative: {
        ending: '-i, -e',
        prepositions: ['prema (к)'],
        example: 'lepoj ženi (красивой женщине), novoj knjizi (новой книге), staroj pesmi (старой песне)',
      },
      accusative: {
        ending: '-u, -∅',
        prepositions: ['kroz (через)'],
        example: 'lepu ženu (красивую женщину), novu knjigu (новую книгу), staru pesmu (старую песню)',
      },
      locative: {
        ending: '-i, -e',
        prepositions: ['u (в)', 'na (на)'],
        example: 'o lepoj ženi (о красивой женщине), u novoj knjizi (в новой книге), o staroj pesmi (о старой песне)',
      },
      instrumental: {
        ending: '-om, -ju',
        prepositions: ['s, sa (с)'],
        example: 'lepom ženom (красивой женщиной), novom knjigom (новой книгой), starom pesmi (старой песней)',
      },
    },
    plural: {
      nominative: {
        ending: '-e, -i',
        prepositions: [],
        example: 'lepe žene (красивые женщины), nove knjige (новые книги), stare pesme (старые песни)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (от)', 'do (до)'],
        example: 'od lepih žena (от красивых женщин), od novih knjiga (от новых книг)',
      },
      dative: {
        ending: '-ama, -ima',
        prepositions: ['prema (к)'],
        example: 'lepim ženama (красивым женщинам), novim knjigama (новым книгам)',
      },
      accusative: {
        ending: '-e, -a, -i',
        prepositions: ['kroz (через)'],
        example: 'lepe žene (красивых женщин), nove knjige (новые книги)',
      },
      locative: {
        ending: '-ama, -ima',
        prepositions: ['u (в)', 'na (на)'],
        example: 'o lepim ženama (о красивых женщинах), u novim knjigama (в новых книгах)',
      },
      instrumental: {
        ending: '-ama, -ima',
        prepositions: ['s, sa (с)'],
        example: 'lepim ženama (с красивыми женщинами), novim knjigama (с новыми книгами)',
      },
    },
  },
  neuter: {
    singular: {
      nominative: {
        ending: '-o, -e',
        prepositions: [],
        example: 'malo dete (маленькое дитя), veliko polje (большое поле), jasno oko (ясный глаз)',
      },
      genitive: {
        ending: '-a, -eta',
        prepositions: ['od (от)', 'do (до)'],
        example: 'od malog deteta (от маленького дитяти), od velikog polja (от большого поля)',
      },
      dative: {
        ending: '-u, -etu',
        prepositions: ['prema (к)'],
        example: 'malom detetu (маленькому дитяти), velikom polju (большому полю)',
      },
      accusative: {
        ending: '-o, -e',
        prepositions: ['kroz (через)'],
        example: 'malo dete (маленькое дитя), veliko polje (большое поле)',
      },
      locative: {
        ending: '-u, -etu',
        prepositions: ['u (в)', 'na (на)'],
        example: 'o malom detetu (о маленьком дитяти), u velikom polju (в большом поле)',
      },
      instrumental: {
        ending: '-om, -etom',
        prepositions: ['s, sa (с)'],
        example: 'malim detetom (маленьким дитятком), velikim poljem (большим полем)',
      },
    },
    plural: {
      nominative: {
        ending: '-a, -ena',
        prepositions: [],
        example: 'mala djeca (маленькие дети), velika polja (большие поля), jasne oči (ясные глаза)',
      },
      genitive: {
        ending: '-a',
        prepositions: ['od (от)', 'do (до)'],
        example: 'od male djece (от маленьких детей), od velikih polja (от больших полей)',
      },
      dative: {
        ending: '-ima, -ama',
        prepositions: ['prema (к)'],
        example: 'maloj deci (маленьким детям), velikim poljima (большим полям)',
      },
      accusative: {
        ending: '-a, -ena',
        prepositions: ['kroz (через)'],
        example: 'mala djeca (маленькие дети), velika polja (большие поля)',
      },
      locative: {
        ending: '-ima, -ama',
        prepositions: ['u (в)', 'na (на)'],
        example: 'o maloj deci (о маленьких детях), u velikim poljima (в больших полях)',
      },
      instrumental: {
        ending: '-ima, -ama',
        prepositions: ['s, sa (с)'],
        example: 'malom decom (с маленькими детьми), velikim poljima (с большими полями)',
      },
    },
  },
};
