import React, {useState} from 'react';
import {
  Button,
  ButtonGroup,
  FormHelperText,
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
import {useDispatch} from "react-redux";
import {resetAllGames} from "../../store/GameState/actions";

export default function Players({handleNewGame}) {
  const [name, setName] = useState("")
  const [players, setPlayers] = useState(["default"]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  function addPlayer(event, newPlayer) {
    event.preventDefault();
    if (players.indexOf(newPlayer) === -1) {
      setPlayers((players) => [...players, newPlayer]);
      setError(false);
      setName("");
    } else {
      setError(true);
    }
  }

  function startNewGameClicked() {
    handleNewGame(players);
  }

  function resetAllGamesClicked() {
    dispatch(resetAllGames());
  }

  return (
    <>
      <form onSubmit={(event) => addPlayer(event, name)}>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <TextField id="name-input" aria-describedby="name-input-text" error={error} value={name}
                   variant="outlined" size="small"
                   onChange={(event) => setName(event.target.value)}/>
        <FormHelperText id="my-helper-text">{error
                                             ? 'Player with this name already exist'
                                             : 'Please enter name of the player.'}</FormHelperText>

        <Button type="submit" disabled={name.length === 0} size="small" variant="outlined">Add a player</Button>
      </form>
      {players.length > 0 && (
        <TableContainer >
          <Table size="small" aria-label="a table with all players">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Name</TableCell>
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
                  <TableCell align="center">{player}</TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center"><Button>delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {players.length > 0 && (
        <ButtonGroup>
          <Button onClick={startNewGameClicked}>Start a new game</Button>
          <Button onClick={resetAllGamesClicked}>Reset all games</Button>
        </ButtonGroup>
      )}
    </>
  );
}

Players.propTypes = {
  handleNewGame: PropTypes.func,
}