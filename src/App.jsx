import { useState } from 'react';
import Layout from './UI/Layout';
import { weeksLength } from './constants/constants';

function App() {
  const [activeWeek, setActiveWeek] = useState(1);

  const weekChangeHandler = direction => {
    if (direction === 'next') {
      if (activeWeek >= weeksLength) return setActiveWeek(1);
      setActiveWeek(prev => (prev += 1));
    }

    if (direction === 'prev') {
      if (activeWeek <= 1) return setActiveWeek(weeksLength);
      return setActiveWeek(prev => (prev -= 1));
    }
  };

  return (
    <div className="app grid-center">
      <Layout activeWeek={activeWeek} changeWeek={weekChangeHandler} />
    </div>
  );
}

export default App;
