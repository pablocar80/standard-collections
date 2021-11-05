export class LinkedNode<T> {
    value: T;
    next?: LinkedNode<T>;

    constructor(value: T) {
        this.value = value;
    }
}
