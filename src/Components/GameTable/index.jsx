import React from 'react';
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import GameFrame from "../GameFrame";

export default function GameTable({
                                    playerName,
                                    gameTableInfo,
                                    gameNumber
                                  }) {
  return (
    <div style={{
      "display": "flex",
      "flexDirection": "row",
      "width": "fit-content",
      "minHeight": "50px",
      "paddingBottom": "30px",
    }}>
      <div style={{
        "border": "1px solid grey",
        "height": "auto",
        "width": "150",
      }}>
        <Typography variant="body2" p={2} align="center" style={{"overflowWrap": "anywhere"}}>{playerName}</Typography>
      </div>
      {gameTableInfo.map((frame, index) => {
        return <GameFrame playerName={playerName} gameNumber={gameNumber} frameIndex={index} hasThirdKick={index === 10}
                          key={playerName + "_" + gameNumber + "_" + index}/>
      })}
    </div>
  )
}

GameTable.propTypes = {
  playerName: PropTypes.string,
  gameTableInfo: PropTypes.array,
  gameNumber: PropTypes.number
}
