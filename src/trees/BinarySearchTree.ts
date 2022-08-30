class Node<T> {
    val: T;
    left: Node<T> | null;
    right: Node<T> | null;

    constructor(val: T){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree<T> {
    root: Node<T> | null;

    constructor(){
        this.root = null;
    }

    insert(val: T){
        const newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }; 
        let current = this.root;
        while(current !== null){
            if(current.val === val) return undefined;
            if(val < current.val){
                if(current.left !== null){
                    current = current.left;
                }else{
                    current.left = newNode;
                    return this;
                }
            }else{
                if(current.right !== null){
                    current = current.right;
                }else{
                    current.right = newNode;
                    return this;
                }
            }
        }
        current = newNode;
    }

    find(val: T){
        if(this.root === null) return false;
        let current = this.root;
        while(current !== null){
            if(current.val === val) return current;
            if(val < current.val){
                if(current.left !== null){
                    current = current.left;
                }else{
                    return false;
                }
            }else{
                if(current.right !== null){
                    current = current.right;
                }else{
                    return false;
                }
            }
        }
    }
}
