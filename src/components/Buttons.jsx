import React from 'react';
import user from '../assets/user.svg';
import info from '../assets/info.svg';
import prev from '../assets/buttons/prev.svg';
import next from '../assets/buttons/next.svg';
import whiteRect from '../assets/buttons/white-border-rect.svg';
import baseRect from '../assets/buttons/no-border-rect.svg';
import downIcon from '../assets/buttons/down.svg';
import lightBar from '../assets/buttons/light-bar.svg';
import darkBar from '../assets/buttons/dark-bar.svg';

const Buttons = ({ activeWeek, changeWeek }) => {
  return (
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
  );
};

export default Buttons;
