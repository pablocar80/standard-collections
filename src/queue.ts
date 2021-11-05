import { LinkedNode } from "./linked-node";

export class Queue<T> {
    private first?: LinkedNode<T>;
    private last?: LinkedNode<T>;

    enqueue(value: T): void {
        const node = new LinkedNode(value);
        if (!this.last) {
            this.first = node;
            this.last = node;
            return;
        }
        this.last.next = node;
        this.last = node;
    }

    dequeue(): T {
        if (!this.first) {
            throw new Error("Dequeue() on empty queue");
        }
        const value = this.first.value;
        this.first = this.first.next;
        if (!this.first) {
            this.last = undefined;
        }
        return value;
    }

    isEmpty(): boolean {
        return !this.first;
    }

    peek(): T {
        if (!this.first) {
            throw new Error("Peek() on empty queue");
        }
        return this.first.value;
    }
}