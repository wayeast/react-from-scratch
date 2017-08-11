import React from 'react';

function Display(props) {
  let items = props.items.slice().sort((a, b) => {
    return a - b;
  });
  const list = items.map((item, index) =>
      // I'm not supposed to use index as a key, but let it go for now...
      //  adding a line to test gh
      <li key={index.toString()}>
      Element {index} => {item}
      </li>
      );

  return (
      <ul>{list}</ul>
      );
}

export default Display;
