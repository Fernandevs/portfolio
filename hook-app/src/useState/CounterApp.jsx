import { useState } from 'react';

export const CounterApp = () => {
  const [state, setState] = useState({
    one: 10,
    two: 20,
    three: 30,
  });

  const { one, two, three } = state;

  return (
    <>
      <h1>Counter One: { one }</h1>
      <h1>Counter Two: { two }</h1>
      <h1>Counter Three: { three }</h1>
      <hr/>
      <button className="btn btn-primary" onClick={
        () => setState({ one: one + 1, ...state })
      }>+1</button>
    </>
  );
};
