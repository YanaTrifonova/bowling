export const CREATE_NEW_GAME = "CREATE_NEW_GAME";

export function createNewGame (data) {
  return {
    type: CREATE_NEW_GAME,
    payload: data,
  }
}