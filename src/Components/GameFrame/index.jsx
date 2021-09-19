import React, {useState} from 'react';
import {MenuItem, Select} from "@material-ui/core";
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import {initialSecondKickPossibleHit, kickPossibleHit} from "../../constants";

export default function GameFrame({
                                    playerName,
                                    gameNumber,
                                    frameIndex,
                                    hasThirdKick
                                  }) {
  const totalFrames = 2 + (hasThirdKick ? 1 : 0);
  const [secondKickPossibleHit, setSecondKickPossibleHit] = useState(initialSecondKickPossibleHit);
  const [kicks, setKicks] = useState(Array(totalFrames).fill(""));
  const [isDisabledAfterTwo, setIsDisabledAfterTwo] = useState(true);

  function onFirstKick(value, index) {
    const kicksUpdate = Array(totalFrames).fill("");
    kicksUpdate[index] = value;
    setKicks(kicksUpdate);

    let secondKickPossibleHit = []
    if (value !== "X") {
      secondKickPossibleHit = initialSecondKickPossibleHit.slice(0, 9 - value);
      secondKickPossibleHit.push("/")
      setIsDisabledAfterTwo(true);
    } else {
      setIsDisabledAfterTwo(false);
      if (hasThirdKick) {
        secondKickPossibleHit = kickPossibleHit;
      }
    }

    setSecondKickPossibleHit(secondKickPossibleHit);
  }

  function onSecondAndLaterKick(value, index) {
    if (value === "/" || value === "X") {
      setIsDisabledAfterTwo(false);
    } else {
      setIsDisabledAfterTwo(true);
    }
    const emptyElements = Array(totalFrames - index - 1).fill("");
    const kicksUpdate = kicks.slice(0, index);
    kicksUpdate[index] = value;
    setKicks([...kicksUpdate, ...emptyElements]);
  }

  function getSelectValue(index) {
    if (index !== 1) {
      return kickPossibleHit;
    }
    return secondKickPossibleHit;
  }


  return (
    <div style={{
      "borderRight": "1px solid grey",
      "borderTop": "1px solid grey",
      "borderBottom": "1px solid grey"
    }}>
      <div style={{"marginLeft": "20px"}}>
        {
          kicks.map((kickValue, index) => {
            return (<Select labelId={"demo-simple-select-label" + index}
                            key={playerName + "_" + gameNumber + "_" + frameIndex + "_" + index}
                            id={"demo-simple-select" + index} value={kickValue}
                            disabled={isDisabledAfterTwo && index > 1}
                            onChange={(event) => {
                              if (index === 0) {
                                return onFirstKick(event.target.value, index);
                              }
                              return onSecondAndLaterKick(event.target.value, index)
                            }}
                            defaultValue={"-"}>
              {getSelectValue(index).map((hit) => {
                return (<MenuItem value={hit} key={hit}>{hit}</MenuItem>)
              })}
            </Select>);
          })
        }
      </div>
      <div>
        <Typography variant="body1" align="center" mt={2} mb={1}>0</Typography>
      </div>
    </div>
  )
}

GameFrame.propTypes = {
  playerName: PropTypes.string,
  gameNumber: PropTypes.number,
  frameIndex: PropTypes.number,
  hasThirdKick: PropTypes.bool,
}
