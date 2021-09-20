import {Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import GameTable from "../GameTable";
import {Stack} from "@mui/material";
import {useStyles} from "./styles";

export default function Game({
                               game,
                               gameNumber,
                               gameIndex,
                             }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Stack mt={4} pl={2}>
        <Paper className={classes.paperColor}>
          <Stack p={2}>
            <Typography variant="h4" component="div" gutterBottom>Game #{gameNumber}</Typography>
            {Object.keys(game).map((playerName) => {
              return (
                <GameTable gameTableInfo={game[playerName]} playerName={playerName} gameIndex={gameIndex}
                           key={playerName + "_" + gameIndex}/>
              )
            })}
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
