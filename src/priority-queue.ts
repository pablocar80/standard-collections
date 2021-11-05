export type Comparator<T> = (a: T, b: T) => number;

export interface PriorityQueueOptions<T> {
    comparator?: Comparator<T>;
    initialValues?: T[];
}

export class PriorityQueue<T> {

    private comparator: Comparator<T>;
    private data: T[];

    constructor(options?: PriorityQueueOptions<T>) {
        this.comparator = options?.comparator || defaultComparator;
        this.data = options?.initialValues ? Array.from(options.initialValues) : [];
        this.heapify();
    }

    private heapify(): void {
        const len = this.data.length;
        for (let index = 0; index < len; index++) {
            this.bubbleUp(index);
        }
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = getParent(index);
            if (!this.isLower(index, parentIndex)) return;
            this.swap(index, parentIndex);
        }
    }

    private isLower(index1: number, index2: number): boolean {
        return this.comparator(this.data[index1], this.data[index2]) < 0;
    }

    private swap(index1: number, index2: number): void {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    private bubbleDown(index: number): void {
        const len = this.data.length;
        while (index < len) {
            const candidate = this.getDownCandidate(index);
            if (candidate === index) return;
            this.swap(index, candidate);
            index = candidate;
        }
    }
    
    private getDownCandidate(index: number): number {
        let minIndex = index;
        const [left, right] = getLeftRight(index);
        if (left < this.data.length && this.comparator(this.data[left], this.data[minIndex]) < 0) {
            minIndex = left;
        }
        if (right < this.data.length && this.comparator(this.data[right], this.data[minIndex]) < 0) {
            minIndex = right;
        }
        return minIndex;
    }

    insert(value: T): void {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }

    extract(): T {
        if (!this.data.length) {
            throw new Error("extract() on empty priority queue");
        }
        const value = this.data[0];
        if (this.data.length > 1) {
            const last = this.data[this.data.length - 1];
            this.data.pop();
            this.data[0] = last;
            this.bubbleDown(0);
        } else {
            this.data.pop();
        }
        return value;
    }

    isEmpty(): boolean {
        return !this.data.length;
    }

    size(): number {
        return this.data.length;
    }

    clear(): void {
        this.data = [];
    }
}

function defaultComparator<T>(a: T, b: T): number {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function getParent(index: number): number {
    return (index - 1) >>> 1;
}

function getLeftRight(index: number): [number, number] {
    const left = (index << 1) + 1;
    return [left, left + 1];
}
