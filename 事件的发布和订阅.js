class EventEmitter {
    handler = {}

    on(type, handler, once = false) {
        if (!this.handler[type]){
            this.handler[type] = [];
        }

        if (!this.handler[type].includes(handler)) {
            this.handler[type].push(handler);
            handler.once = once
        }
    }
}