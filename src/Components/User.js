import React from "react";

export const User = ({countX, countO, users}) => {
  // console.log(users[0]);
  // console.log(users[1]);
  // console.log(users);

  // let player1 = users[0];
  // let player2 = users[1];

  const  players = []

  const addPlayers = player => {
    players.push(player)
  }

  users.forEach(element => {
      addPlayers(element.Name);
  });

  return (
    <div className="flex justify-around mt-6 text-xl w-[20rem]">
      {/* User1 */}
      <div>
        <div className="underline font-Belanosima">{players[0]} X</div>
        <div className="flex justify-center items-center">{countX}</div>
      </div>

      {/* User2 */}
      <div>
        <div className="underline font-Belanosima">{players[1]} O</div>
        <div className="flex justify-center items-center" >{countO}</div>
      </div>

    </div>
  );
};
