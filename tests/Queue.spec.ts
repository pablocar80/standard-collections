import Queue from "../src/queue";

test("empty queue", () => {
    const q = new Queue<number>();
    expect(q.isEmpty()).toBeTruthy();
});

test("empty after dequeue", () => {
    const q = new Queue<number>();
    q.enqueue(3);
    q.enqueue(2);
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
});

test("fifo queue", () => {
    const q = new Queue<number>();
    q.enqueue(3);
    q.enqueue(2);
    const n1 = q.dequeue();
    const n2 = q.dequeue();
    expect(n1).toBe(3);
    expect(n2).toBe(2);    
});

test("enqueue after dequeue", () => {
    const q = new Queue<number>();
    q.enqueue(3);
    q.enqueue(4);
    const a = q.dequeue();
    q.enqueue(2);
    const b = q.dequeue();
    const c = q.dequeue();
    expect(a).toBe(3);
    expect(b).toBe(4);
    expect(c).toBe(2);
});

test("enqueue after empty", () => {
    const q = new Queue<number>();
    q.enqueue(5);
    q.dequeue();
    q.enqueue(3);
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
});
