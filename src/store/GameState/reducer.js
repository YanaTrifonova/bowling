import {CREATE_NEW_GAME} from "./actions";

const initialState = {
  games: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_GAME : {
      const game = action.payload.map((player) => {
        return (
          {
            [player]: Array(10).fill({
              score: [],
              isStrike: false,
              isSpare: false,
              addScoreTo: []
            }, 1)
          }
        )
      });

      return {...state, games : [{game: game}, ...state.games]}
    }

    default:
      return state;
  }
}