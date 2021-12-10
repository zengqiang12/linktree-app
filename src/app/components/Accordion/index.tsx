import React from 'react';
import './Accordion.scss';

interface Props {
  children: JSX.Element;
}

const Accordion = ({ children }: Props) => (
  <div className="Accordion">{children}</div>
);

export default Accordion;
