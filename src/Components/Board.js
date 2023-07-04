import React, { useState, useEffect, useReducer } from "react";
import { Square } from "./Square";
import { User } from "./User";
import { ModalPop } from "./ModalPop";
import { UserForm } from "./UserFormModal";

export const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [xWins, setXwins] = useState(0);
  const [oWins, setOwins] = useState(0);
  const [whosTurn, setWhosTurn] = useState("");
  // Opening WinModal popup
  const [isOpen, setIsOpen] = useState(true);
  const [closeUserForm, setUserForm] = useState(false);
  // const [user, setUser] = useState("");

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "x" : "o";
    if(!isXturn){
      setWhosTurn(users[0].Name)
      // console.log(users); 
    }else{
      setWhosTurn(users[1].Name)
      // console.log(users);
    }
    setState(copyState);
    setIsXturn(!isXturn);

    winningLogic(copyState)
  };


  const onClick = () =>{
    setIsOpen(false)
  }




  
  const [users, setUsers] = useState([])
  const addUsers = (user) => {
    if (users.length < 2) {
       setUsers([...users, {Name: user}]) 
    }
    else {
      setUserForm(true)
      console.log("yess")  
    }
    const elem = [];
    const addPlayer = player => {
       elem.push(player)
    }
    users.forEach(element => {
    addPlayer(element.Name);
    });
    setWhosTurn(elem[0])
  }

 
  let initialResult = ""

  const reducer = (result, actions) => {
    switch(actions.type) {
      case 'WINNER': {
        console.log(actions.type)
        if(actions.who === "X"){
          return result = users[0].Name
        }
        else {
          return result = users[1].Name
        }
        // result = actions.who
      }
      case "RESTART":{
        return result = "Its A Tieeee"
      }
  }
  }

  const [ result , dispatch] = useReducer(reducer, initialResult)

  const winningLogic = checkState =>{
    if (
      checkState[0] !== null &&
      checkState[0] === checkState[1] &&
      checkState[0] === checkState[2]
    ) {
      if(checkState[0] === "x"){
        setXwins(xWins + 1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }

    if (
      checkState[3] !== null &&
      checkState[3] === checkState[4] &&
      checkState[3] === checkState[5]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }

    if (
      checkState[6] !== null &&
      checkState[6] === checkState[7] &&
      checkState[6] === checkState[8]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }

    //   vertically
    if (
      checkState[0] !== null &&
      checkState[0] === checkState[3] &&
      checkState[0] === checkState[6]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }
    else if (
      checkState[1] !== null &&
      checkState[1] === checkState[4] &&
      checkState[1] === checkState[7]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }
    else if (
      checkState[2] !== null &&
      checkState[2] === checkState[5] &&
      checkState[2] === checkState[8]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }

    //   diagonal
    else if (
      checkState[0] !== null &&
      checkState[0] === checkState[4] &&
      checkState[0] === checkState[8]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }
    else if (
      checkState[2] !== null &&
      checkState[2] === checkState[4] &&
      checkState[2] === checkState[6]
    ) {
      if(checkState[0] === "x"){
        setXwins( xWins +1)
        dispatch({type: "WINNER", who:"X"})
      }else{
        setOwins(oWins +1)
        dispatch({type: "WINNER", who:"O"})
      }
    }
    else {
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
        setState(Array(9).fill(null))
        setIsOpen(!isOpen) 
        dispatch({type: "RESTART"})
      }
    }
  } 


  useEffect(()=> {
    setIsOpen(!isOpen) 
    setState((Array(9).fill(null)))
  },  [xWins, oWins])

  useEffect(()=> {
  },[addUsers])

  return (
    <div className="flex flex-col justify-center items-center w-[20rem] mt-[10rem]">
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


      {/* who's Turn */}
       <div className="relative left-[17rem] -top-[19rem] text-2xl font-Belanosima">
         <p>who's Turn: {whosTurn}</p>
       </div>

      <User countX={xWins} users={users} countO={oWins}/>

      <ModalPop open={isOpen} onClick={onClick} currentState={result} />

      <UserForm addUsers={addUsers} closeUserForm={closeUserForm} />

      </div>
  );
};