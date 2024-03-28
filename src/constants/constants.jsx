import { Week1, Week2, Week3 } from '../components';
import cloud1 from '../assets/cloud-1.svg';
import cloud2 from '../assets/cloud-2.svg';
import cloud4 from '../assets/cloud-4.svg';

export const CLOUDS_DATA = [
  { src: cloud1, text: 'setting' },
  { src: cloud2, text: 'characters' },
  { src: cloud1, text: 'plot' },
  { src: cloud4, text: 'problem or conflict' },
  { src: cloud2, text: 'resolution' },
];

export const WEEKS = [
  { week: 1, component: <Week1 /> },
  { week: 2, component: <Week2 /> },
  // { week: 3, component: <Week3 /> },
];

export const weeksLength = WEEKS.length;
