import React, { useState } from 'react';
import './Link.scss';
import { ELinkType } from 'types/ELinkType';
import { ILink } from 'types/ILink';
import Accordion from 'app/components/Accordion';
import ShowLink from './ShowLink';
import BySongkickIcon from 'app/components/BySongkickIcon';

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
  const [showAccordion, setShowAccordion] = useState(false);
console.log('here', link)
  const handleClick = () => {
    if (link.linkType === ELinkType.Classic) {
      window.open(link.url || '', '_blank');
    } else {
      setShowAccordion(!showAccordion);
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
      {link.linkType === ELinkType.ShowsList && showAccordion && (
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
