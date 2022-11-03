type Ability = {
  name: string
}

export type CharacterType = {
  id: string
  name: string
  role: string
  release: number
  skills: {
    [key: number]: Ability
  }
}

export const Characters: CharacterType[] = [
  // beta = 0.0
  {
    id: "Astra",
    name: "アストラ",
    role: "Controller",
    release: 2.04,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Breach",
    name: "ブリーチ",
    role: "Initiator",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Brimstone",
    name: "ブリムストーン",
    role: "Controller",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Chamber",
    name: "チェンバー",
    role: "Sentinel",
    release: 3.1,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Cypher",
    name: "サイファー",
    role: "Sentinel",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Fade",
    name: "フェイド",
    role: "Initiator",
    release: 4.08,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Harbor",
    name: "ハーバー",
    role: "controller",
    release: 5.08,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Jett",
    name: "ジェット",
    role: "Duelist",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Kay/O",
    name: "ケイオー",
    role: "Initiator",
    release: 3.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Killjoy",
    name: "キルジョイ",
    role: "Sentinel",
    release: 1.05,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Neon",
    name: "ネオン",
    role: "Duelist",
    release: 4.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Omen",
    name: "オーメン",
    role: "Controller",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Phoenix",
    name: "フェニックス",
    role: "Duelist",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Raze",
    name: "レイズ",
    role: "Duelist",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Reyna",
    name: "レイナ",
    role: "Duelist",
    release: 1.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Sage",
    name: "セージ",
    role: "Sentinel",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Skye",
    name: "セージ",
    role: "Initiator",
    release: 1.11,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Sova",
    name: "ソーヴァ",
    role: "Initiator",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Viper",
    name: "バイパー",
    role: "Controller",
    release: 0.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },

  {
    id: "Yoru",
    name: "ヨル",
    role: "Duelist",
    release: 2.0,
    skills: {
      1: {
        name: "abi1",
      },
      2: {
        name: "abi2",
      },
      3: {
        name: "abi3",
      },
    },
  },
]
