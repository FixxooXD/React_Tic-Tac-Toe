import React, { useState } from "react";
import { Square } from "./Square";
import { User } from "./User";

export const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [xWins, setXwins] = useState(0)
  const [oWins, setOwins] = useState(0)

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "x" : "o";
    setState(copyState);
    setIsXturn(!isXturn);


   winningLogic(copyState) 
 
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

  const winningLogic = checkState =>{
    if (
      checkState[0] !== null &&
      checkState[0] === checkState[1] &&
      checkState[0] === checkState[2]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
      }else{
        setOwins(oWins +1)
      }
    }

    if (
      checkState[3] !== null &&
      checkState[3] === checkState[4] &&
      checkState[3] === checkState[5]
    ) {
      console.log(checkState[3], "wins");
    }
    if (
      checkState[6] !== null &&
      checkState[6] === checkState[7] &&
      checkState[6] === checkState[8]
    ) {
      console.log(checkState[6], "wins");
    }

    //   vertically
    if (
      checkState[0] !== null &&
      checkState[0] === checkState[3] &&
      checkState[0] === checkState[6]
    ) {
      console.log(checkState[0], "wins");
    } else if (
      checkState[1] !== null &&
      checkState[1] === checkState[4] &&
      checkState[1] === checkState[7]
    ) {
      console.log(checkState[1], "wins");
    } else if (
      checkState[2] !== null &&
      checkState[2] === checkState[5] &&
      checkState[2] === checkState[8]
    ) {
      console.log(checkState[2], "wins");
    }

    //   diagonal
    else if (
      checkState[0] !== null &&
      checkState[0] === checkState[4] &&
      checkState[0] === checkState[8]
    ) {
      console.log(checkState[0], "wins");
    } else if (
      checkState[2] !== null &&
      checkState[2] === checkState[4] &&
      checkState[2] === checkState[6]
    ) {
      console.log(checkState[0], "wins");
    } else {
      if (
        checkState[0] !== null &&
        checkState[1] !== null &&
        checkState[2] !== null &&
        checkState[3] !== null &&
        checkState[4] !== null &&
        checkState[5] !== null &&
        checkState[6] !== null &&
        checkState[7] !== null &&
        checkState[8] !== null
      ) {
        console.log("Restart");
      }
    }
  } 

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
      <User countX={xWins} countO={oWins} />
    </div>
  );
};
