import { ELinkType } from './ELinkType';

export interface ILink {
  title: string | null;
  linkType: ELinkType;
  url: string | null;
}
