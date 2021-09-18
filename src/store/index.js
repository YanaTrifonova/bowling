import { createStore } from "redux";
import gameState from "./GameState/reducer";

const store = createStore(
  gameState,
);

export default store;