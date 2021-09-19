import {CREATE_NEW_GAME} from "./actions";

const initialState = {
  games: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_GAME : {
      const game = action.payload.reduce((a,v) => ({...a, [v] : Array(11).fill({
          scores: null,
          isStrike: false,
          isSpare: false,
          addScoresTo: [],
        }, 1)}), {})

      return {...state, games : [ game, ...state.games]}
    }

    default:
      return state;
  }
}
