export default class Data {
  static instance = null;
  _state = {};
  static get inst() {
    if (Data.instance == null) {
      Data.instance = new Data();
    }
    return this.instance;
  }
  static get state() {
    return Data.inst._state;
  }
  static set state(state) {
    Data.inst._state = state;
  }
  static setState(state) {
    Data.inst._state = { ...Data.inst._state, ...state };
  }
}
