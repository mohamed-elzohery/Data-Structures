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

    // Tree Traversals
    // Breadth First Search
    BFS(){
        if(this.root === null) return [];
        const queue: Node<T>[] = [this.root];
        const visited: T[] = [];
        while(queue.length !== 0){
            const visitedNode = queue.shift() as Node<T>;
            visited.push(visitedNode.val);
            if(visitedNode.left !== null) queue.push(visitedNode.left);
            if(visitedNode.right !== null) queue.push(visitedNode.right);
        }
        return visited;
    }

    // Depth First Search
    preOrder(){
        const visited: T[] = [];
        this.preOrderTravers(this.root!, visited);
        return visited;
    }

        // Depth First Search
    postOrder(){
        const visited: T[] = [];
        this.postOrderTravers(this.root!, visited);
        return visited;
    }

    inOrder(){
        const visited: T[] = [];
        this.inOrderTravers(this.root!, visited);
        return visited;
    }

    // PreOrder Helper function
    preOrderTravers(current: Node<T>, visited: T[]){
        visited.push(current.val);
        if(current.left !== null) this.preOrderTravers(current.left, visited);
        if(current.right !== null) this.preOrderTravers(current.right, visited);
    }

    // Post Order Helper function
    postOrderTravers(current: Node<T>, visited: T[]){
        if(current.left !== null) this.postOrderTravers(current.left, visited);
        if(current.right !== null) this.postOrderTravers(current.right, visited);
        visited.push(current.val);
    }

    // Post Order Helper function
    inOrderTravers(current: Node<T>, visited: T[]){
        if(current.left !== null) this.inOrderTravers(current.left, visited);
        visited.push(current.val);
        if(current.right !== null) this.inOrderTravers(current.right, visited);
    }
}

export default BinarySearchTree;

// const binaryTree = new BinarySearchTree<number>();


// binaryTree.root = new Node(10);
// binaryTree.root.left = new Node(6);
// binaryTree.root.right = new Node(12);
// binaryTree.root.left.left = new Node(4);
// binaryTree.root.left.right = new Node(8);
// binaryTree.root.right.left = new Node(8);
// binaryTree.root.right.right = new Node(20);

//                          10
//                      6       12
//                  4       8 8     20
// console.log(binaryTree.BFS());
// console.log(binaryTree.preOrder());
// console.log(binaryTree.postOrder());
// console.log(binaryTree.inOrder());