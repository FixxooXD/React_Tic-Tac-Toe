import React from "react";

export const User = ({countX, countO}) => {
  return (
    <div className="flex justify-around mt-6 text-xl w-[20rem]">
      {/* User1 */}
      <div>
        <div className="underline">User X</div>
        <div className="flex justify-center items-center">{countX}</div>
      </div>

      {/* User2 */}
      <div>
        <div className="underline">User O</div>
        <div className="flex justify-center items-center" >{countO}</div>
      </div>

    </div>
  );
};
