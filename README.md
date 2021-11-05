# standard-collections
Standard collections in TypeScript / JavaScript

## Stack

A stack is a first-in last-out collection.
It implements `push`, `pop`, `peek`, `isEmpty`.

```typescript
import { Stack } from "standard-collections";

const stack = new Stack<string>();

stack.push("a");
stack.push("b");
stack.push("c");

console.log(stack.pop()); // "c"
console.log(stack.pop()); // "b"
console.log(stack.pop()); // "a"
```

## Queue

A queue is a first-in first-out collection.
It implements `enqueue`, `dequeue`, `peek`, `isEmpty`.

```typescript
import { Queue } from "standard-collections";

const q = new Queue<number>();

q.enqueue(6);
q.enqueue(1);
q.enqueue(3);

console.log(q.dequeue()); // 6
console.log(q.dequeue()); // 1
console.log(q.dequeue()); // 3
```

## Priority Queue

A priority queue is a queue that will always extract the highest priority value.
The constructor parameters are, optionally, an initial list of values and/or custom comparison function.

Example with standard comparison operators:

```typescript
import { PriorityQueue } from "standard-collections";

const p = new PriorityQueue<number>();

p.insert(10);
p.insert(4);
p.insert(8);

console.log(p.extract()); // 10
console.log(p.extract()); // 8
console.log(p.extract()); // 4
```

Example with custom comparison:

```typescript
import { PriorityQueue } from "standard-collections";

const bids = [
    { customer: "john", price: 11.5 },
    { customer: "elsa", price: 11.7 },
    { customer: "tom", price: 11.4 },
];

const q = new PriorityQueue({
    initialValues: bids,
    comparator: (a, b) => a.price - b.price,
});

console.log(q.extract().customer);  // elsa
console.log(q.extract().customer);  // john
console.log(q.extract().customer);  // tom
```
