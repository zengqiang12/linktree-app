import React, { memo } from 'react';
import './MusicPlayer.scss';
import PlayIcon from '../../PlayIcon';

interface Props {
  title: string;
  musicImageUrl: string;
}

// TODO: Transform to real music player
const MusicPlayer = ({ title, musicImageUrl }: Props) => (
  <div className="MusicPlayer__Wrapper">
    <div className="MusicDetail row">
      <div className="MusicImage__Container col-lg-2 col-4">
        <img src={musicImageUrl} alt="music cover" />
      </div>
      <div className="PlayIcon__Container col-lg-2 col-8">
        <PlayIcon />
      </div>
      <div className="MusicName__Container col-lg-8 col-12">
        <span className="MusicName">{title}</span>
      </div>
    </div>
    <div className="MusicPlayer__Progress">
      <div className="progress">
        <div
          className="progress-bar w-25"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  </div>
);

export default memo(MusicPlayer);
