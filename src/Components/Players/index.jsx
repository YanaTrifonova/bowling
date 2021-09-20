import React, {useState} from 'react';
import {
  Button,
  ButtonGroup,
  FormHelperText,
  Grid,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {resetAllGames} from "../../store/GameState/actions";
import {Stack} from "@mui/material";
import {useStyles} from "./styles";
import {getTotalScoreAcrossGames, getWonGames} from "../../store/GameState/selector";

export default function Players({handleNewGame}) {
  const [name, setName] = useState("")
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  const totalScore = useSelector(getTotalScoreAcrossGames(players));
  const wonGames = useSelector(getWonGames(players));
  
  const dispatch = useDispatch();
  const classes = useStyles();

  function addPlayer(event, newPlayer) {
    event.preventDefault();

    if (newPlayer.trim().length > 30) {
      setError("Name of the player too long");
    } else {
      if (players.indexOf(newPlayer) === -1 && newPlayer.trim().length > 0) {
        setPlayers((players) => [...players, newPlayer]);
        setError("");
        setName("");
      } else {
        setError("Player with this name already exist");
      }
    }
  }

  function startNewGameClicked() {
    handleNewGame(players);
  }

  function resetAllGamesClicked() {
    dispatch(resetAllGames());
  }

  function onPlayerDelete(player) {
    const index = players.indexOf(player);

    if (index !== -1) {
      const newPlayers = [...players];
      newPlayers.splice(index, 1);
      setPlayers(newPlayers);
    }
  }

  return (
    <Grid container>
      <Stack mt={6} pl={2}>
        <form onSubmit={(event) => addPlayer(event, name)}>
          <InputLabel htmlFor="name-input">Name</InputLabel>
          <TextField id="name-input" aria-describedby="name-input-text" error={!!error} value={name}
                     variant="outlined" size="small"
                     onChange={(event) => setName(event.target.value)}/>
          <FormHelperText id="name-input-helper-text">{error === ""
                                                       ? "Please enter name of the player"
                                                       : error}</FormHelperText>

          <Button type="submit" disabled={name.length === 0} size="small" variant="outlined"
                  className={classes.addPlayerButton}>Add a player</Button>
        </form>
        {players.length > 0 && (
          <Stack mt={4}>
            <TableContainer>
              <Table size="small" aria-label="a table with all players">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="left" className={classes.playerNameCell}>Name</TableCell>
                    <TableCell align="center">Won Games</TableCell>
                    <TableCell align="center">Total Score</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {players.map((player, index) => (
                    <TableRow
                      key={player}
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{player}</TableCell>
                      <TableCell align="center">{wonGames[player]}</TableCell>
                      <TableCell align="center">{totalScore[player]}</TableCell>
                      <TableCell align="center">
                        <Button onClick={() => onPlayerDelete(player)} color="secondary"
                                variant="outlined">Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        )}
        {players.length > 0 && (
          <Stack mt={4}>
            <ButtonGroup>
              <Button onClick={startNewGameClicked} color="default">Start a new game</Button>
              <Button onClick={resetAllGamesClicked} color="secondary">Reset all games</Button>
            </ButtonGroup>
          </Stack>
        )}
      </Stack>
    </Grid>
  );
}

Players.propTypes = {
  handleNewGame: PropTypes.func,
}