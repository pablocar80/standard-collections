# standard-collections
Standard collections in TypeScript / JavaScript

## Stack

A stack is a last-in first-out collection.
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

A priority queue will always extract the priority value that comes first.

Constructor parameters (optional): initial values, custom comparison function.

Supported operations: `insert`, `extract`, `peek`, `isEmpty`, `size`, `clear`.

Example with standard comparison operators:

```typescript
import { PriorityQueue } from "standard-collections";

const p = new PriorityQueue<number>();

p.insert(10);
p.insert(4);
p.insert(8);

console.log(p.extract()); // 4
console.log(p.extract()); // 8
console.log(p.extract()); // 10
```

Example with custom comparison:

```typescript
import { PriorityQueue } from "standard-collections";

interface Bid {
    customer: string;
    price: number;
}

const q = new PriorityQueue<Bid>({
    comparator: (a, b) => b.price - a.price,
});

q.insert({ customer: "john", price: 11.5 });
q.insert({ customer: "elsa", price: 11.7 });
q.insert({ customer: "tom", price: 11.4 });

console.log(q.extract().customer);  // elsa
console.log(q.extract().customer);  // john
console.log(q.extract().customer);  // tom
```
