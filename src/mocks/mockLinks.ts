import { ELinkType } from '../types/ELinkType';
import { ILink } from '../types/ILink';

export const mockLinks: ILink[] = [
  {
    title: 'Hamlet Show',
    url: null,
    linkType: ELinkType.ShowsList,
    shows: [
      {
        url: 'https://www.songkick.com/',
        soldOut: false,
        venueName: 'The Forum, Melbourne',
        date: 'Apr 01 2019',
      },
      {
        url: 'https://www.songkick.com/',
        soldOut: true,
        venueName: 'The Forum, Melbourne',
        date: 'Apr 01 2019',
      },
      {
        url: 'https://www.songkick.com/',
        soldOut: false,
        venueName: 'The Forum, Melbourne',
        date: 'Apr 01 2019',
      },
      {
        url: 'https://www.songkick.com/',
        soldOut: false,
        venueName: 'The Forum, Melbourne',
        date: 'Apr 01 2019',
      },
      {
        url: 'https://www.songkick.com/',
        soldOut: false,
        venueName: 'The Forum, Melbourne',
        date: 'Apr 01 2019',
      },
    ],
    musics: [],
  },
  {
    title: 'Perfect - Ed Sheeran',
    url: null,
    linkType: ELinkType.MusicPlayer,
    shows: [],
    musics: [
      {
        title: 'Perfect - Ed Sheeran',
        musicImageUrl:
          'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
        musicPlatformUrl: 'https://www.spotify.com/au/',
        platformName: 'Spotify',
      },
      {
        title: 'Perfect - Ed Sheeran',
        musicImageUrl:
          'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
        musicPlatformUrl: 'https://music.apple.com/us/browse',
        platformName: 'Apple Music',
      },
      {
        title: 'Perfect - Ed Sheeran',
        musicImageUrl:
          'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
        musicPlatformUrl: 'https://soundcloud.com/',
        platformName: 'Soundcloud',
      },
      {
        title: 'Perfect - Ed Sheeran',
        musicImageUrl:
          'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
        musicPlatformUrl: 'https://music.youtube.com/',
        platformName: 'YouTube Music',
      },
      {
        title: 'Perfect - Ed Sheeran',
        musicImageUrl:
          'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
        musicPlatformUrl: '',
        platformName: 'Deezer',
      },
      {
        title: 'Perfect - Ed Sheeran',
        musicImageUrl:
          'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
        musicPlatformUrl: 'https://tidal.com/',
        platformName: 'Tidal',
      },
      {
        title: 'Perfect - Ed Sheeran',
        musicImageUrl:
          'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',
        musicPlatformUrl: 'https://bandcamp.com/',
        platformName: 'Bandcamp',
      },
    ],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
  {
    title:
      'This is a long title, and I really want to pass this test. Hope the code I wrote can do the job. Sorry I am late, been busy these days',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
    musics: [],
  },
];
