import { ELinkType } from './ELinkType';
import { IShow } from './IShow';
import { IMusic } from './IMusic';

export interface ILink {
  title: string | null;
  linkType: ELinkType;
  url: string | null;
  shows: IShow[] | null;
  musics: IMusic[] | null;
}
