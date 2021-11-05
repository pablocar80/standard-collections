import { PriorityQueue } from "../src/priority-queue";

test("simple priority queue", () => {
    const q = new PriorityQueue<number>();
    q.insert(10);
    q.insert(4);
    q.insert(8);
    expect(q.extract()).toBe(4);
    expect(q.extract()).toBe(8);
    expect(q.extract()).toBe(10);
    expect(q.size()).toBe(0);
    expect(q.isEmpty()).toBeTruthy();
});
