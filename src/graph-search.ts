import { Queue } from "./queue";

export enum GraphSearchMethod {
    DepthFirst,
    BreadthFirst
}

export type NeighborFunction<T> = (value: T) => (ArrayLike<T> | Iterable<T>);

export interface SearchOptions<T> {
    initialNode: T;
    getNeighbors: NeighborFunction<T>;
    method: GraphSearchMethod;
}

export function* graphSearch<T>(options: SearchOptions<T>): Iterable<T> {
    const { initialNode, getNeighbors, method } = options;
    if (method === GraphSearchMethod.DepthFirst) {
        yield* dfs(initialNode, getNeighbors, new Set<T>());
    } else if (method === GraphSearchMethod.BreadthFirst) {
        yield* bfs(initialNode, getNeighbors);
    }
}

function* dfs<T>(root: T, getNext: NeighborFunction<T>, visited: Set<T>): Iterable<T> {
    yield root;
    visited.add(root);
    const neighbors = Array.from(getNext(root));
    for (const next of neighbors) {
        if (visited.has(next)) continue;
        yield* dfs(next, getNext, visited);
    }
}

function* bfs<T>(root: T, getNext: NeighborFunction<T>): Iterable<T> {
    const q = new Queue<T>();
    const marked = new Set([root]);
    q.enqueue(root);
    while (!q.isEmpty()) {
        const node = q.dequeue();
        yield node;
        const neighbors = Array.from(getNext(node));
        for (const next of neighbors) {
            if (marked.has(next)) continue;
            marked.add(next);
            q.enqueue(next);
        }
    }
}
