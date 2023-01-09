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
  url: string
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
    url: "https://static.wikia.nocookie.net/valorant/images/0/08/Astra_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/5/53/Breach_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/4/4d/Brimstone_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/0/09/Chamber_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/8/88/Cypher_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/a/a6/Fade_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/f/f3/Harbor_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/f/f0/KAYO_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/1/15/Killjoy_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/d/d0/Neon_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/b/b0/Omen_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/1/14/Phoenix_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/9/9c/Raze_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/b/b0/Reyna_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/3/33/Skye_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/4/49/Sova_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/5/5f/Viper_icon.png",
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
    url: "https://static.wikia.nocookie.net/valorant/images/d/d4/Yoru_icon.png",
  },
]
