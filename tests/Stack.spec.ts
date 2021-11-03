import Stack from "../src/stack";

test("simple stack", () => {
    const s = new Stack<number>();
    s.push(3);
    s.push(1);
    const n1 = s.pop();
    const n2a = s.peek();
    const n2b = s.pop();
    expect(n1).toBe(1);
    expect(n2a).toBe(3);
    expect(n2b).toBe(3);
});
