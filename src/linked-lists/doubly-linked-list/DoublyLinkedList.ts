
class Node <T>{
    val: T;
    next: Node<T> | null;
    prev: Node<T> | null;

    constructor(val: T){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList <T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private length: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T){
        const newNode = new Node(val);
        if(this.tail === null) this.head = this.tail = newNode;
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }

    pop(){
        this.length--;
        if(this.head === null) return;
        const oldTail = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return oldTail;
        }
        this.tail = this.tail!.prev;
        this.tail!.next = null;
        return oldTail;
    }

    unshift(val: T){
        const newNode = new Node(val);
        if(this.head === null) this.head = this.tail = newNode;
        else{
            this.head.prev = newNode;  
            newNode.next = this.head;
            this.head = newNode;  
        }
        this.length++;
        return newNode;
    }

    shift(){
        if(this.head === null) return;
        const oldHead = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return oldHead;
        }
        this.head = this.head.next;
        this.head!.prev = null;
        this.length--;
        return oldHead;
    }

    get(index: number){
        if(index < 0 || index >= this.length) return;
        let counter = index < this.length / 2 ? 0 : this.length - 1;
        let current = index < this.length / 2 ? this.head : this.tail;
        while(index !== counter){
            current = index < this.length / 2 ? current!.next : current!.prev;
            index < this.length / 2 ? counter ++ : counter--;
        }
        return current!;
    }

    set(val: T, index: number){
        const selectedNode = this.get(index);
        if(!selectedNode) return false;
        selectedNode.val = val;
        return true;
    }

    insert(val: T, index: number){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        const prev = this.get(index - 1)!;
        newNode.next = prev.next;
        newNode.prev = prev;
        prev.next!.prev = newNode;
        prev.next = newNode;
        this.length++;
        return true;
    }


    remove(index: number){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length) return !!this.pop();
        const selectedNode = this.get(index)!;
        selectedNode.prev!.next = selectedNode.next;
        selectedNode.next!.prev = selectedNode!.prev;
        this.length--;
        return true;
    }

    reverse(){
        let node = this.head!;
        this.head = this.tail;
        this.tail = node;
        for(let i = 0 ; i < this.length ; i++){
            const tempPrev = node.prev;
            node.prev = node.next;
            node.next = tempPrev;
            node = node.prev!;
        }
        return this;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }
}

export default DoublyLinkedList;
