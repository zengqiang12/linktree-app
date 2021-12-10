import React from 'react';
import './ShowLink.scss';
import { IShow } from '../../../../types/IShow';
import ArrowIcon from '../../ArrowIcon';

interface Props {
  show: IShow;
}

const ShowLink = ({ show }: Props) => (
  <div
    className="ShowLink__Wrapper"
    onClick={() => !show.soldOut && window.open(show.url, '_blank')}
  >
    <div className="ShowDetail">
      <div className="ShowDetail__Date">{show.date}</div>
      <div className="ShowDetail__Venue">{show.venueName}</div>
    </div>
    <div className="Show__Link">
      {show.soldOut ? 'Sold Out' : <ArrowIcon />}
    </div>
  </div>
);

export default ShowLink;
