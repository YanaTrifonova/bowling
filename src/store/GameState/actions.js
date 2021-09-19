export const CREATE_NEW_GAME = "CREATE_NEW_GAME";
export const RESET_ALL_GAMES = "RESET_ALL_GAMES";

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
