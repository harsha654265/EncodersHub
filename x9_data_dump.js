const movies = [
  {
    title: "Munna (2007)",
    img: "https://image.tmdb.org/t/p/original/nny02VHCbeMVoYuezJidDSr7eLN.jpg",
    description: "Munna (Prabhas) is a college student. His aim is to finish off mafia don Kakha (Prakash Raj)...",
    downloadLinks: [
      { quality: "1080p Ai Upscaled 10bit HQ HEVC 5.71GB", link: "https://new2.gdtot.zip/file/6132425977" }
    ]
  },
  {
    title: "Yogi (2007)",
    img: "https://image.tmdb.org/t/p/original/dWtPLjOST3hkG8rJKBrTETlkl0v.jpg",
    description: "Eeshwar Chandra Prasad (Prabhas) is the son of Ram Murthy (Chalapathi Rao) and Shantamma...",
    downloadLinks: [
      { quality: "1080p HEVC AMZN WEB-DL 10.42GB", link: "https://shiny-bird-d62b.5gkwwmjk.workers.dev/?download=e548831a28dba76100b020e61c6df773%3A8b5109f615f3239a76e977625137f229504772adcb5c28b577bf34586d034c2ca83551c2057bedab81c4af8df4ec4d85b1d7998cafb1889a55479fb0c149d9d433a539affcb188aeae2e0c62efacb6bb532ff9930b8d546bafcc341e73d8794eda8a0bf3158999851b694abf55baaa702d2343353c7eab44e9fff1af60c83a6546ab5335ea6136a84c9df18fe667902cade4bf963551ad90277cc96a36af9be0cea95d09b1d7df504959337f9659854a" }
    ]
  },
  {
    title: "Pournami (2006)",
    img: "https://image.tmdb.org/t/p/original/gSrssdk6NDFeuIkFuLskaI14EPb.jpg",
    description: "A dancer trains for an event where she has to perform a special dance in Lord Shiva's temple...",
    downloadLinks: [
      { quality: "1080p HYBRID JC WEBRIP 7.96GB", link: "https://hubcloud.bz/drive/nmspql7ckg7wplq" },
      { quality: "1080p HEVC EROSNOW+AMZN WEBRIP 6GB", link: "https://sparkling-sound-8a68.gusto-gusto-veal.workers.dev/?download=03a52e87ce5528c2a54ef3431b95fc4d%3Ac5ffca35742393c09e600d0e2ce6b5cabb1d430c85187d8cf6c48679fa1ccb7f6b826aaa5b63fea9b60dce530f282b53c17f6f68de8110ee33c9e0cfd47b552435bc47ef933b2191f74506e2caf9c3b510bfc7e840a5345af0171c0b834856c8f318a09d6a02b2b6e789fc3395ca017e9b103e26365b0ffc777d42969e235e770093ef0a9b6699279e8b1490229f6da636d6af9a4f3b0aa0ab33ff52b59fa97b690578493a7c040757c4b0a92e6316f0" }
    ]
  },
  {
    title: "Chatrapathi (2005)",
    img: "https://image.tmdb.org/t/p/original/sW7aw6fLcQC4rVYLNcDuyXjbM0S.jpg",
    description: "Sivaji and his family are uprooted from their community in Sri Lanka and wind up as bonded labourers in Vishakhapatnam...",
    downloadLinks: [
      { quality: "1080p HEVC Ai Upscale Rip 15.3GB", link: "https://new6.gdflix.dad/file/3aVsm8qonm" }
    ]
  },
  {
    title: "Varsham (2004)",
    img: "https://image.tmdb.org/t/p/original/3OkbWNeRVQopeGwdocnwk0fXW3j.jpg",
    description: "Venkat and Sailaja meet on a train and fall in love. But Sailaja's father disapproves of their relationship...",
    downloadLinks: [
      { quality: "1080p HEVC Ai Upscale Rip", link: "https://pmslink.sbs/5618/" }
    ]
  },
  {
    title: "Raghavendra (2003)",
    img: "https://image.tmdb.org/t/p/original/bQ5T8Uh8l44uBXSJgv9I26IE1sA.jpg",
    description: "Raghava (Prabhas) is a hot-blooded and restless youth who cannot tolerate injustice that is being done in society...",
    downloadLinks: [
      { quality: "1080p AMZN WEB-DL 1.8GB", link: "https://new1.filepress.icu/file/65361e7c42c56e79254de2fc" }
    ]
  },
  {
    title: "Eeshwar (2002)",
    img: "https://image.tmdb.org/t/p/original/xy5WSj34dM4ZEHNhrm0RViLnLMS.jpg",
    description: "Eeshwar (Telugu: ఈశ్వర్) is a 2002 Telugu film directed by Jayanth C. Paranjee and starring Prabhas...",
    downloadLinks: [
      { quality: "1080p AMZN WEB-DL 3.0GB", link: "https://new1.filepress.icu/file/65361e7c42c56e79254de2fc" }
    ]
  },
  {
    title: "John Wick Collection",
    img: "https://theposterdb.com/api/assets/17550/view",
    description: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
    downloadLinks: [
      { quality: "1080p WEBDL Chapter 1", link: "https://gdlink.dev/file/zBRsO7g8wcdJLXf" },
      { quality: "1080p WEBDL Chapter 2", link: "https://gdlink.dev/file/R0OEeLr2hWQE37s" },
      { quality: "1080p WEBDL Chapter 3", link: "https://gdlink.dev/file/2eQHtRChOshri6W" },
      { quality: "1080p WEBDL Chapter 4", link: "https://gdlink.dev/file/Edn4T5T3TxrM0xf" }
    ]
  },
  {
    title: "Khauf (2025)",
    img: "https://image.tmdb.org/t/p/original/puwKd7W9iCocEy11Z1XJ5sN2RaG.jpg",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    downloadLinks: [
      { quality: "1080p HEVC NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/ZIHlxGlRvG" },
      { quality: "1080p AV1 NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/07w8XtoMLN" }
    ]
  },
  {
    title: "Moon Knight (2022)",
    img: "https://image.tmdb.org/t/p/original/5kT3iyseQiVMxUzDVH2gl1MOy4.jpg",
    description: "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc’s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
    downloadLinks: [
      { quality: "1080p BluRay S01 ZIP", link: "https://vifix.site/gdflix/YsVUM3pVym" },
      { quality: "1080p 10bit BluRay x265 HEVC MUL", link: "https://vifix.site/gdflix/YsVUM3pVym" }
    ]
  },
  {
    title: "Mirzapur (2018) S01",
    img: "https://image.tmdb.org/t/p/original/p0qM8hhlMF5DuxHBzl2EZR6TehX.jpg",
    description: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father's legacy. An incident at a wedding procession forces him to cross paths with Ramakant Pandit, an upstanding lawyer, and his sons, Guddu and Bablu. It snowballs into a game of ambition, power and greed that threatens the fabric of this lawless city.",
    downloadLinks: [
      { quality: "1080p HEVC AMZN WEB-DL MUL ZIP", link: "https://new6.gdflix.dad/file/2yyluWSS3E" },
      { quality: "1080p AV1 NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/44pY8DVIF3" }
    ]
  },
  {
    title: "Mirzapur (2018) S02",
    img: "https://image.tmdb.org/t/p/original/nQyM0gixhRQuwZmv383v02qf8dE.jpg",
    description: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father's legacy. An incident at a wedding procession forces him to cross paths with Ramakant Pandit, an upstanding lawyer, and his sons, Guddu and Bablu. It snowballs into a game of ambition, power and greed that threatens the fabric of this lawless city.",
    downloadLinks: [
      { quality: "1080p HEVC AMZN WEB-DL MUL ZIP", link: "https://new6.gdflix.dad/file/bfTaUUjtm9" },
      { quality: "1080p AV1 NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/39VZBYIMNz" }
    ]
  },
  {
    title: "Mirzapur (2018) S03",
    img: "https://image.tmdb.org/t/p/original/tzOnlogwpQPPC6AUhYSz8URuRFD.jpg",
    description: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father's legacy. An incident at a wedding procession forces him to cross paths with Ramakant Pandit, an upstanding lawyer, and his sons, Guddu and Bablu. It snowballs into a game of ambition, power and greed that threatens the fabric of this lawless city.",
    downloadLinks: [
      { quality: "1080p HEVC AMZN WEB-DL MUL ZIP", link: "https://new6.gdflix.dad/file/acVAQBWquN" },
      { quality: "1080p AV1 NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/Q3vvnrOtMO" },
      { quality: "2160p BONUS EP NF WEB-DL HIN", link: "https://hubcloud.bz/drive/tacxe6aff6tuqqx" }
    ]
  },
  {
    title: "Stranger Things S01",
    img: "https://image.tmdb.org/t/p/original/jS3pbMv7CCajFRd52eK77R0scku.jpg",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    downloadLinks: [
      { quality: "1080p HEVC NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/ZIHlxGlRvG" },
      { quality: "1080p AV1 NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/07w8XtoMLN" },
      { quality: "1080p NF WEB-DL DDP5.1 HEVC", link: "https://new6.gdflix.dad/file/ZIHlxGlRvG" },
      { quality: "1080p NF WEB-DL AAC5.1 AV1", link: "https://new6.gdflix.dad/file/07w8XtoMLN" }
    ]
  },
  {
    title: "Stranger Things S02",
    img: "https://image.tmdb.org/t/p/original/uAc35R8pBa7ykvDfgy1tQs76ETP.jpg",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    downloadLinks: [
      { quality: "1080p AMZN WEB-DL HIN ZIP", link: "https://new6.gdflix.dad/file/pxhmpa4wkTAQYPI" }
    ]
  },
  {
    title: "Stranger Things S03",
    img: "https://image.tmdb.org/t/p/original/3Emf1Nal5M3h3gsw8KGcs21IhNG.jpg",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    downloadLinks: [
      { quality: "1080p HEVC NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/a5GnxcYQwa" },
      { quality: "1080p AV1 NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/esdn2Otz5S" }
    ]
  },
  {
    title: "Stranger Things S04",
    img: "https://image.tmdb.org/t/p/original/dOzW7UEVlQJs1WtNHfIe9JzcKKv.jpg",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    downloadLinks: [
      { quality: "1080p HEVC NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/HQl8QNbspx" },
      { quality: "1080p AV1 NF WEB-DL MUL", link: "https://new6.gdflix.dad/file/shESG15vae" }
    ]
  },
  {
    title: "Game of Thrones S01 (2011)",
    img: "https://image.tmdb.org/t/p/original/fw9hNiJO0U5MUg2XGyCOlTS3jdS.jpg",
    description: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north...",
    downloadLinks: [
      { quality: "4K UHD GOT S01E01 MUL", link: "https://new6.gdflix.dad/file/NseSwvJISK" },
      { quality: "4K UHD GOT S01E02 MUL", link: "https://new6.gdflix.dad/file/RgNpAjB7q2" },
      { quality: "4K UHD GOT S01E03 MUL", link: "https://new6.gdflix.dad/file/UX512ZJ1RX" },
      { quality: "4K UHD GOT S01E04 MUL", link: "https://new6.gdflix.dad/file/pEHWCweR5h" },
      { quality: "4K UHD GOT S01E05 MUL", link: "https://new6.gdflix.dad/file/Z7mDIPdaf2" },
      { quality: "4K UHD GOT S01E06 MUL", link: "https://new6.gdflix.dad/file/u3b7i9NchN" },
      { quality: "4K UHD GOT S01E07 MUL", link: "https://new6.gdflix.dad/file/3hAROJM077" },
      { quality: "4K UHD GOT S01E08 MUL", link: "https://new6.gdflix.dad/file/11Rmt2jijl" },
      { quality: "4K UHD GOT S01E09 MUL", link: "https://new6.gdflix.dad/file/4A5f89bW5i" },
      { quality: "4K UHD GOT S01E10 MUL", link: "https://new6.gdflix.dad/file/7vNcjzjmCc" }
    ]
  },
  {
    title: "Game of Thrones S02 (2011)",
    img: "https://image.tmdb.org/t/p/original/bw6DlqljVFIinhBA7uDSNha6Lnp.jpg",
    description: "The war for the Iron Throne intensifies as five kings claim their right to rule the land. The Night's Watch discovers something deadly beyond the Wall...",
    downloadLinks: [
      { quality: "4K UHD GOT S02E01 MUL", link: "https://new6.gdflix.dad/file/cHV93uVc8E" },
      { quality: "4K UHD GOT S02E02 MUL", link: "https://new6.gdflix.dad/file/FPfbQeCaZF" },
      { quality: "4K UHD GOT S02E03 MUL", link: "https://new6.gdflix.dad/file/LvmFY2ps7p" },
      { quality: "4K UHD GOT S02E04 MUL", link: "https://new6.gdflix.dad/file/hKaPPPWmkU" },
      { quality: "4K UHD GOT S02E05 MUL", link: "https://new6.gdflix.dad/file/VagvJmFum9" },
      { quality: "4K UHD GOT S02E06 MUL", link: "https://new6.gdflix.dad/file/tml4DfDSBu" },
      { quality: "4K UHD GOT S02E07 MUL", link: "https://new6.gdflix.dad/file/rmmxf09mUX" },
      { quality: "4K UHD GOT S02E08 MUL", link: "https://new6.gdflix.dad/file/2qxdf9ugMa" },
      { quality: "4K UHD GOT S02E09 MUL", link: "https://new6.gdflix.dad/file/QuWYUkSUBh" },
      { quality: "4K UHD GOT S02E10 MUL", link: "https://new6.gdflix.dad/file/QuWYUkSUBh" }
    ]
  },
  {
    title: "Game of Thrones S03 (2011)",
    img: "https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    description: "The war for the Iron Throne intensifies as five kings claim their right to rule the land. The Night's Watch discovers something deadly beyond the Wall...",
    downloadLinks: [
      { quality: "4K UHD GOT S03E01 MUL", link: "https://new6.gdflix.dad/file/cXcU7PCJKG" },
      { quality: "4K UHD GOT S03E02 MUL", link: "https://new6.gdflix.dad/file/FLpQAhmw1B" },
      { quality: "4K UHD GOT S03E03 MUL", link: "https://new6.gdflix.dad/file/LVqMn15Hku" },
      { quality: "4K UHD GOT S03E04 MUL", link: "https://new6.gdflix.dad/file/qvMGiBPAhp" },
      { quality: "4K UHD GOT S03E05 MUL", link: "https://new6.gdflix.dad/file/zXjvkBTm4h" },
      { quality: "4K UHD GOT S03E06 MUL", link: "https://new6.gdflix.dad/file/2F945aDfyl" },
      { quality: "4K UHD GOT S03E07 MUL", link: "https://new6.gdflix.dad/file/CtBz8RovTK" },
      { quality: "4K UHD GOT S03E08 MUL", link: "https://new6.gdflix.dad/file/uKFSqvieLp" },
      { quality: "4K UHD GOT S03E09 MUL", link: "https://new6.gdflix.dad/file/1chuZNjzDd" },
      { quality: "4K UHD GOT S03E10 MUL", link: "https://new6.gdflix.dad/file/kBFQZmJd6x" }
    ]
  },
  {
    title: "Game of Thrones S04 (2011)",
    img: "https://image.tmdb.org/t/p/original/gdeLQ5odsYE5EZ6hhnm2PwnjycB.jpg",
    description: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north...",
    downloadLinks: [
      { quality: "4K UHD GOT S04E01 MUL", link: "https://new6.gdflix.dad/file/qQnuXcjcu5" },
      { quality: "4K UHD GOT S04E02 MUL", link: "https://new6.gdflix.dad/file/z0Xu8H9SV1" },
      { quality: "4K UHD GOT S04E03 MUL", link: "https://new6.gdflix.dad/file/b7bGr4q64g" },
      { quality: "4K UHD GOT S04E04 MUL", link: "https://new6.gdflix.dad/file/cJJ27a8ZCP" },
      { quality: "4K UHD GOT S04E05 MUL", link: "https://new6.gdflix.dad/file/jeCxHDfZKe" },
      { quality: "4K UHD GOT S04E06 MUL", link: "https://new6.gdflix.dad/file/SxCZjWPhdP" },
      { quality: "4K UHD GOT S04E07 MUL", link: "https://new6.gdflix.dad/file/H9AIwR8GmB" },
      { quality: "4K UHD GOT S04E08 MUL", link: "https://new6.gdflix.dad/file/e3NBZi0uBR" },
      { quality: "4K UHD GOT S04E09 MUL", link: "https://new6.gdflix.dad/file/EKYzhh9BIr" },
      { quality: "4K UHD GOT S04E10 MUL", link: "https://new6.gdflix.dad/file/fo2mRHrlfp" }
    ]
  }
];
