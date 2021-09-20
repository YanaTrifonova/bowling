import React, {useState} from 'react';
import {MenuItem, Select} from "@material-ui/core";
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {updateScores} from "../../store/GameState/actions";
import {getFrameScore} from "../../store/GameState/selector";

export default function GameFrame({
                                    playerName,
                                    gameIndex,
                                    frameIndex,
                                    hasThirdKick,
                                    isDisabled,
                                  }) {
  const initialSecondKickPossibleHit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "/"];
  const kickPossibleHit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "X"];
  const totalFrames = 2 + (hasThirdKick ? 1 : 0);
  const [secondKickPossibleHit, setSecondKickPossibleHit] = useState(initialSecondKickPossibleHit);
  const [kicks, setKicks] = useState(Array(totalFrames).fill(""));
  const [isDisabledAfterTwo, setIsDisabledAfterTwo] = useState(true);
  const [spareValue, setSpareValue] = useState(10);
  const totalFrameScore = useSelector(getFrameScore(gameIndex, playerName, frameIndex));
  const dispatch = useDispatch();

  function toNumericScore(value) {
    if (value === "X") {
      return 10;
    }
    if (value === "/") {
      return spareValue;
    }
    if (value === undefined) {
      return 0;
    }
    return value;
  }

  function sumOldScores(index) {
    return kicks.filter((val, ind, arr) => ind >= index)
                .map((val, ind, arr) => toNumericScore(val))
                .reduce((acc, val) => acc + val, 0);
  }

  function onFirstKick(value, index) {
    const kicksUpdate = Array(totalFrames).fill("");
    const oldScores = sumOldScores(index);
    const numericScore = toNumericScore(value);
    kicksUpdate[index] = value;
    setKicks(kicksUpdate);

    let secondKickPossibleHit = []
    if (value !== "X") {
      secondKickPossibleHit = initialSecondKickPossibleHit.slice(0, 10 - value);
      const updateSpareValue = secondKickPossibleHit[secondKickPossibleHit.length - 1];
      if (updateSpareValue !== "/") {
        setSpareValue(updateSpareValue);
      }
      secondKickPossibleHit[secondKickPossibleHit.length - 1] = "/";
      setIsDisabledAfterTwo(true);
    } else {
      setIsDisabledAfterTwo(false);
      if (hasThirdKick) {
        secondKickPossibleHit = kickPossibleHit;
      }
    }
    setSecondKickPossibleHit(secondKickPossibleHit);
    dispatch(updateScores(numericScore, oldScores, gameIndex, playerName, frameIndex, index));
  }

  function onSecondAndThirdKick(value, index) {
    if (value === "/" || value === "X") {
      setIsDisabledAfterTwo(false);
    } else if (index !== 2) {
      setIsDisabledAfterTwo(true);
    }
    const emptyElements = Array(totalFrames - index - 1).fill("");
    const kicksUpdate = kicks.slice(0, index);
    const oldScores = sumOldScores(index);
    const numericScore = toNumericScore(value);
    kicksUpdate[index] = value;
    setKicks([...kicksUpdate, ...emptyElements]);
    dispatch(updateScores(numericScore, oldScores, gameIndex, playerName, frameIndex, index));
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
        {kicks.map((kickValue, index) => {
          return (
            <Select labelId={"demo-simple-select-label" + index}
                    key={playerName + "_" + gameIndex + "_" + frameIndex + "_" + index}
                    id={"demo-simple-select" + index} value={kickValue}
                    disabled={isDisabledAfterTwo && index > 1 || isDisabled}
                    onChange={(event) => {
                      if (index === 0) {
                        return onFirstKick(event.target.value, index);
                      }
                      return onSecondAndThirdKick(event.target.value, index);
                    }}
                    defaultValue={"-"}>
              {getSelectValue(index).map((hit) => {
                return (<MenuItem value={hit} key={hit}>{hit}</MenuItem>)
              })}
            </Select>
          );
        })}
      </div>
      <div>
        <Typography variant="body1" align="center" mt={2} mb={1} >{totalFrameScore}</Typography>
      </div>
    </div>
  )
}

GameFrame.propTypes = {
  playerName: PropTypes.string,
  gameIndex: PropTypes.number,
  frameIndex: PropTypes.number,
  hasThirdKick: PropTypes.bool,
  isDisabled: PropTypes.bool,
}
