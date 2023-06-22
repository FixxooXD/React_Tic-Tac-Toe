import React, { useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "x" : "o";
    setState(copyState);
    setIsXturn(!isXturn);

    if (
      copyState[0] !== null &&
      copyState[0] === copyState[1] &&
      copyState[0] === copyState[2]
    ) {
      console.log(copyState[0], "wins");
    }
    if (
      copyState[3] !== null &&
      copyState[3] === copyState[4] &&
      copyState[3] === copyState[5]
    ) {
      console.log(copyState[3], "wins");
    }
    if (
      copyState[6] !== null &&
      copyState[6] === copyState[7] &&
      copyState[6] === copyState[8]
    ) {
      console.log(copyState[6], "wins");
    }

    //   vertically
    if (
      copyState[0] !== null &&
      copyState[0] === copyState[3] &&
      copyState[0] === copyState[6]
    ) {
      console.log(copyState[0], "wins");
    } else if (
      copyState[1] !== null &&
      copyState[1] === copyState[4] &&
      copyState[1] === copyState[7]
    ) {
      console.log(copyState[1], "wins");
    } else if (
      copyState[2] !== null &&
      copyState[2] === copyState[5] &&
      copyState[2] === copyState[8]
    ) {
      console.log(copyState[2], "wins");
    }

    //   diagonal
    else if (
      copyState[0] !== null &&
      copyState[0] === copyState[4] &&
      copyState[0] === copyState[8]
    ) {
      console.log(copyState[0], "wins");
    } else if (
      copyState[2] !== null &&
      copyState[2] === copyState[4] &&
      copyState[2] === copyState[6]
    ) {
      console.log(copyState[0], "wins");
    } else {
      if (
        copyState[0] !== null &&
        copyState[1] !== null &&
        copyState[2] !== null &&
        copyState[3] !== null &&
        copyState[4] !== null &&
        copyState[5] !== null &&
        copyState[6] !== null &&
        copyState[7] !== null &&
        copyState[8] !== null
      ) {
        console.log("Restart");
      }
    }
  };

  //   const winnerCheck = () => {
  //     const winnerLogic = [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8],
  //     [0,3,6],
  //     [1,4,7],
  //     [2,5,8],
  //     [0,4,8],
  //     [2,4,8],
  //     ];

  //     for(let logic of winnerLogic){
  //         const [a,b,c] = logic;
  //         if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
  //             // return state[a];
  //             console.log(state[a]);
  //         }
  //     }
  //   }

  return (
    <div className="flex flex-col justify-center items-center w-[20rem] mt-4">
      <div className="board-row flex">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="board-row flex">
        <Square value={state[3]} onClick={() => handleClick(3)} />
        <Square value={state[4]} onClick={() => handleClick(4)} />
        <Square value={state[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row flex">
        <Square value={state[6]} onClick={() => handleClick(6)} />
        <Square value={state[7]} onClick={() => handleClick(7)} />
        <Square value={state[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};
