export type CaseName =
  | 'nominative'
  | 'genitive'
  | 'dative'
  | 'accusative'
  | 'locative'
  | 'instrumental';

export type Gender = 'masculine' | 'feminine' | 'neuter';
export type Quantity = 'singular' | 'plural';

export interface ReferenceInfo {
  nounEnding: string;
  adjectiveEnding: string;
  nounExample: string;
}

export type ReferenceData = Record<CaseName, Record<Gender, Record<Quantity, ReferenceInfo>>>;
export type CasePrepositions = Record<CaseName, string[]>;

export const casePrepositions: CasePrepositions = {
  "nominative": [],
  "genitive": [
    "od (от)",
    "do (до)",
    "ispod (под)",
    "iznad (над)"
  ],
  "dative": [
    "prema (к)",
    "suprotno (против)"
  ],
  "accusative": [
    "kroz (через)",
    "preko (по)",
    "uz (вдоль)"
  ],
  "locative": [
    "u (в)",
    "na (на)",
    "pri (при)",
    "kod (у)"
  ],
  "instrumental": [
    "s, sa (с)",
    "između (между)"
  ]
};

export const referenceData: ReferenceData = {
  "nominative": {
    "masculine": {
      "singular": {
        "nounEnding": "-∅, -ak, -ar",
        "adjectiveEnding": "-∅ / -i",
        "nounExample": "veliki stol (большой стол), crni mačak (чёрный кот), brz voz (быстрый поезд), dobar prijatelj (хороший друг)"
      },
      "plural": {
        "nounEnding": "-i, -ovi, -a",
        "adjectiveEnding": "-i / -e / -a",
        "nounExample": "veliki stolovi (большие столы), crni mačci (чёрные коты), brzi vozovi (быстрые поезда)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-a, -∅",
        "adjectiveEnding": "-a / -e",
        "nounExample": "lepa žena (красивая женщина), nova knjiga (новая книга), stara pesma (старая песня)"
      },
      "plural": {
        "nounEnding": "-e, -i",
        "adjectiveEnding": "-i / -e / -a",
        "nounExample": "lepe žene (красивые женщины), nove knjige (новые книги), stare pesme (старые песни)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-o, -e",
        "adjectiveEnding": "-o / -a",
        "nounExample": "malo dete (маленькое дитя), veliko polje (большое поле), jasno oko (ясный глаз)"
      },
      "plural": {
        "nounEnding": "-a, -ena",
        "adjectiveEnding": "-i / -e / -a",
        "nounExample": "mala djeca (маленькие дети), velika polja (большие поля), jasne oči (ясные глаза)"
      }
    }
  },
  "genitive": {
    "masculine": {
      "singular": {
        "nounEnding": "-a",
        "adjectiveEnding": "-og / -a (pl)",
        "nounExample": "od velikog stola (от большого стола), do crnog mačka (до чёрного кота), od belog voza (от белого поезда)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-ih / -a",
        "nounExample": "od velikih stolova (от больших столов), od crnih mačaka (от чёрных котов)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-e, -i",
        "adjectiveEnding": "-e / -i",
        "nounExample": "od lepe žene (от красивой женщины), od nove knjige (от новой книги), od stare pesme (от старой песни)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-ih / -a",
        "nounExample": "od lepih žena (от красивых женщин), od novih knjiga (от новых книг)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-a, -eta",
        "adjectiveEnding": "-og / -eta",
        "nounExample": "od malog deteta (от маленького дитяти), od velikog polja (от большого поля)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-ih / -a",
        "nounExample": "od male djece (от маленьких детей), od velikih polja (от больших полей)"
      }
    }
  },
  "dative": {
    "masculine": {
      "singular": {
        "nounEnding": "-u",
        "adjectiveEnding": "-om / -ima (pl)",
        "nounExample": "velikom stolu (большому столу), crnom mačku (чёрному коту), brzom vozu (быстрому поезду)"
      },
      "plural": {
        "nounEnding": "-ima",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "velikim stolovima (большим столам), crnim mačkama (чёрным котам)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-i, -e",
        "adjectiveEnding": "-oj / -ama",
        "nounExample": "lepoj ženi (красивой женщине), novoj knjizi (новой книге), staroj pesmi (старой песне)"
      },
      "plural": {
        "nounEnding": "-ama, -ima",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "lepim ženama (красивым женщинам), novim knjigama (новым книгам)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-u, -etu",
        "adjectiveEnding": "-om / -etu",
        "nounExample": "malom detetu (маленькому дитяти), velikom polju (большому полю)"
      },
      "plural": {
        "nounEnding": "-ima, -ama",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "maloj deci (маленьким детям), velikim poljima (большим полям)"
      }
    }
  },
  "accusative": {
    "masculine": {
      "singular": {
        "nounEnding": "-∅, -a (for animates)",
        "adjectiveEnding": "-og / -e (pl)",
        "nounExample": "veliki stol (большой стол), crnog mačka (чёрного кота), brz voz (быстрый поезд)"
      },
      "plural": {
        "nounEnding": "-e, -a",
        "adjectiveEnding": "-e / -a",
        "nounExample": "velike stolove (большие столы), crne mačke (чёрных котов)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-u, -∅",
        "adjectiveEnding": "-u / -e",
        "nounExample": "lepu ženu (красивую женщину), novu knjigu (новую книгу), staru pesmu (старую песню)"
      },
      "plural": {
        "nounEnding": "-e, -a, -i",
        "adjectiveEnding": "-e / -a",
        "nounExample": "lepe žene (красивых женщин), nove knjige (новые книги)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-o, -e",
        "adjectiveEnding": "-o / -a",
        "nounExample": "malo dete (маленькое дитя), veliko polje (большое поле)"
      },
      "plural": {
        "nounEnding": "-a, -ena",
        "adjectiveEnding": "-e / -a",
        "nounExample": "mala djeca (маленькие дети), velika polja (большие поля)"
      }
    }
  },
  "locative": {
    "masculine": {
      "singular": {
        "nounEnding": "-u, -i",
        "adjectiveEnding": "-om / -ima",
        "nounExample": "na velikom stolu (на большом столе), kod crnog mačka (у чёрного кота), u brzom vozu (в быстром поезде)"
      },
      "plural": {
        "nounEnding": "-ima, -ama",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "na velikim stolovima (на больших столах), kod crnih mačaka (у чёрных котов)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-i, -e",
        "adjectiveEnding": "-oj / -ama",
        "nounExample": "o lepoj ženi (о красивой женщине), u novoj knjizi (в новой книге), o staroj pesmi (о старой песне)"
      },
      "plural": {
        "nounEnding": "-ama, -ima",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "o lepim ženama (о красивых женщинах), u novim knjigama (в новых книгах)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-u, -etu",
        "adjectiveEnding": "-om / -etu",
        "nounExample": "o malom detetu (о маленьком дитяти), u velikom polju (в большом поле)"
      },
      "plural": {
        "nounEnding": "-ima, -ama",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "o maloj deci (о маленьких детях), u velikim poljima (в больших полях)"
      }
    }
  },
  "instrumental": {
    "masculine": {
      "singular": {
        "nounEnding": "-om, -em",
        "adjectiveEnding": "-im / -oma",
        "nounExample": "velikim stolom (большим столом), crnim mačkom (чёрным котом), brzim vozom (быстрым поездом)"
      },
      "plural": {
        "nounEnding": "-ima, -ama",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "velikim stolovima (большими столами), crnim mačkama (чёрными котами)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-om, -ju",
        "adjectiveEnding": "-om / -om",
        "nounExample": "lepom ženom (красивой женщиной), novom knjigom (новой книгой), starom pesmi (старой песней)"
      },
      "plural": {
        "nounEnding": "-ama, -ima",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "lepim ženama (с красивыми женщинами), novim knjigama (с новыми книгами)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-om, -etom",
        "adjectiveEnding": "-im / -etom",
        "nounExample": "malim detetom (маленьким дитятком), velikim poljem (большим полем)"
      },
      "plural": {
        "nounEnding": "-ima, -ama",
        "adjectiveEnding": "-im / -ama",
        "nounExample": "malom decom (с маленькими детьми), velikim poljima (с большими полями)"
      }
    }
  }
};

