import React, { memo } from 'react';
import './Header.scss';

interface Props {
  profileUrl: string;
  profileName: string;
}

const Header = ({ profileUrl, profileName }: Props) => (
  <div className="Header">
    <div className="Header__Image">
      <img src={profileUrl} alt="header img" />
    </div>
    <div>
      <h1>{profileName}</h1>
    </div>
  </div>
);

export default memo(Header);
