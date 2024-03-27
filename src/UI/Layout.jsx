import React from 'react';
import { WEEKS } from '../constants/constants';
import logo from '../assets/logo.png';
import week from '../assets/week-1.svg';
import pencil from '../assets/pencil.svg';
import bag from '../assets/bag.svg';
import bookOpen from '../assets/book-open.svg';
import ruler from '../assets/ruler.svg';
import bookClosed from '../assets/book-closed.svg';
import gradCap from '../assets/grad-cap.svg';
import user from '../assets/user.svg';
import info from '../assets/info.svg';
import prev from '../assets/buttons/prev.svg';
import next from '../assets/buttons/next.svg';
import whiteRect from '../assets/buttons/white-border-rect.svg';
import baseRect from '../assets/buttons/no-border-rect.svg';
import downIcon from '../assets/buttons/down.svg';
import lightBar from '../assets/buttons/light-bar.svg';
import darkBar from '../assets/buttons/dark-bar.svg';
import questionMark from '../assets/question-mark.svg';

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
        {/* Left Column */}
        <div className="column left-column">
          <div>
            <img src={pencil} alt="A Pencil" />
          </div>
          <div>
            <img src={bag} alt="A Bag" />
          </div>
          <div>
            <img src={bookOpen} alt="An Open Book" />
          </div>
        </div>

        {/* Right Column */}
        <div className="column right-column">
          <div>
            <img src={ruler} alt="A Ruler" />
          </div>
          <div>
            <img
              src={activeWeek % 2 === 0 ? questionMark : bookClosed}
              alt="A Closed Book"
            />
          </div>
          <div>
            <img src={gradCap} alt="A Graduation Cap" />
          </div>
        </div>
        {WEEKS[activeWeek - 1].component}
        {/* <Week1 /> */}
        {/* Week goes here */}
      </main>

      {/* Botton Row */}
      <div className="bottom-row">
        <div>
          <img src={user} alt="User Icon" />
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="btn" onClick={() => changeWeek('prev')}>
            <img src={prev} alt="previous slide" />
          </button>
          <div className="week-number">
            <img src={whiteRect} alt="" />
            <img src={baseRect} alt="" />
            <span>{activeWeek}</span>

            <div className="border">
              <img src={lightBar} alt="" />
              <img src={darkBar} alt="" />
            </div>
            {/* Down Icon */}
            <img src={downIcon} alt="" className="down-icon" />
          </div>
          <button className="btn" onClick={() => changeWeek('next')}>
            <img src={next} alt="next slide" />
          </button>
        </div>

        <div>
          <img src={info} alt="Info Icon" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
