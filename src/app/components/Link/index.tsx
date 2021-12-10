import React, { useState } from 'react';
import './Link.scss';
import { ELinkType } from 'types/ELinkType';
import { ILink } from 'types/ILink';

interface Props {
  backgroundColor: string;
  textColor: string;
  link: ILink;
}

// TODO: should be tranformed to some libraries based on JSS like material UI
// or styled components to avoid complex inline styling
const buttonStyle = ({ hover, backgroundColor, textColor }) => ({
  backgroundColor: hover ? textColor : backgroundColor,
  color: hover ? backgroundColor : textColor,
  border: `2px solid ${backgroundColor}`,
});

const Link = ({ backgroundColor, textColor, link }: Props) => {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (link.linkType === ELinkType.Classic) {
      window.open(link.url || '', '_blank');
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
        <p>
          {link.linkType === ELinkType.Classic
            ? link.title || ' '
            : link.linkType === ELinkType.MusicPlayer
            ? 'Music'
            : 'Shows'}
        </p>
      </button>
    </div>
  );
};

export default Link;
