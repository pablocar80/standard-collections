import { PriorityQueue } from "../src/priority-queue";

test("simple priority queue", () => {
    const q = new PriorityQueue<number>();
    q.insert(50);
    q.insert(30);
    q.insert(40);
    expect(q.extract()).toBe(30);
    expect(q.extract()).toBe(40);
    expect(q.extract()).toBe(50);
    expect(q.size()).toBe(0);
    expect(q.isEmpty()).toBeTruthy();
});
