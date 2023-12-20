import { number } from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>
      <button onClick={() => setCounter(counter - 1)}>- 1</button>
      <button onClick={() => setCounter(value)}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: number,
};

CounterApp.defaultProps = {
  value: 0,
};
