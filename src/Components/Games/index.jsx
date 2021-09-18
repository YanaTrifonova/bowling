import React from 'react';
import PropTypes from "prop-types";
import {Paper, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getAllGames} from "../../store/GameState/selector";

export default function Games({players}) {
  console.log('PLAYERS', players);
  const games = useSelector(getAllGames);
  console.log("GAMES", games);

  return (
    <Paper>
      <Typography variant="h4" component="div" gutterBottom>Game</Typography>
    </Paper>
  );
}

Games.propTypes = {
 players: PropTypes.array,
}