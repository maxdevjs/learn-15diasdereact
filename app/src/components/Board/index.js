import React from 'react';
import "./styles.css";

import Square from "../Square/index";

const square = qtd => {
  let max = qtd;
  const squares = [];

  while(max--) {
    squares.push(<Square key={max} />);
  }

  return squares;
}

const Board = ({qtd}) => (
  <article className="board">{square(qtd)}</article>
);

export default Board;