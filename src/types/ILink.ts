import { ELinkType } from './ELinkType';
import { IShow } from './IShow';

export interface ILink {
  title: string | null;
  linkType: ELinkType;
  url: string | null;
  shows: IShow[] | null;
}
