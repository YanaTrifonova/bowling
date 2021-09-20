export const CREATE_NEW_GAME = "CREATE_NEW_GAME";
export const RESET_ALL_GAMES = "RESET_ALL_GAMES";
export const DELETE_GAME = "DELETE_GAME";
export const UPDATE_SCORES = "UPDATE_SCORES";

export function createNewGame(data) {
  return {
    type: CREATE_NEW_GAME,
    payload: data,
  }
}

export function resetAllGames() {
  return {
    type: RESET_ALL_GAMES,
    payload: null,
  }
}

export function deleteGame(gameIndex) {
  return {
    type: DELETE_GAME,
    payload: gameIndex,
  }
}

export function updateScores(score, oldScores, gameIndex, playerName, frameIndex, kickIndex) {
  return {
    type: UPDATE_SCORES,
    payload: {
      score: score,
      oldScores: oldScores,
      gameIndex: gameIndex,
      playerName: playerName,
      frameIndex: frameIndex,
      kickIndex: kickIndex,
    }
  }
}
