"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SinglyLinkedList_1 = require("../linked-lists/singly-linked-list/SinglyLinkedList");
class StackLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new SinglyLinkedList_1.Node(val);
        if (this.last !== null)
            this.last.next = newNode;
        if (this.last === null)
            this.last = this.first = newNode;
        this.last = newNode;
        return ++this.size;
    }
    pop() {
        if (this.first === null)
            return null;
        if (this.first === this.last)
            this.last = null;
        this.first = this.first.next;
        this.size--;
        return this.first;
    }
    peek() {
        return this.first;
    }
    isEmpty() {
        return !this.first;
    }
}
exports.default = StackLinkedList;
