import React from 'react';

function Counter(props) {
  return (
      <button onClick={props.onClick}>
      Count: {props.value}
      </button>
      );
}

export default Counter;
