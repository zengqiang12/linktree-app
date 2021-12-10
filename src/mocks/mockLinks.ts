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
  },
  {
    title: 'Perfect - Ed Sheeran',
    url: null,
    linkType: ELinkType.MusicPlayer,
    shows: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
  {
    title:
      'This is a long title, and I really want to pass this test. Hope the code I wrote can do the job. Sorry I am late, been busy these days',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
  {
    title: 'This is a short title',
    url: 'https://www.linkedin.com/in/qiang-zeng-9b0127156/',
    linkType: ELinkType.Classic,
    shows: [],
  },
];
