export class Node<T> {
    public val: T;
    public next: Node<T> | null;

    constructor(val: T){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList<T>{

    private length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    };

    push(val: T){
        const newNode = new Node<T>(val);
        this.length++;
        if(this.tail !== null){
            this.tail.next = newNode;
            this.tail = this.tail.next;
            return;
        }
        this.tail = newNode;
        this.head = this.tail;
        return this;
    }

    pop(){
        if(this.head === null) return;
        this.length--;
        
        let currentNode = this.head;
        let pre = currentNode;
        
        while(currentNode.next !== null){
            pre = currentNode;
            currentNode = currentNode.next!;
        }
        this.tail = pre!;
        this.tail.next = null;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }

    unshift(val: T){
        let newNode = new Node<T>(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head =  newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(this.head === null) return;
        const head = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return head;
    }

    getLength(){
        return this.length;
    }

    get(index: number){
        if(index >= this.length || index < 0 ) return -1;
        let counter = 0;
        let current = this.head!;
        while(counter !== index){
            current = current.next!;
            counter++;
        }
        return current;
    }

    set(val: T, index: number){
        const node = this.get(index);
        if(node === -1) return false;
        node.val = val;
        return true;
    }

    insert(val: T, index: number){
        if(this.length < index || index < 0) return false;
        if(index === 0) this.unshift(val);
        else if(this.length === index) this.push(val);
        else {
            const newNode = new Node<T>(val);
            const prevNode = this.get(index-1) as Node<T>;
            const nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
        }
        return true;
    }

    remove(index: number){
        if(this.length <= index || index < 0) return;
        if(index === 0) return this.shift();
        if(this.length - 1 === index) return this.pop();
        const prevNode = this.get(index-1) as Node<T>;
        const nextNode = prevNode.next as Node<T>;
        prevNode.next = nextNode?.next;
        this.length--;
        return nextNode;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev: null | Node<T> = null;
        let next: Node<T> | undefined;
        for(let i = 0 ; i < this.length ; i++){
            next = node?.next as Node<T>;
            node!.next = prev;
            prev = node;
            node = next;
        }
        return this;

    }
   
    getTail(){
        return this.tail;
    }

    getHead(){
        return this.head;

    }

}

export default SinglyLinkedList;
