//Stack
// Stacks are LIFO
// Uses = Function call/return, E.G. executing functions creates it's stack frame and pushes the SF onto the stack
// Storing variable data
// Undo/Redo - Pop the last action from the stack and so-on
// Browser History - As above
// (DFS) - Deapth First Search algorithms, keeping track of the visited nodes and the current

// COMMON METHODS:
// pop - remove the top element and return it
// push - push a new element into the top of the stack
// peek - look at the top element but don't remove it
// size - the size of the stack
// isEmpty - is the stack empty?

class Stack {

    constructor() {
        this.node = null;
        this.stackSize = 0;
    }

    size() {
        return this.stackSize;
    }

    pop() {}

    push(value) {}

    peek() {}

    isEmpty() {
        return this.node === null;
    }
}

class Node {
}

let stack = new Stack();
console.log(stack.size());
console.log(stack.isEmpty());
