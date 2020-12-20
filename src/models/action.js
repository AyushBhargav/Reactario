import { MOVE_PLAYER } from "./action-type";


class Action {
  constructor(type, val) {
    this.action = {type: type, val: val};
  }

  getAction() {
    return this.action;
  }

  getType() {
    return this.action.type;
  }

  getValue() {
    return this.action.val;
  }
}

export class MovePlayer extends Action{
  constructor(x, y){
    super(MOVE_PLAYER, {x: x, y: y});
  } 
}