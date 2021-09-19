export const CREATE_NEW_GAME = "CREATE_NEW_GAME";
export const UPDATE_SCORE = "UPDATE_SCORE";
export function createNewGame (data) {
  return {
    type: CREATE_NEW_GAME,
    payload: data,
  }
}
