import {CREATE_NEW_GAME, RESET_ALL_GAMES} from "./actions";

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

    case RESET_ALL_GAMES: {
      return initialState;
    }

    default:
      return state;
  }
}
