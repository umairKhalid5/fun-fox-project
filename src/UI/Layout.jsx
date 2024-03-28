import React from 'react';
import { WEEKS } from '../constants/constants';
import logo from '../assets/logo.png';
import week from '../assets/week-1.svg';
import { Buttons, BackgroundIcons } from '../components';

const Layout = ({ activeWeek, changeWeek }) => {
  return (
    <div className="container grid-center">
      {/* Top Row */}
      <div className="top-row">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Fun Fox Logo" />
        </div>
        {/* Week */}
        {activeWeek === 1 && (
          <div className="week">
            <img src={week} alt="Week 1" />
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="wrapper grid-center">
        {/* Background Icons */}
        <BackgroundIcons activeWeek={activeWeek} />

        {/* Week Data */}
        {WEEKS[activeWeek - 1].component}
      </main>

      {/* Bottom Row for Buttons */}
      <Buttons activeWeek={activeWeek} changeWeek={changeWeek} />
    </div>
  );
};

export default Layout;
