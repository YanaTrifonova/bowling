export const CREATE_NEW_GAME = "CREATE_NEW_GAME";
export const RESET_ALL_GAMES = "RESET_ALL_GAMES";
export const UPDATE_SCORES = "UPDATE_SCORES"

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
