import React from 'react';
import {useSelector} from "react-redux";
import {getAllGames} from "../../store/GameState/selector";
import Game from "../Game";

export default function Games() {
  const games = useSelector(getAllGames);

  return (
    <>
      {games.map((game, index) => {
        const gameNumber = games.length - index;
        return (
          <Game game={game} gameNumber={gameNumber} key={gameNumber}/>
        )
      })}
    </>
  )
}
