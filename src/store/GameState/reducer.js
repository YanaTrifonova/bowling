import {CREATE_NEW_GAME, DELETE_GAME, RESET_ALL_GAMES, UPDATE_SCORES} from "./actions";

const initialState = {
  games: []
}

export default function (state = initialState, action) {
  function createNewState(gameCopy, playerToUpdate, playerCopy, gameIndexToUpdate) {
    gameCopy[playerToUpdate] = playerCopy;
    const gamesCopy = [...state.games];
    gamesCopy[gameIndexToUpdate] = gameCopy
    return {
      ...state,
      games: gamesCopy
    };
  }

  function makeCopyOfState(playerToUpdate) {
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
      } = makeCopyOfState(playerToUpdate);

      if (kickIndex === 1 && frameIndexToUpdate !== playerCopy.length || action.payload.score === 10) {
        if (playerCopy[frameIndexToUpdate + 1]) {
          playerCopy[frameIndexToUpdate + 1].isDisabled = false;
        }
      }
      if (frameIndexToUpdate > 0) {
        playerCopy[frameIndexToUpdate - 1].isDisabled = true;
      }


      frameToUpdate.scores += resultScore;

      if (action.payload.score === 10) {
        frameToUpdate.isStrike = true;
      }
      if (frameToUpdate.scores === 10 && frameToUpdate.isStrike === false) {
        frameToUpdate.isSpare = true;
      }

      if (frameIndexToUpdate !== 0 && playerCopy[frameIndexToUpdate - 1].isSpare && kickIndex === 0) {
        playerCopy[frameIndexToUpdate - 1].totalScores += resultScore;
      }
      if (frameIndexToUpdate !== 0 && playerCopy[frameIndexToUpdate - 1].isStrike && kickIndex !== 2) {
        playerCopy[frameIndexToUpdate - 1].totalScores += resultScore;
      }
      if (frameIndexToUpdate >= 2 && playerCopy[frameIndexToUpdate - 1].isStrike && playerCopy[frameIndexToUpdate
                                                                                               - 2].isStrike
          && kickIndex === 0) {
        playerCopy[frameIndexToUpdate - 2].totalScores += resultScore;
        playerCopy[frameIndexToUpdate - 1].totalScores += resultScore;
      }

      frameToUpdate.totalScores =
        frameToUpdate.scores + (frameIndexToUpdate === 0 ? 0 : playerCopy[frameIndexToUpdate - 1].totalScores);

      return createNewState(gameCopy, playerToUpdate, playerCopy, gameIndexToUpdate);
    }

    default:
      return state;
  }
}
