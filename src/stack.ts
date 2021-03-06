import { LinkedNode } from "./linked-node";

export class Stack<T> {
    private first?: LinkedNode<T>;

    constructor(initialValues?: ArrayLike<T> | Iterable<T>) {
        this.loadValues(initialValues);
    }

    private loadValues(initial?: ArrayLike<T> | Iterable<T>): void {
        if (!initial) return;
        for (const value of Array.from(initial)) {
            this.push(value);
        }
    }

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
