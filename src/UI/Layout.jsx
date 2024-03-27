import React from 'react';
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
import Week1 from '../components/Week1';

const Layout = () => {
  return (
    <div className="container">
      {/* Top Row */}
      <div className="top-row">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Fun Fox Logo" />
        </div>
        {/* Week */}
        <div className="week">
          <img src={week} alt="Week 1" />
        </div>
      </div>

      {/* Main Content */}
      <main className="main">
        <Week1 />
      </main>

      {/* Botton Row */}
      <div className="bottom-row">
        <div>
          <img src={user} alt="User Icon" />
        </div>
        <div>
          <img src={info} alt="Info Icon" />
        </div>
      </div>

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
          <img src={bookClosed} alt="A Closed Book" />
        </div>
        <div>
          <img src={gradCap} alt="A Graduation Cap" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
