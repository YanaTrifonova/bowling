import {Paper, Typography} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import GameTable from "../GameTable";

export default function Game({
                               game,
                               gameNumber
                             }) {
  return (
    <Paper>
      <Typography variant="h4" component="div" gutterBottom>Game #{gameNumber}</Typography>
      {Object.keys(game).map((playerName) => {
        return (
          <GameTable gameTableInfo={game[playerName]} playerName={playerName} gameNumber={gameNumber}
                     key={playerName + "_" + gameNumber}/>
        )
      })}
    </Paper>
  )
}

Game.propTypes = {
  game: PropTypes.object,
  gameNumber: PropTypes.number,
}
