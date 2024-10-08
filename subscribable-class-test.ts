import { Subscribable } from "./subscribable-class";

const sub = new Subscribable<string>();
const unsub = sub.subscribe(console.log);
sub.publish('Hello');
sub.publish('Goodbye');
unsub();
sub.publish('Something');
