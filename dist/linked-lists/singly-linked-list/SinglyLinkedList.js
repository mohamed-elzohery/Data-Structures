"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
exports.Node = Node;
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    ;
    push(val) {
        const newNode = new Node(val);
        this.length++;
        if (this.tail !== null) {
            this.tail.next = newNode;
            this.tail = this.tail.next;
            return;
        }
        this.tail = newNode;
        this.head = this.tail;
        return this;
    }
    pop() {
        if (this.head === null)
            return;
        this.length--;
        let currentNode = this.head;
        let pre = currentNode;
        while (currentNode.next !== null) {
            pre = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = pre;
        this.tail.next = null;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if (this.head === null)
            return;
        const head = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return head;
    }
    getLength() {
        return this.length;
    }
    get(index) {
        if (index >= this.length || index < 0)
            return -1;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(val, index) {
        const node = this.get(index);
        if (node === -1)
            return false;
        node.val = val;
        return true;
    }
    insert(val, index) {
        if (this.length < index || index < 0)
            return false;
        if (index === 0)
            this.unshift(val);
        else if (this.length === index)
            this.push(val);
        else {
            const newNode = new Node(val);
            const prevNode = this.get(index - 1);
            const nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (this.length <= index || index < 0)
            return;
        if (index === 0)
            return this.shift();
        if (this.length - 1 === index)
            return this.pop();
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = nextNode === null || nextNode === void 0 ? void 0 : nextNode.next;
        this.length--;
        return nextNode;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node === null || node === void 0 ? void 0 : node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    getTail() {
        return this.tail;
    }
    getHead() {
        return this.head;
    }
}
exports.default = SinglyLinkedList;
