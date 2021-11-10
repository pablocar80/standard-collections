import { PriorityQueue } from "../src/priority-queue";

test("simple priority queue", () => {
    const before = [5, 1, 8, 9, 11, 9, 11, 3, 4, 5, 6];
    const expected = Array.from(before);
    expected.sort((a, b) => a- b);
    const q = new PriorityQueue<number>();
    before.forEach((x) => q.insert(x));
    const result = new Array<number>();
    while (!q.isEmpty()) {
        result.push(q.extract());
    }
    expect(result).toStrictEqual(expected);
});
