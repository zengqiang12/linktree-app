import React, { useState } from 'react';

import './HomePage.scss';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import profilePicture from 'assets/profile-picture.png';
import Link from 'app/components/Link';
import { mockLinks } from 'mocks/mockLinks';
import { mockColorPreference } from 'mocks/mockColorPreference';

// TODO: use hooks, redux-saga, reducers to get real data
export function HomePage() {
  const [openingAccordion, setOpeningAccordion] = useState<Number>();

  const handleLinkClick = id => {
    if (openingAccordion === id) {
      setOpeningAccordion(0);
    } else {
      setOpeningAccordion(id);
    }
  };

  return (
    <div className="App">
      <div className="App__Wrapper">
        <Header profileUrl={profilePicture} profileName={'@test name'} />
        {mockLinks.map((link, index) => (
          <div key={index} className="Links__Wrapper">
            <Link
              backgroundColor={mockColorPreference.backgroundColor}
              textColor={mockColorPreference.textColor}
              link={link}
              // TODO: do it in Link component using reducer + selectors
              accordionOpen={openingAccordion === link.id}
              // TODO: use dispatch, redux etc. to do it
              onLinkClick={handleLinkClick}
            />
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}
