import { graphSearch, GraphSearchMethod } from "../src/graph-search";

interface GraphNode {
    id: number;
    neighbors: GraphNode[];
}

test("simple depth first search", () => {
    const nodes = generateNodes(3);
    nodes[0].neighbors.push(nodes[1]);
    nodes[1].neighbors.push(nodes[2]);
    nodes[2].neighbors.push(nodes[0]);
    nodes[2].neighbors.push(nodes[1]);
    const result = new Array<number>();
    const options = {
        initialNode: nodes[0],
        getNeighbors: (n: GraphNode) => n.neighbors,
        method: GraphSearchMethod.DepthFirst
    };
    for (const n of graphSearch(options)) {
        result.push(n.id);
    }
    expect(result).toStrictEqual([0, 1, 2]);
})

test("simple breadth first search", () => {
    const nodes = generateNodes(4);
    nodes[0].neighbors.push(nodes[1]);
    nodes[0].neighbors.push(nodes[2]);
    nodes[1].neighbors.push(nodes[3]);
    const result = new Array<number>();
    const options = {
        initialNode: nodes[0],
        getNeighbors: (n: GraphNode) => n.neighbors,
        method: GraphSearchMethod.BreadthFirst
    };
    for (const n of graphSearch(options)) {
        result.push(n.id);
    }
    expect(result).toStrictEqual([0, 1, 2, 3]);
});

function generateNodes(count: number): GraphNode[] {
    const list = new Array<GraphNode>();
    for (let index = 0; index < count; index++) {
        list.push({ id: index, neighbors: []});
    }
    return list;
}
