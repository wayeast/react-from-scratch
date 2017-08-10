import React from 'react';

function Display(props) {
  let items = props.items.slice().sort();
  const list = items.map((item, index) =>
      // I'm not supposed to use index as a key, but let it go for now...
      <li key={index.toString()}>
      Element {index} => {item}
      </li>
      );

  return (
      <ul>{list}</ul>
      );
}

export default Display;
