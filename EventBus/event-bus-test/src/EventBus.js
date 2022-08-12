class EventBus {
  constructor() {
    this.busMap = this.busMap || new Map();
  }
  
  // 发送事件
  $emit(type, ...args) {
    const handler = this.busMap.get(type);
    if(Array.isArray(handler)) {
      for(let i = 0; i<handler.length;i++) {
        if(args.length>0) {
          handler[i].apply(this, args);
        } else {
          handler[i].call(this);
        }
      }
    } else {
    }
  }
  
  $on(type, fn) {
    const handler = this.busMap.get(type);
    if(!handler) {
      this.busMap.set(type, [fn]);
    } else {
      handler.push(fn);
    }
  }
}

const EVENTBUS = new EventBus();

export default EVENTBUS;
