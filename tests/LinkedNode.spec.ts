import LinkedNode from "../src/linked-node";

test("linked node", () => {
    const n1 = new LinkedNode(5);
    const n2 = new LinkedNode(3);
    n1.next = n2;
    expect(n1.next.value).toBe(3);
});
