
export default class Dispatcher {
    constructor() {
        this._lastID = 0;
        this._callbacks = {};
    }

    register(callback) {
        let id = 'CID_' + this._lastID++;
        this._callbacks[id] = callback;
        return id;
    }

    dispatch(action) {
        for (var id in this._callbacks) {
            this._callbacks[id](action);
        }
    }

    waitFor(ids) {
        //TODO
    }
}