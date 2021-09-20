import {CREATE_NEW_GAME, DELETE_GAME, RESET_ALL_GAMES, UPDATE_SCORES} from "./actions";

export const initialState = {
  games: []
}

function makeCopyOfState(playerToUpdate, state, action) {
  const gameIndexToUpdate = action.payload.gameIndex - 1;
  const gameToUpdate = state.games[gameIndexToUpdate];
  const gameCopy = Object.keys(gameToUpdate).reduce((game, player) => ({
    ...game,
    [player]: gameToUpdate[player]
  }), {});
  const playerCopy = JSON.parse(JSON.stringify(gameCopy[playerToUpdate]));
  const frameToUpdate = playerCopy[action.payload.frameIndex];
  return {
    gameIndexToUpdate,
    gameCopy,
    playerCopy,
    frameToUpdate
  };
}

export function updateCurrentFrame(frameToUpdate, resultScore, actionScore) {
  frameToUpdate.scores += resultScore;

  if (actionScore === 10) {
    frameToUpdate.isStrike = true;
  }

  if (frameToUpdate.scores === 10 && !frameToUpdate.isStrike) {
    frameToUpdate.isSpare = true;
  }
}

export function enableNextFrame(frameToEnable, kickIndex, isStrike) {
  const secondKick = kickIndex === 1;
  if (frameToEnable && (secondKick || isStrike)) {
    frameToEnable.isDisabled = false;
  }
}

export function disablePreviousFrame(frameToDisable) {
  if (frameToDisable) {
    frameToDisable.isDisabled = true;
  }
}

export function updatePreviousTotalScores(previousFrame, previousPreviousFrame, kickIndex, resultScore) {
  const isPreviousSpare = previousFrame ? previousFrame.isSpare : false;
  const isPreviousStrike = previousFrame ? previousFrame.isStrike : false;
  const isPreviousPreviousStrike = previousPreviousFrame ? previousPreviousFrame.isStrike : false;
  const isFirstKick = kickIndex === 0;
  const isLastFrameKick = kickIndex === 2; // 10th frame, third kick

  if (previousFrame && isPreviousSpare && isFirstKick) {
    previousFrame.totalScores += resultScore;
  }
  if (previousFrame && isPreviousStrike && !isLastFrameKick) {
    previousFrame.totalScores += resultScore;
  }
  if (previousPreviousFrame && isPreviousStrike && isPreviousPreviousStrike && isFirstKick) {
    previousPreviousFrame.totalScores += resultScore;
    previousFrame.totalScores += resultScore;
  }
}

function createNewState(gameCopy, playerToUpdate, playerCopy, gameIndexToUpdate, state) {
  gameCopy[playerToUpdate] = playerCopy;
  const gamesCopy = [...state.games];
  gamesCopy[gameIndexToUpdate] = gameCopy

  return {
    ...state,
    games: gamesCopy
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_GAME : {
      const game = action.payload.reduce((a, v) => {
        const gameTable = []
        for (let i = 0; i < 10; i++) {
          gameTable.push({
            scores: 0,
            totalScores: 0,
            isStrike: false,
            isSpare: false,
            isDisabled: i !== 0,
          })
        }
        return ({
          ...a,
          [v]: gameTable
        })
      }, {});

      return {
        ...state,
        games: [game, ...state.games]
      }
    }

    case RESET_ALL_GAMES: {
      return initialState;
    }

    case DELETE_GAME: {
      return {
        ...state,
        games: [...state.games].filter((game, index) => index !== action.payload - 1)
      }
    }

    case UPDATE_SCORES: {
      const playerToUpdate = action.payload.playerName;
      const frameIndexToUpdate = action.payload.frameIndex;
      const resultScore = action.payload.score - action.payload.oldScores;
      const kickIndex = action.payload.kickIndex;

      const {
        gameIndexToUpdate,
        gameCopy,
        playerCopy,
        frameToUpdate
      } = makeCopyOfState(playerToUpdate, state, action);

      updateCurrentFrame(frameToUpdate, resultScore, action.payload.score);

      enableNextFrame(playerCopy[frameIndexToUpdate + 1], kickIndex,  frameToUpdate.isStrike);
      disablePreviousFrame(playerCopy[frameIndexToUpdate - 1]);

      updatePreviousTotalScores(playerCopy[frameIndexToUpdate - 1], playerCopy[frameIndexToUpdate - 2], kickIndex, resultScore);

      frameToUpdate.totalScores =
        frameToUpdate.scores + (frameIndexToUpdate === 0 ? 0 : playerCopy[frameIndexToUpdate - 1].totalScores);

      return createNewState(gameCopy, playerToUpdate, playerCopy, gameIndexToUpdate, state);
    }

    default:
      return state;
  }
}
