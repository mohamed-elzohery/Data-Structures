import { Node } from "../linked-lists/singly-linked-list/SinglyLinkedList";

class StackLinkedList<T> {
    first: Node<T> | null;
    last: Node<T> | null;
    size: number;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val: T): number{
        const newNode = new Node(val);
        if(this.last !== null) this.last.next = newNode;
        if(this.last === null) this.last = this.first = newNode;
        this.last = newNode;
        return ++this.size;
    }

    pop(): Node<T> | null {
        if(this.first === null) return null;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return this.first;
    }

    peek(): Node<T> | null {
        return this.first;
    }

    isEmpty(): boolean {
        return !this.first;
    }
}


export default StackLinkedList;