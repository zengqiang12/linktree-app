import * as React from 'react';

import './HomePage.scss';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import profilePicture from 'assets/profile-picture.png';

// TODO: use hooks, redux-saga, reducers to get real data
export function HomePage() {
  return (
    <div className="App">
      <div className="App__Wrapper">
        <Header profileUrl={profilePicture} profileName={'@test name'} />
        <Footer />
      </div>
    </div>
  );
}
