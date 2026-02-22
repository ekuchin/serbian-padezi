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
    "iznad (над)",
    "iz, blizu, pre, posle, bez, kod, zbog"
  ],
  "dative": [
    "prema (к)",
    "suprotno (против)",
    "k/ka (к/ко)",
  ],
  "accusative": [
    "kroz (через)",
    "preko (по)",
    "uz (вдоль)",
    "za, u, na"
  ],
  "instrumental": [
    "s, sa (с)",
    "među, između (между)"
  ],
  "locative": [
    "o (о)",
    "u (в)",
    "na (на)",
    "po (за)"
  ]
};

export const referenceData: ReferenceData = {
  "nominative": {
    "masculine": {
      "singular": {
        "nounEnding": "-∅",
        "adjectiveEnding": "-∅ / -i",
        "nounExample": "veliki stol (большой стол), crni mačak (чёрный кот), brz voz (быстрый поезд), dobar prijatelj (хороший друг)"
      },
      "plural": {
        "nounEnding": "-i, -ovi, -evi",
        "adjectiveEnding": "-i",
        "nounExample": "veliki stolovi (большие столы), crni mačci (чёрные коты), brzi vozovi (быстрые поезда)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-a",
        "adjectiveEnding": "-a",
        "nounExample": "lepa žena (красивая женщина), nova knjiga (новая книга), stara pesma (старая песня)"
      },
      "plural": {
        "nounEnding": "-e",
        "adjectiveEnding": "-e",
        "nounExample": "lepe žene (красивые женщины), nove knjige (новые книги), stare pesme (старые песни)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-o, -e",
        "adjectiveEnding": "-o / -e",
        "nounExample": "malo dete (маленькое дитя), veliko polje (большое поле), jasno oko (ясный глаз)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-a",
        "nounExample": "mala djeca (маленькие дети), velika polja (большие поля), jasne oči (ясные глаза, искл.)"
      }
    }
  },
  "genitive": {
    "masculine": {
      "singular": {
        "nounEnding": "-a",
        "adjectiveEnding": "-og / -eg",
        "nounExample": "od velikog stola (от большого стола), do crnog mačka (до чёрного кота), od belog voza (от белого поезда)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-ih",
        "nounExample": "od velikih stolova (от больших столов), od crnih mačaka (от чёрных котов)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-e",
        "adjectiveEnding": "-e",
        "nounExample": "od lepe žene (от красивой женщины), od nove knjige (от новой книги), od stare pesme (от старой песни)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-ih",
        "nounExample": "od lepih žena (от красивых женщин), od novih knjiga (от новых книг)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-a",
        "adjectiveEnding": "-og / -eg",
        "nounExample": "od malog deteta (от маленького дитяти, искл.), od velikog polja (от большого поля)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-ih",
        "nounExample": "od male djece (от маленьких детей), od velikih polja (от больших полей)"
      }
    }
  },
  "dative": {
    "masculine": {
      "singular": {
        "nounEnding": "-u",
        "adjectiveEnding": "-om / -em",
        "nounExample": "velikom stolu (большому столу), crnom mačku (чёрному коту), brzom vozu (быстрому поезду)"
      },
      "plural": {
        "nounEnding": "-ima",
        "adjectiveEnding": "-im",
        "nounExample": "velikim stolovima (большим столам)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-i",
        "adjectiveEnding": "-oj",
        "nounExample": "lepoj ženi (красивой женщине), novoj knjizi (новой книге), staroj pesmi (старой песне)"
      },
      "plural": {
        "nounEnding": "-ama",
        "adjectiveEnding": "-ima",
        "nounExample": "lepim ženama (красивым женщинам), novim knjigama (новым книгам)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-u",
        "adjectiveEnding": "-om / -em",
        "nounExample": "velikom polju (большому полю)"
      },
      "plural": {
        "nounEnding": "-ima",
        "adjectiveEnding": "-im",
        "nounExample": "maloj deci (маленьким детям), velikim poljima (большим полям)"
      }
    }
  },
  "accusative": {
    "masculine": {
      "singular": {
        "nounEnding": "-∅, -a (for animates)",
        "adjectiveEnding": "-og / -eg",
        "nounExample": "veliki stol (большой стол), crnog mačka (чёрного кота), brz voz (быстрый поезд)"
      },
      "plural": {
        "nounEnding": "-e",
        "adjectiveEnding": "-e",
        "nounExample": "velike stolove (большие столы), crne mačke (чёрных котов)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-u",
        "adjectiveEnding": "-u",
        "nounExample": "lepu ženu (красивую женщину), novu knjigu (новую книгу), staru pesmu (старую песню)"
      },
      "plural": {
        "nounEnding": "-e",
        "adjectiveEnding": "-e",
        "nounExample": "lepe žene (красивых женщин), nove knjige (новые книги)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-o, -e",
        "adjectiveEnding": "-o / -e",
        "nounExample": "malo dete (маленькое дитя), veliko polje (большое поле)"
      },
      "plural": {
        "nounEnding": "-a",
        "adjectiveEnding": "-a",
        "nounExample": "mala djeca (маленькие дети), velika polja (большие поля)"
      }
    }
  },
    "instrumental": {
    "masculine": {
      "singular": {
        "nounEnding": "-om, -em",
        "adjectiveEnding": "-im",
        "nounExample": "velikim stolom (большим столом), crnim mačkom (чёрным котом), brzim vozom (быстрым поездом)"
      },
      "plural": {
        "nounEnding": "-ima",
        "adjectiveEnding": "-im",
        "nounExample": "velikim stolovima (большими столами), crnim mačkama (чёрными котами)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-om",
        "adjectiveEnding": "-om",
        "nounExample": "lepom ženom (красивой женщиной), novom knjigom (новой книгой), starom pesmi (старой песней)"
      },
      "plural": {
        "nounEnding": "-ama",
        "adjectiveEnding": "-ima",
        "nounExample": "lepim ženama (с красивыми женщинами), novim knjigama (с новыми книгами)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-om, -em",
        "adjectiveEnding": "-im",
        "nounExample": "velikim poljem (большим полем)"
      },
      "plural": {
        "nounEnding": "-ima",
        "adjectiveEnding": "-im",
        "nounExample": "s velikim poljima (с большими полями)"
      }
    }
  },
  "locative": {
    "masculine": {
      "singular": {
        "nounEnding": "-u",
        "adjectiveEnding": "-om / -em",
        "nounExample": "na velikom stolu (на большом столе), u brzom vozu (в быстром поезде)"
      },
      "plural": {
        "nounEnding": "-ima",
        "adjectiveEnding": "-im",
        "nounExample": "na velikim stolovima (на больших столах), kod crnih mačaka (у чёрных котов)"
      }
    },
    "feminine": {
      "singular": {
        "nounEnding": "-",
        "adjectiveEnding": "-oj",
        "nounExample": "o lepoj ženi (о красивой женщине), u novoj knjizi (в новой книге), o staroj pesmi (о старой песне)"
      },
      "plural": {
        "nounEnding": "-ama",
        "adjectiveEnding": "-ima",
        "nounExample": "o lepim ženama (о красивых женщинах), u novim knjigama (в новых книгах)"
      }
    },
    "neuter": {
      "singular": {
        "nounEnding": "-u",
        "adjectiveEnding": "-om / -em",
        "nounExample": "u velikom polju (в большом поле)"
      },
      "plural": {
        "nounEnding": "-ima",
        "adjectiveEnding": "-im",
        "nounExample": "u velikim poljima (в больших полях)"
      }
    }
  },
};

