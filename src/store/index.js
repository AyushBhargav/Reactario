import { createStore } from "redux";
import { MOVE_PLAYER } from "../models/action-type";
import Player from "../models/Player";

const initialState = {
  player: new Player()
};

const reducer = (state = initialState, action) => {
  switch(action.getType()) {
    case MOVE_PLAYER:
      const newState = Object.assign({}, state);
      newState.player.x = action.getValue().x;
      newState.player.y = action.getValue().y;
      return newState;
    default:
  }
  return state;
};

const store = createStore(reducer);

export default store;