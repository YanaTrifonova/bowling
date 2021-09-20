import React, {useState} from "react";
import Players from "../Players";
import Games from "../Games";
import {useDispatch} from "react-redux";
import {createNewGame} from "../../store/GameState/actions";

export default function Main() {
  const [createdPlayers, setCreatedPlayers] = useState([]);
  const dispatch = useDispatch();

  function handleNewGame(players) {
    setCreatedPlayers(players);
    dispatch(createNewGame(players));
  }

  return (
    <>
      <Players handleNewGame={handleNewGame}/>
      {createdPlayers.length > 0 && (<Games/>)}
    </>
  );
}
