import React from 'react';
import pencil from '../assets/pencil.svg';
import bag from '../assets/bag.svg';
import bookOpen from '../assets/book-open.svg';
import ruler from '../assets/ruler.svg';
import bookClosed from '../assets/book-closed.svg';
import gradCap from '../assets/grad-cap.svg';
import questionMark from '../assets/question-mark.svg';

const BackgroundIcons = ({ activeWeek }) => {
  return (
    <>
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
    </>
  );
};

export default BackgroundIcons;
