import LinkedNode from "./linked-node";

export default class Stack<T> {
    first?: LinkedNode<T>;

    isEmpty(): boolean {
        return !this.first;
    }

    push(value: T): void {
        const node = new LinkedNode(value);
        node.next = this.first;
        this.first = node;
    }

    peek(): T {
        if (!this.first) {
            throw new Error("Peek() on empty stack");
        }
        return this.first.value;
    }

    pop(): T {
        if (!this.first) {
            throw new Error("Pop() on empty stack");
        }
        const value = this.first.value;
        this.first = this.first.next;
        return value;
    }
}
