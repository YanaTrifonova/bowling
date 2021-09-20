import {Button, Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import GameTable from "../GameTable";
import {Stack} from "@mui/material";
import {useStyles} from "./styles";
import {useDispatch} from "react-redux";
import {deleteGame} from "../../store/GameState/actions";

export default function Game({
                               game,
                               gameNumber,
                               gameIndex,
                             }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function deleteGameClicked(gameIndex) {
    dispatch(deleteGame(gameIndex));
  }

  return (
    <Grid container>
      <Stack mt={4} pl={2}>
        <Paper className={classes.paperColor} elevation={3}>
          <Stack p={2}>
            <Typography variant="h4" component="div" gutterBottom>Game #{gameNumber}</Typography>
            {Object.keys(game).map((playerName) => {
              return (
                <GameTable gameTableInfo={game[playerName]} playerName={playerName} gameIndex={gameIndex}
                           key={playerName + "_" + gameIndex}/>
              )
            })}
          </Stack>
          <Stack pb={2} pr={2} direction="row-reverse">
            <Button color="secondary" variant="outlined" onClick={() => deleteGameClicked(gameIndex)}>Delete Game</Button>
          </Stack>
        </Paper>
      </Stack>
    </Grid>
  )
}

Game.propTypes = {
  game: PropTypes.object,
  gameNumber: PropTypes.number,
  gameIndex: PropTypes.number,
}
