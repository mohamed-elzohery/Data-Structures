"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SinglyLinkedList_1 = require("../linked-lists/singly-linked-list/SinglyLinkedList");
class QueueLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new SinglyLinkedList_1.Node(val);
        if (this.rear !== null)
            this.rear.next = newNode;
        if (this.rear === null)
            this.front = newNode;
        this.rear = newNode;
        this.rear = newNode;
        return ++this.size;
    }
    dequeue() {
        if (this.front === null)
            return null;
        if (this.front === this.rear)
            this.rear = null;
        const temp = this.front;
        this.front = this.front.next;
        this.size--;
        return temp.val;
    }
    peek() {
        return this.front ? this.front.val : null;
    }
    isEmpty() {
        return !this.front;
    }
}
const newQueue = new QueueLinkedList();
newQueue.enqueue("ahmed");
newQueue.enqueue("hossam");
newQueue.enqueue("mido");
newQueue.dequeue();
console.log(newQueue);
exports.default = QueueLinkedList;
