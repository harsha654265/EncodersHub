const movies = [
  {
    title: "Jack (2025)",
    img: "https://via.placeholder.com/300x450?text=Jack+2025",
    releaseDate: "2025-01-15",
    genres: ["Action", "Thriller"],
    runtime: "2h 10m",
    tags: ["Hindi", "Telugu", "Dual Audio", "UnCut", "South Movie", "HD", "ESub", "New"],
    heroes: ["Nani"],
    heroines: ["Shraddha Srinath"],
    directors: ["Sudheer Babu"],
    downloadLinks: [
      { quality: "480p-hd (440mb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPSmx3ZjRUcTR4V0I5RkFkVVZodklWSURQbHI0R093Nlp4MGVGYlVLNFBuWExINzZXQThVakdlWnhuSk5aMDFnP2tleT1OVzFWU0U1WldDMVljV1ppVXpCTGVVWkhaRkZmTW1sNWVWUmtlVjlC&token=MTAwNTI1" },
      { quality: "720p-hevc (730mb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQbXZoRVowcnNBa0h6a2dKRTRoWktrRUZnMWhZSUpYM0l4a3A3eFBiTjdmMUM2cHdfMEJ6OVhudFg1VUFxUlFnP2tleT1TRVJQT0c5RFVYbDRYekpOYkdOUVNVcHVOakJhT1ZKVlZrSnZhM0ZS&token=MTAwNTI1" },
      { quality: "720p-hd (1.2gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQQnNMTG5QZmRwT2pHWi1tWmNKVlRiUUtMMlpwa251ay1GV0hob1ZPMXA3bThFVTh2Qk5xMmZkU0MydXR4WUlnP2tleT1WV1JNVGpSTlVYaHNUemd6ZEU5VlptZFlRbWhGU2xabmJsSTVaMjFS&token=MTAwNTI1" },
      { quality: "1080p-hd (2.7gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQeW9qSUJieFNRMkhjMHpIMXFHMi1DdVZMR2g0U2cxT3AySWlUQUtYd01VeEdJOURQRHYza2ZPUjRlNjhQU01BP2tleT1kWEJ1VTFwbmEwMXRUREJZZGxOclpITlRhVXRrZERKcFowMU5hMmRC&token=MTAwNTI1" },
      { quality: "2160p-hevc (4.8gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOMFlYOFRvcmh0dWtSSUh5a2h1bmw3aUIzYVgwQ2tnUDg1QTA1Q2FUcVJNS0Q5ZFV5elI4ZlY4ZTdWS2poMC1nP2tleT1iREpDTURSYVF6aFdNMlZQYjAxMU1uWkZhRkkzYkZSdmRuWkJibWhS&token=MTAwNTI1" }
    ]
  },
  {
    title: "Good Bad Ugly (2025)",
    img: "https://via.placeholder.com/300x450?text=Good+Bad+Ugly+2025",
    releaseDate: "2025-02-20",
    genres: ["Action", "Drama"],
    runtime: "2h 15m",
    tags: ["Hindi", "Tamil", "Dual Audio", "UnCut", "South Movie", "HD", "ESub", "New"],
    heroes: ["Ajith Kumar"],
    heroines: ["Nayanthara"],
    directors: ["Adhik Ravichandran"],
    downloadLinks: [
      { quality: "480p-hd (460mb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOcy05VFdiaVdpTHRqX1NGYW9NZ2x0QzhNa1ZtZ2ZUMlBSZzUyUFJha1Y1N0dxb0lTaUpmMUQ5bmhpdDJuNnpBP2tleT1WM3B1TVRZMlgyVXhjbGRwTm5oblFqZEVjbVJLWm5sc1l6UnRZbE5C&token=MTAwNTI1" },
      { quality: "720p-hevc (760mb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQaUoyUFNKRHA2QVpNQmhkNklpcHRYUVl3UmFLaGQtTDVKZWx6QjVoYzFCc3RHVXJMcXlxMWxJSExSMDNjVHFnP2tleT1ZbEY1UVZaWlQzWktXRGM0VlVoaVJIaFdVRlp6YlRKU1lVNVpNRkJS&token=MTAwNTI1" },
      { quality: "720p-hd (1.2gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQTHlxSEdMWGpQYVJTQ1FzbnFYMm84N28zSWFGUjMwcGpWN3NSUTZ4U2dBZC1kMDJkRXdPZ0NGamljMi1ZVmdBP2tleT1TbFZKVlc0MVZrZHhTbm94YlVONWNEQnRlV2hHU3pCUFFVNDFjVEYz&token=MTAwNTI1" },
      { quality: "1080p-hd (2.8gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPZklGeFdDQU54LUxKdS14MkJidzJxSE03ZTdfZDIycGdCblFyYnF5S0lNWi1VbzdldmhtWTBFd0YtU3I4aFl3P2tleT1ia0UzZG1aV1UwaFhkM2RtTUVsNE5IQnFVMWRZU2s1T1NHNXFZbHBC&token=MTAwNTI1" },
      { quality: "2160p-hevc (5gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOalFwTnFDOWtHaWJ4R0ZBbGtaQUFBTFNQdS1wcEZBdDZTai1zUmtDdjlwaU15TzNwc1Atam10ZG5tZUtfMTJRP2tleT1kVEp4VXpKZk5XeEtXa3hGVTFscldGSkNMVVY1WjJGeFJVUXRlSFJS&token=MTAwNTI1" }
    ]
  },
  {
    title: "Jewel Thief The Heist Begins (2025)",
    img: "https://via.placeholder.com/300x450?text=Jewel+Thief+2025",
    releaseDate: "2025-03-10",
    genres: ["Action", "Thriller"],
    runtime: "2h 5m",
    tags: ["Hindi", "English", "Dual Audio", "Bollywood", "HD", "ESub", "New"],
    heroes: ["Saif Ali Khan"],
    heroines: ["Kriti Sanon"],
    directors: ["Siddharth Anand"],
    downloadLinks: [
      { quality: "480p-hevc (400mb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQWUowaGs5WHBoZThYemMzakNQVi1CNjR6aElHTGF5SGx6dzlyc1dYY2NlNGl6ZGp4QUMzVlpDd1B2R3RRRTd3P2tleT1ZalZLVHkxcVRqUlpiVmhMUlc1NVV6RXlSRTB0Y0RSRVpVOXNSRTlu&token=MTAwNTI1" },
      { quality: "720p-hevc (680mb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPVGg4U2t2WTFKYl9vOHlKM2VQTmltRHE2cDJYVWIwSTdMT1lGQWszeWJqaFdOTTJkd2otT0E3NWtBOGJKOW93P2tleT1RbmxFTkdwS1Rrc3dNRFEzWkZaelZ6aGZlRGREU1VGT1dWZGtOMVJC&token=MTAwNTI1" },
      { quality: "720p-hd (1.1gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVmZrWW5Ud0Eya1J3ckJua09tRXJCQUZYc1R5SThHNFBXNXZsVEk5Vkp0OU9JdjhMalRNSld1QlJOQjJlS1d3P2tleT1TblF4Ykd0S2EyMTZORmx4VEhKeVgxZHBOMTlHU1dSSWJWaHFUWFJS&token=MTAwNTI1" },
      { quality: "1080p-hd (2.5gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPdjVWY1V6VldSdEJXaXFFeG9EYlVaVWZsVlYyVVUzOGc0dHJzS0VWZXA4YzZHc1NVU2dQT0hEMk5PVnlNeW9nP2tleT1VMEZoVTJScFlVMVZaVlJqWldveGFHUlhVV3BKVlVrM2NVOHdPVloz&token=MTAwNTI1" },
      { quality: "2160p-hevc (4.2gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPeU5tMzlNZFlWYVJ4UzVhMUJWRndLUXdIMTZIeHdLeVFiZmZBb3NqekRhenQyd1dkREE1d1l6U21fSGJiWnpBP2tleT1VVkZWYUZCRU1XMVVWamhZYnpOdmIza3hZM1kwVW1FNVMybHVZV1Ju&token=MTAwNTI1" }
    ]
  },
    {
        "title": "Jack 2025",
        "release_date": "2025",
        "download_links": [
            {"size": "440mb", "quality": "480p-hd", "url": "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPSmx3ZjRUcTR4V0I5RkFkVVZodklWSURQbHI0R093Nlp4MGVGYlVLNFBuWExINzZXQThVakdlWnhuSk5aMDFnP2tleT1OVzFWU0U1WldDMVljV1ppVXpCTGVVWkhaRkZmTW1sNWVWUmtlVjlC&token=MTAwNTI1"},
            {"size": "730mb", "quality": "720p-hevc", "url": "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQbXZoRVowcnNBa0h6a2dKRTRoWktrRUZnMWhZSUpYM0l4a3A3eFBiTjdmMUM2cHdfMEJ6OVhudFg1VUFxUlFnP2tleT1TRVJQT0c5RFVYbDRYekpOYkdOUVNVcHVOakJhT1ZKVlZrSnZhM0ZS&token=MTAwNTI1"},
            {"size": "1.2gb", "quality": "720p-hd", "url": "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQQnNMTG5QZmRwT2pHWi1tWmNKVlRiUUtMMlpwa251ay1GV0hob1ZPMXA3bThFVTh2Qk5xMmZkU0MydXR4WUlnP2tleT1WV1JNVGpSTlVYaHNUemd6ZEU5VlptZFlRbWhGU2xabmJsSTVaMjFS&token=MTAwNTI1"},
            {"size": "2.7gb", "quality": "1080p-hd", "url": "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQeW9qSUJieFNRMkhjMHpIMXFHMi1DdVZMR2g0U2cxT3AySWlUQUtYd01VeEdJOURQRHYza2ZPUjRlNjhQU01BP2tleT1kWEJ1VTFwbmEwMXRUREJZZGxOclpITlRhVXRrZERKcFowMU5hMmRC&token=MTAwNTI1"},
            {"size": "4.8gb", "quality": "2160p-hevc", "url": "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOMFlYOFRvcmh0dWtSSUh5a2h1bmw3aUIzYVgwQ2tnUDg1QTA1Q2FUcVJNS0Q5ZFV5elI4ZlY4ZTdWS2poMC1nP2tleT1iREpDTURSYVF6aFdNMlZQYjAxMU1uWkZhRkkzYkZSdmRuWkJibWhS&token=MTAwNTI1"}
        ]
    },
  {
   
    title: "L2 Empuraan (2025)",
    img: "https://via.placeholder.com/300x450?text=L2+Empuraan+2025",
    releaseDate: "2025-04-05",
    genres: ["Action", "Crime"],
    runtime: "2h 30m",
    tags: ["Hindi", "Malayalam", "Dual Audio", "UnCut", "South Movie", "HD", "ESub", "New"],
    heroes: ["Mohanlal"],
    heroines: ["Manju Warrier"],
    directors: ["Prithviraj Sukumaran"],
    downloadLinks: [
      { quality: "480p-hevc (580mb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNQkFjdFYxajNrNE1JN2FYb1VXRmh5bkdtbGhGUEU4TW10Z2xTSmNrQmxuRTlUTG9qUS1tR19lVEpQT2pON2RRP2tleT1kVkpvZFhWWVVpMU1OV2M1VVZSWGJ6QXpPRjgxWjJwdlRtNVJTMHRS&token=MTAwNTI1" },
      { quality: "720p-hevc (1gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNbXZNSThrZlFTRDRQTVNjLTRySmxNRzktSE1kOFQ4dTd0LVA3UzU4MGZiamVVelV0MlM2Tm5rSHFUVldDb093P2tleT1OM0pTWW5CV1lrZDROMVZ3ZGswNFJEWk5jMG94Y1VSeE4xaGlkMDlu&token=MTAwNTI1" },
      { quality: "720p-hd (1.5gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOa0FZZXllNzdJa3BHZFotYXZSRG4yUVNMbDJKemtTdUxVZDh5WU1TYk4yZF9HOGl2cFFMVkNMVEhjZm4xSUpRP2tleT1RVEpmWVZaSmVIQm5iVGhzT0ZsNE5qSmZOV05XWnpselZUbE1SMFJS&token=MTAwNTI1" },
      { quality: "1080p-hd (3.4gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPQ2p2cFdwMlJ0bmFPNWRxaG05eVJhNVk4dHRSYUpxaFJRZVl1SWhnN0dnTDYzb0Q0ZHlHaU9UdC14LVlnUl93P2tleT1kalYxY0ZaaFN6TTNURTVaVDFkWUxXOTNhbmd0WW1OTE0wdFNWME5C&token=MTAwNTI1" },
      { quality: "2160p-hevc (6gb)", link: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBObFpJNjZWekdwdHNmNGJwRzNfZ1pUWnByVVVPSTJiOWZ0amNHdmRMRUpqUEtpcjhnV2RVUG9Ma1N5djFTbzlnP2tleT1hak00Um5wSkxWVllXa2szZWpKamEyODVUMUpZWm1wMWRIWjFZMmhS&token=MTAwNTI1" }
    ]
  }
];
