export class Subscribable<MessageType> {
    private subscribers: Set<(mesg: MessageType) => void > = new Set();

    constructor() {}

    subscribe(cb: () => void) {
        this.subscribers.add(cb);
        return () => {
            this.subscribers.delete(cb);
        }
    }

    publish(msg: MessageType): void {
        this.subscribers.forEach((cb) => cb(msg))
    }
}