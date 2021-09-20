import reducer, {
  disablePreviousFrame,
  enableNextFrame,
  updateCurrentFrame,
  updatePreviousTotalScores
} from "../../../src/store/GameState/reducer";
import {createNewGame, deleteGame, resetAllGames} from "../../../src/store/GameState/actions";

describe('gameState reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      games: []
    });
  });

  it('should create a new game with given players array', () => {
    const data = ["player1"];
    const resultState = {
      games: [
        {
          player1: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
        }
      ]
    };

    expect(reducer(
      undefined, createNewGame(data))).toEqual(resultState);
  });

  it('should return the initial state on reset all games', () => {
    expect(reducer(undefined, resetAllGames())).toEqual({
      games: []
    });
  });

  it('should delete game by given index', () => {
    const initialState = {
      games: [
        {
          player1: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
          player2: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
        },
        {
          player3: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
          player4: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
        },
        {
          player5: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
          player6: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
        },
      ]
    };

    const deleteGameIndex = 1;

    const resultAfterDeleteFirstGameState = {
      games: [
        {
          player3: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
          player4: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
        },
        {
          player5: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
          player6: [
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: false
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            },
            {
              scores: 0,
              totalScores: 0,
              isStrike: false,
              isSpare: false,
              isDisabled: true
            }
          ],
        },
      ]
    }

    expect(reducer(
      initialState, deleteGame(deleteGameIndex))).toEqual(resultAfterDeleteFirstGameState);
  });
})

describe('support methods in reducer: ', () => {
  it('updateCurrentFrame', () => {
    const frameToUpdate = {
      scores: 2,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: false,
    }

    const expectedFrame = {
      scores: 9,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: false,
    }

    updateCurrentFrame(frameToUpdate, 7, 7);
    expect(frameToUpdate).toEqual(expectedFrame);
  });

  it('updateCurrentFrame strike', () => {
    const frameToUpdate = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: false,
    }

    const expectedFrame = {
      scores: 10,
      totalScores: 0,
      isStrike: true,
      isSpare: false,
      isDisabled: false,
    }

    updateCurrentFrame(frameToUpdate, 10, 10);
    expect(frameToUpdate).toEqual(expectedFrame);
  });

  it('updateCurrentFrame spare', () => {
    const frameToUpdate = {
      scores: 4,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: false,
    }

    const expectedFrame = {
      scores: 10,
      totalScores: 0,
      isStrike: false,
      isSpare: true,
      isDisabled: false,
    }

    updateCurrentFrame(frameToUpdate, 6, 6);
    expect(frameToUpdate).toEqual(expectedFrame);
  });

  it('enableNextFrame next frame still disable', () => {
    const frameToUpdate = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: true,
    }

    const expectedFrame = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: true,
    }

    enableNextFrame(frameToUpdate, 0, false)
    expect(frameToUpdate).toEqual(expectedFrame);
  });

  it('enableNextFrame on strike', () => {
    const frameToUpdate = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: true,
    }

    const expectedFrame = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: false,
    }

    enableNextFrame(frameToUpdate, 0, true)
    expect(frameToUpdate).toEqual(expectedFrame);
  });

  it('enableNextFrame on second kick', () => {
    const frameToUpdate = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: true,
    }

    const expectedFrame = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: false,
    }

    enableNextFrame(frameToUpdate, 1, false)
    expect(frameToUpdate).toEqual(expectedFrame);
  });

  it('enableNextFrame undefined frame after the last one', () => {
    enableNextFrame(undefined, 0, true)
  });

  it('disableNextFrame', () => {
    const frameToUpdate = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: false,
    }

    const expectedFrame = {
      scores: 0,
      totalScores: 0,
      isStrike: false,
      isSpare: false,
      isDisabled: true,
    }

    disablePreviousFrame(frameToUpdate)

    expect(frameToUpdate).toEqual(expectedFrame);
  });

  it('disableNextFrame undefined frame before the first one', () => {
    disablePreviousFrame(undefined)
  });

  it('updatePreviousTotalScores if we are not on a first frame, previous frame has spare and this is our first kick', () => {
    const previousFrame = {
      scores: 10,
      totalScores: 10,
      isStrike: false,
      isSpare: true,
      isDisabled: true,
    }

    const previousPreviousFrame = previousFrame;

    const expectedFrame = {
      scores: 10,
      totalScores: 20,
      isStrike: false,
      isSpare: true,
      isDisabled: true,
    }

    updatePreviousTotalScores(previousFrame, previousPreviousFrame, 0, 10);

    expect(previousFrame).toEqual(expectedFrame);
  });

  it('updatePreviousTotalScores if we are not on a first frame, previous frame has a strike and this is this is not the last frame third kick', () => {
    const previousFrame = {
      scores: 10,
      totalScores: 10,
      isStrike: true,
      isSpare: false,
      isDisabled: true,
    }

    const previousPreviousFrame = previousFrame;

    const expectedFrame = {
      scores: 10,
      totalScores: 14,
      isStrike: true,
      isSpare: false,
      isDisabled: true,
    }

    updatePreviousTotalScores(previousFrame, previousPreviousFrame, 1, 4);

    expect(previousFrame).toEqual(expectedFrame);
  });

  it('updatePreviousTotalScores if we are not on a first or second frame, we had to strikes in a row and this is our first kick', () => {
    const previousPreviousFrame = {
      scores: 10,
      totalScores: 20,
      isStrike: true,
      isSpare: false,
      isDisabled: true,
    };

    const previousFrame = {
      scores: 10,
      totalScores: 30,
      isStrike: true,
      isSpare: false,
      isDisabled: true,
    }

    const expectedFrame = {
      scores: 10,
      totalScores: 50,
      isStrike: true,
      isSpare: false,
      isDisabled: true,
    }

    updatePreviousTotalScores(previousFrame, previousPreviousFrame, 0, 10);
    expect(previousFrame).toEqual(expectedFrame);
  });
})