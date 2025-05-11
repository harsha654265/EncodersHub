const movies = [
    {
        title: "Jack 2025",
        download_links: [
            { size: "440mb", quality: "480p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPSmx3ZjRUcTR4V0I5RkFkVVZodklWSURQbHI0R093Nlp4MGVGYlVLNFBuWExINzZXQThVakdlWnhuSk5aMDFnP2tleT1OVzFWU0U1WldDMVljV1ppVXpCTGVVWkhaRkZmTW1sNWVWUmtlVjlC&token=MTAwNTI1" },
            { size: "730mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQbXZoRVowcnNBa0h6a2dKRTRoWktrRUZnMWhZSUpYM0l4a3A3eFBiTjdmMUM2cHdfMEJ6OVhudFg1VUFxUlFnP2tleT1TRVJQT0c5RFVYbDRYekpOYkdOUVNVcHVOakJhT1ZKVlZrSnZhM0ZS&token=MTAwNTI1" },
            { size: "1.2gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQQnNMTG5QZmRwT2pHWi1tWmNKVlRiUUtMMlpwa251ay1GV0hob1ZPMXA3bThFVTh2Qk5xMmZkU0MydXR4WUlnP2tleT1WV1JNVGpSTlVYaHNUemd6ZEU5VlptZFlRbWhGU2xabmJsSTVaMjFS&token=MTAwNTI1" },
            { size: "2.7gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQeW9qSUJieFNRMkhjMHpIMXFHMi1DdVZMR2g0U2cxT3AySWlUQUtYd01VeEdJOURQRHYza2ZPUjRlNjhQU01BP2tleT1kWEJ1VTFwbmEwMXRUREJZZGxOclpITlRhVXRrZERKcFowMU5hMmRC&token=MTAwNTI1" },
            { size: "4.8gb", quality: "2160p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOMFlYOFRvcmh0dWtSSUh5a2h1bmw3aUIzYVgwQ2tnUDg1QTA1Q2FUcVJNS0Q5ZFV5elI4ZlY4ZTdWS2poMC1nP2tleT1iREpDTURSYVF6aFdNMlZQYjAxMU1uWkZhRkkzYkZSdmRuWkJibWhS&token=MTAwNTI1" }
        ]
    },
    {
        title: "Good Bad Ugly 2025",
        download_links: [
            { size: "460mb", quality: "480p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOcy05VFdiaVdpTHRqX1NGYW9NZ2x0QzhNa1ZtZ2ZUMlBSZzUyUFJha1Y1N0dxb0lTaUpmMUQ5bmhpdDJuNnpBP2tleT1WM3B1TVRZMlgyVXhjbGRwTm5oblFqZEVjbVJLWm5sc1l6UnRZbE5C&token=MTAwNTI1" },
            { size: "760mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQaUoyUFNKRHA2QVpNQmhkNklpcHRYUVl3UmFLaGQtTDVKZWx6QjVoYzFCc3RHVXJMcXlxMWxJSExSMDNjVHFnP2tleT1ZbEY1UVZaWlQzWktXRGM0VlVoaVJIaFdVRlp6YlRKU1lVNVpNRkJS&token=MTAwNTI1" },
            { size: "1.2gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQTHlxSEdMWGpQYVJTQ1FzbnFYMm84N28zSWFGUjMwcGpWN3NSUTZ4U2dBZC1kMDJkRXdPZ0NGamljMi1ZVmdBP2tleT1TbFZKVlc0MVZrZHhTbm94YlVONWNEQnRlV2hHU3pCUFFVNDFjVEYz&token=MTAwNTI1" },
            { size: "2.8gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPZklGeFdDQU54LUxKdS14MkJidzJxSE03ZTdfZDIycGdCblFyYnF5S0lNWi1VbzdldmhtWTBFd0YtU3I4aFl3P2tleT1ia0UzZG1aV1UwaFhkM2RtTUVsNE5IQnFVMWRZU2s1T1NHNXFZbHBC&token=MTAwNTI1" },
            { size: "5gb", quality: "2160p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOalFwTnFDOWtHaWJ4R0ZBbGtaQUFBTFNQdS1wcEZBdDZTai1zUmtDdjlwaU15TzNwc1Atam10ZG5tZUtfMTJRP2tleT1kVEp4VXpKZk5XeEtXa3hGVTFscldGSkNMVVY1WjJGeFJVUXRlSFJS&token=MTAwNTI1" }
        ]
    },
    {
        title: "Jewel Thief The Heist Begins 2025",
        download_links: [
            { size: "400mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQWUowaGs5WHBoZThYemMzakNQVi1CNjR6aElHTGF5SGx6dzlyc1dYY2NlNGl6ZGp4QUMzVlpDd1B2R3RRRTd3P2tleT1ZalZLVHkxcVRqUlpiVmhMUlc1NVV6RXlSRTB0Y0RSRVpVOXNSRTlu&token=MTAwNTI1" },
            { size: "680mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPVGg4U2t2WTFKYl9vOHlKM2VQTmltRHE2cDJYVWIwSTdMT1lGQWszeWJqaFdOTTJkd2otT0E3NWtBOGJKOW93P2tleT1RbmxFTkdwS1Rrc3dNRFEzWkZaelZ6aGZlRGREU1VGT1dWZGtOMVJC&token=MTAwNTI1" },
            { size: "1.1gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVmZrWW5Ud0Eya1J3ckJua09tRXJCQUZYc1R5SThHNFBXNXZsVEk5Vkp0OU9JdjhMalRNSld1QlJOQjJlS1d3P2tleT1TblF4Ykd0S2EyMTZORmx4VEhKeVgxZHBOMTlHU1dSSWJWaHFUWFJS&token=MTAwNTI1" },
            { size: "2.5gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPdjVWY1V6VldSdEJXaXFFeG9EYlVaVWZsVlYyVVUzOGc0dHJzS0VWZXA4YzZHc1NVU2dQT0hEMk5PVnlNeW9nP2tleT1VMEZoVTJScFlVMVZaVlJqWldveGFHUlhVV3BKVlVrM2NVOHdPVloz&token=MTAwNTI1" },
            { size: "4.2gb", quality: "2160p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPeU5tMzlNZFlWYVJ4UzVhMUJWRndLUXdIMTZIeHdLeVFiZmZBb3NqekRhenQyd1dkREE1d1l6U21fSGJiWnpBP2tleT1VVkZWYUZCRU1XMVVWamhZYnpOdmIza3hZM1kwVW1FNVMybHVZV1Ju&token=MTAwNTI1" }
        ]
    },
    {
        title: "L2 Empuraan 2025",
        download_links: [
            { size: "580mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNQkFjdFYxajNrNE1JN2FYb1VXRmh5bkdtbGhGUEU4TW10Z2xTSmNrQmxuRTlUTG9qUS1tR19lVEpQT2pON2RRP2tleT1kVkpvZFhWWVVpMU1OV2M1VVZSWGJ6QXpPRjgxWjJwdlRtNVJTMHRS&token=MTAwNTI1" },
            { size: "1gb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNbXZNSThrZlFTRDRQTVNjLTRySmxNRzktSE1kOFQ4dTd0LVA3UzU4MGZiamVVelV0MlM2Tm5rSHFUVldDb093P2tleT1OM0pTWW5CV1lrZDROMVZ3ZGswNFJEWk5jMG94Y1VSeE4xaGlkMDlu&token=MTAwNTI1" },
            { size: "1.5gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOa0FZZXllNzdJa3BHZFotYXZSRG4yUVNMbDJKemtTdUxVZDh5WU1TYk4yZF9HOGl2cFFMVkNMVEhjZm4xSUpRP2tleT1RVEpmWVZaSmVIQm5iVGhzT0ZsNE5qSmZOV05XWnpselZUbE1SMFJS&token=MTAwNTI1" },
            { size: "3.4gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPQ2p2cFdwMlJ0bmFPNWRxaG05eVJhNVk4dHRSYUpxaFJRZVl1SWhnN0dnTDYzb0Q0ZHlHaU9UdC14LVlnUl93P2tleT1kalYxY0ZaaFN6TTNURTVaVDFkWUxXOTNhbmd0WW1OTE0wdFNWME5C&token=MTAwNTI1" },
            { size: "6gb", quality: "2160p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBObFpJNjZWekdwdHNmNGJwRzNfZ1pUWnByVVVPSTJiOWZ0amNHdmRMRUpqUEtpcjhnV2RVUG9Ma1N5djFTbzlnP2tleT1hak00Um5wSkxWVllXa2szZWpKaWF5b2FXaEZTbFoyU1dKa1pXbFJC&token=MTAwNTI1" }
        ]
    },
    {
        title: "Veer Dheera Sura Part 2 2025",
        download_links: [
            { size: "400mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQTzQ1eTdIVzZ6RWF3N1AxY3lNSXZnYmk2MllDNHp4T2dST3hsSXdmeEhUMGVKcWVxeVBBdFE0dHI5SGFMb0h3P2tleT1SVGRtZGt3MFR6QjBUVzVDZEU5b01FZFVXRzFFVkhWNFdYVkpYMFYz&token=MTAwNTI1" },
            { size: "800mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQWVZWalNOYkw3UE03UkJhaTZkeVBYNDY2WDhMLVlYdWpqRUN0dERWZlc3b01BTU1LQURYd1FMcEJ3dHZZbkhnP2tleT1hMHRCVXpGeE0yeEtUbmRVVFcxa056TnZjbXBOU1dsNmNuZERXWGgz&token=MTAwNTI1" },
            { size: "1.2gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPc0F3MGVsakVJR0FKNlA1dUVsOGxxVFdINDFVa0U0QmZJWFdOX01NV3dnRFlXVlBOR0Q4eDBCX3BFQzJPSENRP2tleT1SR05EUjBOVWR6bHNSR3AwWlhoM01tczRhV2t6WXkxUk4zTjZkbWwz&token=MTAwNTI1" },
            { size: "3gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOSTd0QU5UbjhFam53YTZ2QWFBT2pESXRKbC1ZNmh5eTZmRGMtYjA3Zm9FT25Ec01tRXNmZ0pOSWRWUGxUZmR3P2tleT1SR0ZpU2tGaE5GSTFTVk0zTlRRMFIzSmhVQzFYVFRoYU9VbzNjRk5C&token=MTAwNTI1" },
            { size: "5.7gb", quality: "2160p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9paG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNUVVqWWg4aFVUOHYtMWk4Vk5JY2R0ckFBMDJfVm9xWElDLXM0ZmV2ZmFYd1E5T2M1MnBjTkdZbmJKNm1fQ2VRP2tleT1MVU5NTFZKRFMwZzVaV2x1TlZGQmIxVnhRMmhsVTFKRVZVNUdRakoz&token=MTAwNTI1" }
        ]
    },
    {
        title: "Eragon 2006",
        download_links: [
            { size: "360mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNQV9nUXJBNThqLXpJYVNjSVptMmFILUtpSWZhWWVCV3ZfWFUtUmhGS1JSZENGN3pFTUo3VncwMmdQWTdZbzZRP2tleT1RV0YxU0c4MFdEQjBUVFZ5TUUwNFMzVnFhR3hwYjFOQ2VFNTVUMXBC&token=MTAwNTI1" },
            { size: "1gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNSDUzOXNnaUVTV3hmRW5oOVNFYml2bnAwSmdlSTlDWHdFMjlmckd5cFpPYXZVQldEMW5mVHhGekVXb2VzdFZnP2tleT1hemQ2U0dOdlIzcFhRMEV3VDBOYU5uTm1ZbWh5WVZsQ2RVSTBaV2hC&token=MTAwNTI1" },
            { size: "2.7gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQcHdrRnEtUC1NZXljdGgtQVhmNVEwUTdqX2JXV3g0MGc3dWRhY00wNzVLSkQ2bWltaVpsMGwzZkdKWDg0RTlRP2tleT1UR2xPV1RGNlowWXRhV05OVGpkemRYZFFTSGt3UzA5MFpWWmhVSHBC&token=MTAwNTI1" }
        ]
    },
    {
        title: "The Diplomat 2025",
        download_links: [
            { size: "430mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPa29zbVZSY3JxWV81OExhQW9sbi12VXVWbVFxNEdmbU11RE4tZ0JQM0tPd0E4SUZSWmxqeW1EakpsQkNaWDJnP2tleT1aR2RYUzBzM2VFVkxUMnN6YkZFd1psY3ljM1pyUVZsUVRGWXhRa3BC&token=MTAwNTI1" },
            { size: "750mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOTHJHc2tQWTVMa3FDbVpfY1pjNVVDR3VRYl9mMDY2U1RKQVFpSF9fcDhhd2NnZnRveE52eDctZ2dBRlFRS2F3P2tleT1NVVp5Um1VME56UTRTMGRCVFZkTlRsTktVRm94VmtaRldEbHhPVXRC&token=MTAwNTI1" },
            { size: "1.2gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPSnpodXkzMHZRSG1yWWEyQXc5YnZOQTJaOTB0ZEctQ2lUVnBLMnU0YnNNbGhDNkprM01NN3Z4d1Y5TFBJX01nP2tleT1NbE5qTVhBNVUzZDZlWGMzYlVaemEyMUNXRXMxZWxCWk1rdDBXakIz&token=MTAwNTI1" },
            { size: "2.6gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNU255MVRMMGZlbTAtZERTREJ0bW1UcnhidFRJZjIzV19abUczb1JVNEpDVGZTbllxMU9pNnM4cGpXWWtJbTZ3P2tleT1iM0pqUm14dmMySlFUMlpKYTFOV2RtNTRUMGs1YVVKUGEyVm5WRVJu&token=MTAwNTI1" }
        ]
    },
    {
        title: "Odela 2 2025",
        download_links: [
            { size: "430mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVWR2bEdSaGRpNk5jaDJaTFk3MklHVl9yYnduUGc4amN4Z2xOU0psNUxmYm8zSnFNZEpXM2lhYkJicnRscEd3P2tleT1NbWg1UXpJMllUaGxkMGxoYW1kNmVtUkZVMnRVZGs5cVYwaFhjelZu&token=MTAwNTI1" },
            { size: "850mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNNXJZVmh5N01LVzB2a2t6VGNCQU1jaGdRa1JCTUxVdFhBbXI2b0ZZZXdYR1VTYm1wZHgyWElIQndaMkpmbUhBP2tleT1hVGhyV1RSNmEydGxTSFpDVTFCVFIwNWpla0UzVFdOZlNTMWhZbUpC&token=MTAwNTI1" },
            { size: "1.3gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPcmVDZ2IzVGtQbGdSbTJOT1QzdmlkdXN5ejA0WTFHOV83Q18xdUlLbXFTUk9kekdYcUQ0SHQtRERIRG9zc0xnP2tleT1ZMUpJUlZrNFdUWlVUbmhyVFhWaFFYWXlTM2s0V2xwaWJ6SXdMV1ZC&token=MTAwNTI1" },
            { size: "2.8gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOLTlJRFVWTXN3WUlMRW9JRG5YYTJqWVhXUEhwWWRmT1Ixb2NtRVpkVE5RajRXR3ViTDVIWEtNN1JlTWJEelRnP2tleT1NR1ZPTm1OUk5FbFhiMHc1UVdNMFJFbEZlbTF5U1V0dFYxbHphRlYz&token=MTAwNTI1" }
        ]
    },
    {
        title: "Theevram 2012",
        download_links: [
            { size: "420mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNTF9KcE5LQ29xVmpPVC0wREdNZzVuN0xuNW1lYXVFRkdjTF9ZdElFU1VZV1hiRUl1VEt0c3o2S1k2R2c5NTVRP2tleT1jRGhITlhOTU9XaE9lVTVHTUhsb01qVXpWM2RFV1hsd2RGcGxWM1oz&token=MTAwNTI1" },
            { size: "700mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQZzBxSUU4UEJsTnVKUlZVTUY1amlaMVdrdlpRZUxIYzhGaFZhQ2hLRVI4SFdvcTJ4Mi1Vemp4S21Od1RDWG5BP2tleT1Obmt4U1hkTVFYRTVNelpXWDBVNU9IQnNlVmxXWDNsUVJYSXlTemxS&token=MTAwNTI1" },
            { size: "1.1gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQcWNtVUdaZ0xsbWp6WVMtRTBaTmlXeGsyc3VOaU9DaXhYZFdPWG5VZG03aVdvQTFUWW5CRGJ6d3U4TjlTSWFBP2tleT1jMEp3VFVkakxYRlRlRlEzVkY5RFVFaFVaVmxZU3pKeU1VaGlNMHRS&token=MTAwNTI1" },
            { size: "2.6gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPS0xJY3BJM3Y3bndEU091MmItZTVHMFE0X05SSi1CNUlveDVtSTkzRlg0OURhWFpfekE5N0lOYk5Ha2oyajF3P2tleT1OUzEzY0hkRVN6aEllR0V4YW14elQzUnlOMlI2Wm1aMFFrTlZVVEpC&token=MTAwNTI1" }
        ]
    },
    {
        title: "Kesari Chapter 2 2025",
        download_links: [
            { size: "370mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQQzlPQkZNZXBBTnppcHhhTncybTRMOXhHYUN1aU1MckxaUmVsalpmcmlGQUxqZGNRcURQcHZodXhmNFhXZ3dRP2tleT1WWHBCTTJkdWJWSnhTVVpGU3pWbWVGcDJhRkJXVEdNeFRIcEJRVEpC&token=MTAwNTI1" },
            { size: "660mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPbWtIZ2NtM2Jwc0RhdU5VY2tfdW9TWUl4VDg1cDBEMTh3OEd6clBQNjZkNWNRV2Z2NXpKTWJxbEl4RzE1TkJRP2tleT1ia1ZJWW5GMlRWTkNXVFJIVjA1R1NXeHdPV3h5TjBoZk9FbDNiRlZu&token=MTAwNTI1" },
            { size: "1gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPUF9CNS1VTmxGTFpxaTVVTHNVbGpVYU1VaEpHQVJhUmk4NnFCY3FsZmxNMEh6V0s0M0NBWEkwRmFKUGQySy13P2tleT1hMVpCZURCUWN5MVdWVVV5YW5ZeGQwY3ROM0p4V1ZOeWVUWlBUVkIz&token=MTAwNTI1" },
            { size: "2.5gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPbnNUVkdCN183bURMVjNhV0R1VVFteS01UFlEeU13TkVTNVZIOFk4d1ZvbEVUc0tEUHNHb1dLTEQxNHZQdUZ3P2tleT1iV0pOWHpWbGEzQTNUM0pXZWpsWlptTk5SbGhLZFdGclNWQnFhaTFC&token=MTAwNTI1" },
            { size: "4.5gb", quality: "1080p-fhd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQRVhOVS1OTVdmWkFFR2o0Z2pfYVM2WFdOdHZ0VUl5N3dxQXlrYW1ZUXF4VHJvQ2ZaY1VWbk10MzJIcmMzNHp3P2tleT1WbVJFUmpsSWJXTjNVMUpUYmtodmFIcFVUVWRsVTNOdFNpMUZXbTVC&token=MTAwNTI1" }
        ]
    },
    {
        title: "Vithaikkaaran 2024",
        download_links: [
            { size: "440mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOd0FWYWVCYTNrV3Ruci1vejY0NWlEaVVPb0hnamlDYy1yc0ZHN0Vic1lSTG15aWoydzRjekYxX1JsbDlJNUdnP2tleT1jM2Q1YTJSV2EwTlNRbVZGV0ZOc1ZqZEdiVEJpVlV4SWRuUTFaVXBS&token=MTAwNTI1" },
            { size: "780mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPQldTajJmSVVCRHdRV3NCX085bFA1eEc4c2xUSTg0YVMzeVMxNy0tWEFlcHcta2RQV3pyQ1ZISFU3ZnRKdkNRP2tleT1hR1ZzVFRsclpUUlpiRXBUV2xWVWJXVkZZa1ZwWlMxMlZUaEpORXRS&token=MTAwNTI1" },
            { size: "1.1gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQRG9fMFZqNWx3eUU0Y240bExkYVVvUFM2NUg5Zjk4NU1uLVc0YWJQUDI0TUxwTEw1Y2hTV0dFa1hNbFRGLXJRP2tleT1Zazg1ZEVzd2MyVkpVblJ3WWtveVVGaFlWMjlvUkVOcFFWaFFjemhu&token=MTAwNTI1" },
            { size: "2.5gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNS3RJcnNVSDhieWE4Rl9YeTlETlRWOXFrWV8zMExmM0J4MmhLSm02RExKbmltZmtWdHFZaHIwYUFIcmxvQXh3P2tleT1XV2d4YldKUFJFMUxMVVJHY21sVFpsSlBhRU5aT1ZBNGQwcFNZVWRC&token=MTAwNTI1" }
        ]
    },
    {
        title: "Gulu Gulu 2022",
        download_links: [
            { size: "450mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPd1Y1Z0hFQmxVWWF4TmM1cmRFQTYtS2tkU2Jaa0tUWXlTNW1HeXBDLU4zZ3NwOWJVYkFQclE1Z3BRbHUzRzBRP2tleT1lbmhQYUZNeWVVbFRha0U0YTFSRWJqQlZPVWRqTjJWTU9XRmpNRnAz&token=MTAwNTI1" },
            { size: "830mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNOEVBRGJ2WFhnZ214elZtX2tqUi01aGk3a3J3M01JVXZsZi02bXRVSG53a3M1YXJHbnd0ZTl3UlZRbC1lVXBnP2tleT1iR0oxYlRKMFRVVkxlRGR6UjB0S2JFZDVhMWRrYmtGNWRqSm9ZUzEz&token=MTAwNTI1" },
            { size: "1.3gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOYkFPM0JvOUotZWc4Q1RuVUZyUm40SDV6WEZ6Z085VGw0My1NXzh0OTNZR25HZUh2OHVrX2JIcTBvcnR5VjJnP2tleT1iQzAzTUVWR09YQnlSR3hSUldoMWNqbHNjbkpmYVhac01rZE9lbHBC&token=MTAwNTI1" },
            { size: "3gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOU2ppM2hPMnFzSHN6ck5aRDNxZm53YXN0blhiX2xMN0tjeFltY0xtZG5ZUE9lVWZ2SFZPLV9tNDVKTDg0UThBP2tleT1WalJtYTA5UGVqRjBXRjlFVmtwVmFHeGpPWHBEYkZwdFRraHJYM0pC&token=MTAwNTI1" }
        ]
    },
    {
        title: "Queen 2013",
        download_links: [
            { size: "480mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPNHYzbDRabmdRX0JXbmt2dXNpZEZXcXQydkQteUM3NVNyS1dIYTk5Nmk1Z05HekJmN1phcDJESEx6VVpOV0lRP2tleT1ZVkZ2YVZaNlVERlZlbW81UVdaT1RtaFdPVm8xVm5CMmNXVnZPVGgz&token=MTAwNTI1" },
            { size: "840mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPVzVwbnZscGtHZ09ud0wyd3lDSjJUY2ZyTm5XX1ZzYnJVejdlWjUxNlRoelF0dzd1eEdEUE8yNUQ4LVJUQ2tBP2tleT1UM2sxYkVaUlIyc3RiME5VVDFSaFMwSkljVGhRZGpkeGVXdHVTMjkz&token=MTAwNTI1" },
            { size: "1.2gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNTzR1RURkQUNFYVQ3dUhQNDJwQm56NW02aElvQjFxZTNldTh6UUFZSmdRR21RRlZ2akc1Q1dlUjRwVlVjZ0t3P2tleT1hRTQ1ZDJoalRHcDJka3g0VG5acldrMUViV0ZaVDA4NVlUQmpiMFZS&token=MTAwNTI1" },
            { size: "3gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOSm9Fa2Jia1BLMHNDMjZyOTY3dU9QNGl2UXNqYmZRRGRIdmctd2U5ZXRCZm44dFNraEtlZmxBWmJMSmpUaVpBP2tleT1RbGgyV1VWTVlXcEZhVUV4WVd4WlNGaFFTbFJQUkRWQlpWZFBSMFpC&token=MTAwNTI1" }
        ]
    },
    {
        title: "Kalank 2019",
        download_links: [
            { size: "400mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNNUhsUzNJNi1EbkhFWlc5OVB6VXdDMXJrMXI1QTFvMlVxTTNScW5mdjQxaWowZlBTZGQ3V0Y2Q0hYVURTclBRP2tleT1PWEJFWlhrNFlYQmtiRGxpVTJsd2QwbHpWSGxwVUVaRVpVMXhWMWRu&token=MTAwNTI1" },
            { size: "800mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNYWxWLTQ0R1o3M2s0WFVNc0xBbERhVFZoSlFzTDJGcnRnRndDMzlwckhPdi1lUVRobDN5RERGSnV5UE5VbVFRP2tleT1kREJRWms5SlVtZG5ObEZMZHpKdVMxWTJiMGhyUWpKeWMwbFlTbGxC&token=MTAwNTI1" },
            { size: "1.2gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOMl9zUWVfVmx4TGFXbkM3bi1rNUZKbFJNc2tBRkVKdTNNNU1PQkd5SlFZalB3dHpqdHpPamlEZmNTRGV6S0dBP2tleT1hVEZyTWpKbU5tOVpTMDV4YTBSeE0xZDJRV1F5ZVc4MmVURmtOSGhu&token=MTAwNTI1" },
            { size: "3.1gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOVGhDdjVOWW10REJ4R0gzM3VCSHlXLWhIN2hNNzhMNC1vMzBSZXZDeTQ2dzhGYVF4MHMyd241eXEzczd2Vld3P2tleT1hblZMUmxoclJYWldkSEZ6VUdoeVVXZzRlalJuUjIwMVNFVk5URWhC&token=MTAwNTI1" }
        ]
    },
    {
        title: "Driver Jamuna 2022",
        download_links: [
            { size: "330mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBPT0ZLY0FmMzB3UlZaZUFzRE9EQjdDU2dDd3lneUZwYTVWc2VsVkVTWWh0aG9vRU1UOFRzNjl0OUtRYUxBbmlRP2tleT1RM2xrTjBsbVVrOTBWMVZsWWtOMFNHVmZOMUpJTVRCMFlXSkZZblZS&token=MTAwNTI1" },
            { size: "550mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQYTVyM1pIQzdyVGszMV8yNUY5N1BvaFRVeDdPYUVjTXk1NUNVRGl6WU9aejN1b1VYRGZxS0JhNFRaYVdtZnVRP2tleT1iRmxrVWpSS1FYQTVOVFJaVEY5SlJYRnZlVk5zUm5VeFNuZEpiR3Az&token=MTAwNTI1" },
            { size: "900mb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOMThWbzQwNm9YV3UtdVBjRDFFYy15TndEOHZRWHRaUDRneFNpSVp3NXA3UERpOFV4M2ZWRl9maG5DZ2twbEpnP2tleT1RbXR5TkdWeFJIQmxWVkl6YkV4WldUbHRhMGRRYVMxd1VWQm9PVXgz&token=MTAwNTI1" },
            { size: "2.2gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOSkxNbUthbnItOWhWRjJ0TmVkdEcxRmwzTlV1bE5sa2FMQ3lVOC1YaHJ2SnBncFROTTRUZFdHOVIzNjBIU2R3P2tleT1ZV05oWVRWdVgydExNWEZTY0d4bGFsODRUbU5vYjJaZk1XUmFNMGhS&token=MTAwNTI1" }
        ]
    },
    {
        title: "Khiladi 2022",
        download_links: [
            { size: "500mb", quality: "480p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBOUklSQ3UwX3d6dUhCT3A1R1RzYS1JRENYelI2SWRlUXhDYjhLSjQxc2JBQ09pdUV3SXlfWndSN1hhRFJhM05BP2tleT1NVk00YkVKMlduTnljR1pWVjFkWmFrZEZUMmhXVkZGd1lXRmljWHAz&token=MTAwNTI1" },
            { size: "800mb", quality: "720p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNcmsyUVNna3hBRVd5dHluZllzN04tLWFfTTJ0OVNaejdJYi0xazhsQXJkQTZ3UXhpRzB4TG55QW9IaW5tdTlnP2tleT1NbU5IY0ZweE5UUk1iamN4Tm5CeWNGRlFRMkZwUWxKRWFXTlhha1JC&token=MTAwNTI1" },
            { size: "1.3gb", quality: "720p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBQM1FjaHlrSHJmdlBVWGFnQWNSQkVWYnA2TUp4Nk1tZV9XMFJubU1wYW5qbjE3MkFxTEJkMl9TMHJaRmJLRDhnP2tleT1RbFp6Tm5ObVlWbEhTRFZ3ZHpSMVRVNWFObmhXYkd4bU4wRjVOR1Yz&token=MTAwNTI1" },
            { size: "3gb", quality: "1080p-hd", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNVU5wbWxmMnFTbm8tZ19NR1pYVGVKWXFtX2NiRWd0ZTBZTnNFVHlNdGZzTkFuUms5VzlOZUw4NEdTMzhFcm13P2tleT1lSEJoTFd4SWFYaFZNRmxNUWxkU2QwSlVTMlJIY1ZablJra3dOamwz&token=MTAwNTI1" },
            { size: "5.3gb", quality: "2160p-hevc", url: "https://dlfiles.filesdl.in/dl/fdownload.php?id=aHR0cHM6Ly9waG90b3MuZ29vZ2xlLmNvbS9zaGFyZS9BRjFRaXBNTm9yZHhyYlBuYkNncUlUb3NrN09TWmY4S0ZfcHMzdVJkdHktR1dHWFU5S05DS2VEZFRRcWZIaFVZWXBkNF93P2tleT1kM0J5V0dKNlIyZG5VREpCVlhoZlptRlhUbUUyY21GYVFWcElNemRS&token=MTAwNTI1" }
        ]
    }
];
