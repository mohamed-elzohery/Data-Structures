"use strict";
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
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
    getTail() {
        return this.tail;
    }
    getHead() {
        return this.head;
    }
}
// Test
const namesLinkedlist = new SinglyLinkedList();
console.log(namesLinkedlist.getLength());
console.log(namesLinkedlist.getTail());
namesLinkedlist.push("ahmed");
// console.log(namesLinkedlist.getLength());
console.log(namesLinkedlist.getHead());
console.log(namesLinkedlist.getTail());
namesLinkedlist.push("Omar");
console.log("linked list");
console.log(namesLinkedlist);
// console.log(namesLinkedlist.getLength());
// console.log(namesLinkedlist.getHead());
console.log(namesLinkedlist.pop());
// console.log("linked list");
// console.log(namesLinkedlist);
// console.log(namesLinkedlist.pop());
// console.log("linked list");
// console.log(namesLinkedlist);
console.log(namesLinkedlist.get(0));
console.log(namesLinkedlist.get(13));
// console.log(namesLinkedlist.getHead());
// console.log(namesLinkedlist.pop());
// console.log(namesLinkedlist.getHead());
