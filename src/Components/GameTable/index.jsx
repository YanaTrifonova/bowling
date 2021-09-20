import React from 'react';
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import GameFrame from "../GameFrame";
import {useStyles} from "./styles";

export default function GameTable({
                                    playerName,
                                    gameTableInfo,
                                    gameIndex
                                  }) {
  const classes = useStyles();

  return (
    <div className={classes.gameTable}>
      <div className={classes.playerCell}>
        <Typography variant="body2" p={2} align="center" className={classes.playerCellText}>{playerName}</Typography>
      </div>
      {gameTableInfo.map((frame, index) => {
        return <GameFrame playerName={playerName} gameIndex={gameIndex} frameIndex={index} hasThirdKick={index === 9}
                          isDisabled={frame.isDisabled}
                          key={playerName + "_" + gameIndex + "_" + index}/>
      })}
    </div>
  )
}

GameTable.propTypes = {
  playerName: PropTypes.string,
  gameTableInfo: PropTypes.array,
  gameIndex: PropTypes.number
}
