import React, { useState } from 'react';
import './Link.scss';
import { ELinkType } from 'types/ELinkType';
import Accordion from 'app/components/Accordion';
import ShowLink from './ShowLink';
import { ILink } from 'types/ILink';
import BySongkickIcon from 'app/components/BySongkickIcon';
import MusicPlayer from './MusicPlayer';
import { IMusic } from 'types/IMusic';
import SpotifyIcon from 'app/components/SpotifyIcon';
import MusicLink from './MusicLink';

interface Props {
  backgroundColor: string;
  textColor: string;
  link: ILink;
  accordionOpen: boolean;
  onLinkClick: Function;
}

// TODO: should be tranformed to some libraries based on JSS like material UI
// or styled components to avoid complex inline styling
const buttonStyle = ({ hover, backgroundColor, textColor }) => ({
  backgroundColor: hover ? textColor : backgroundColor,
  color: hover ? backgroundColor : textColor,
  border: `2px solid ${backgroundColor}`,
});

const Link = ({
  backgroundColor,
  textColor,
  link,
  accordionOpen,
  onLinkClick,
}: Props) => {
  const [hover, setHover] = useState(false);
  const [playingMusic, setPlayingMusic] = useState<IMusic>();

  const handleClick = () => {
    if (link.linkType === ELinkType.Classic) {
      window.open(link.url || '', '_blank');
    } else {
      onLinkClick(link.id);
    }
  };

  return (
    <div className="Link">
      <button
        className="Link__Wrapper"
        style={buttonStyle({ hover, backgroundColor, textColor })}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={handleClick}
      >
        <p>{link.title}</p>
      </button>
      {link.linkType === ELinkType.MusicPlayer && accordionOpen && (
        <Accordion>
          <div className="SubLink__Wrapper">
            {playingMusic && (
              <MusicPlayer
                title={playingMusic.title}
                musicImageUrl={playingMusic.musicImageUrl}
              />
            )}
            {link.musics?.map((music, index) => (
              <div key={index} className="MusicPlatform__Wrapper row">
                <div
                  className="MusicIcon__Container col-1"
                  onClick={() => setPlayingMusic(music)}
                >
                  {/* TODO: Should really read icons on the fly */}
                  <SpotifyIcon />
                </div>
                <div className="MusicPlatorm__Container col-11">
                  <MusicLink
                    url={music.musicPlatformUrl}
                    platformName={music.platformName}
                  />
                  {link.musics && index < link.musics.length - 1 && <hr />}
                </div>
              </div>
            ))}
          </div>
        </Accordion>
      )}
      {link.linkType === ELinkType.ShowsList && accordionOpen && (
        <Accordion>
          <div className="SubLink__Wrapper">
            <div className="SubLink__Wrapper__Scorllable">
              {link.shows?.map((show, index) => (
                <div key={index}>
                  <ShowLink show={show} />
                  {link.shows && index < link.shows.length - 1 && <hr />}
                </div>
              ))}
            </div>
            <hr />
            <div className="Provider__Container">
              <BySongkickIcon />
            </div>
          </div>
        </Accordion>
      )}
    </div>
  );
};

export default Link;
