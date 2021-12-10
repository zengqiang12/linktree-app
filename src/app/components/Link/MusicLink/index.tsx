import React from 'react';
import './MusicLink.scss';
import ArrowIcon from '../../ArrowIcon';

interface Props {
  url: string;
  platformName: string;
}

const MusicLink = ({ url, platformName }: Props) => (
  <div
    className="MusicLink__Wrapper"
    onClick={() => window.open(url, '_blank')}
  >
    <div className="MusicDetail">
      <div className="MusicDetail__PlatformName">{platformName}</div>
    </div>
    <div className="ArrowIcon__Container">
      <ArrowIcon />
    </div>
  </div>
);

export default MusicLink;
