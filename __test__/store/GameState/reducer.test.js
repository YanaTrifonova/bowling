import reducer from "../../../src/store/GameState/reducer";
import initialState from "../../../src/store/GameState/reducer";

describe('gameState reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
})