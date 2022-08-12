class EventEmitter {
  constructor() {
    this._events = this._events || new Map();
    this._maxListeners = this._maxListeners || 10;
  }

  emit(type, ...args) {
    let handler;
    handler = this._events.get(type);
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        if (args.length > 0) {
          handler[i].apply(this, args);
        } else {
          handler[i].call(this);
        }
      }
    } else {
      if (args.length > 0) {
        handler.apply(this, args);
      } else {
        handler.call(this);
      }EventBus/EventEmitter.js
    }
    return true;
  }
  addListener(type, fn) {
    const handler = this._events.get(type);
    if (!handler) {
      this._events.set(type, fn);
    } else if (handler && typeof handler === 'function') {
      this._events.set(type, [handler, fn]);
    } else {
      handler.push(fn);
    }
  }
}

const emitter = new EventEmitter();

emitter.addListener('arson', man => {
  console.log(`expel ${man}`);
})
emitter.addListener('arson', man => {
  console.log(`111 ${man}`);
})
 emitter.addListener('arson', man => {
  console.log(`222 ${man}`);
})
emitter.emit('arson', [111,2222,333]);