import React from 'react';
import classes from './Week2.module.css';
import beach from '../../assets/beach.png';
import night from '../../assets/night.png';
import clock from '../../assets/clock.svg';
import home from '../../assets/home.svg';

const Week2 = () => {
  let clockIcon = <img src={clock} alt="Clock Icon" />;
  let homeIcon = <img src={home} alt="Home Icon" />;

  return (
    <div className={classes['week-2']}>
      <div className={classes.title}>
        <p>
          Can you figure out the definition of setting from the following
          examples?
        </p>
        <span>(take a minute to think about this)</span>
      </div>

      {/* Images Container */}
      <div className={classes.images}>
        {/* Left */}
        <div className={classes.left}>
          {/* Image Box */}
          <div>
            <img src={beach} alt="Beach Illustration" />
          </div>
          <span>Sunny day at a beach</span>
        </div>
        {/* Right */}
        <div className={classes.right}>
          {/* Image Box */}
          <div>
            <img src={night} alt="Beach Illustration" />
          </div>
          <span>A cold rainy night in a haunted house in October</span>
        </div>
      </div>

      {/* Guesses */}
      <div className={classes.guesses}>
        <p>So, what do you think the definition of setting is?</p>
        <div className={`flex-row ${classes.hint}`}>
          <span>Any guesses?</span>
          {/* Input */}
          <div className={classes.answer}>
            <span></span>
          </div>
          {/* Hint */}
          <div className={`flex-row ${classes.icons}`}>
            <span>Hint: </span>
            {clockIcon}
            {homeIcon}
          </div>
        </div>
      </div>

      {/* Teal Container - Settings */}
      <div className={`${classes.settings} wrapper-teal`}>
        Setting is the time {clockIcon} and place {homeIcon} of a story. It
        often answers the questions: when? and where?
      </div>

      <p>
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>
    </div>
  );
};

export default Week2;
