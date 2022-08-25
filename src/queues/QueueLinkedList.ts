import { Node } from "../linked-lists/singly-linked-list/SinglyLinkedList";


class QueueLinkedList<T>{
    front: Node<T> | null;
    rear: Node<T> | null;
    size: number;

    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(val: T): number{
        const newNode = new Node<T>(val);
        if(this.rear !== null) this.rear.next = newNode;
        if(this.rear === null) this.front = newNode;
        this.rear = newNode;
        this.rear = newNode;
        return ++this.size;
    }

    dequeue(): T | null{
        if(this.front === null) return null;
        if(this.front === this.rear) this.rear = null;
        const temp = this.front;
        this.front = this.front.next;
        this.size--;
        return temp.val;
    }

    peek(): T | null {
        return this.front ? this.front.val : null;
    }

    isEmpty(): boolean {
        return !this.front;
    }

}

export default QueueLinkedList;