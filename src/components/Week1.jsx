import React from 'react';
import classes from './Week1.module.css';
import { CLOUDS_DATA } from '../constants/constants';
import paper from '../assets/paper.svg';
import child from '../assets/child-thinking.svg';

const Week1 = () => {
  return (
    <div className={classes['week-1']}>
      {/* Heading */}
      <div className={classes.heading}>
        <h2>Elements of story writing</h2>
      </div>

      {/* Welcome */}
      <div className={classes.welcome}>
        <p>
          Welcome to term 2 of Writers Club. Are you excited for this amazing
          journey?
        </p>
        <p>
          Over the next week, we will be practicing the different elements of
          story writing.
        </p>
        <p>Our aim is to make stories more interesting and exciting.</p>
      </div>

      {/* Teal Block */}
      <div className={`wrapper-teal ${classes.description}`}>
        <p>
          There are <strong>five</strong> elements which make the foundation for
          story writing. An element is an essential part of something and every
          fiction story has the same key elements:
        </p>
        <div>
          <img src={child} alt="A Child Thinking" />
        </div>
      </div>

      {/* Clouds */}
      <div className={classes.clouds}>
        {CLOUDS_DATA.map((cloud, i) => (
          <div key={i}>
            <div>
              <img src={cloud.src} alt="A Cloud Icon" />
              <span>{cloud.text}</span>
            </div>
          </div>
        ))}
      </div>

      <p>
        You must be familiar with some of these. If not, do not worry! we will
        cover all these elements as we go along.
      </p>

      {/* Lesson */}
      <div className={classes.lesson}>
        <div>
          <img src={paper} alt="A paper" />
        </div>
        <ul role="list">
          <li>
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories.
          </li>
          <li>The setting is an important element of every fiction story.</li>
        </ul>
      </div>
    </div>
  );
};

export default Week1;
