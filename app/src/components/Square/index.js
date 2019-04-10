import React from 'react';
import "./styles.css"

// const Square = () => {
//   return <button>X</button>;
// }

const handleClick = text => () => console.log(text);

const Square = () => (
  <button className="square"
    onClick={handleClick("touched")}>XY</button>
);

export default Square;