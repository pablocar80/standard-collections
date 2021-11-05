import { PriorityQueue } from "../src/priority-queue";

test("simple priority queue", () => {
    const q = new PriorityQueue<number>();
    q.insert(5);
    q.insert(3);
    q.insert(4);
    expect(q.extract()).toBe(5);
    expect(q.extract()).toBe(4);
    expect(q.extract()).toBe(3);
    expect(q.size()).toBe(0);
    expect(q.isEmpty()).toBeTruthy();
});
