import { Node } from "./node.js";

export class BinaryTree<T> {
    private _root: Node<T> | null;;

    constructor (id: number, data: T) {
        this._root = new Node<T>(id, data);
    }

    public getRoot(): Node<T> | null {
        return this._root;
    }

    public addNode (id: number, data: T): void {
        let node: Node<T>;
        data ? node = new Node<T>(id, data) : node = new Node<T>(id);
        let currentNode: Node<T> | null = this._root;
        let parentNode: Node<T> | null = null;
        if (this._root == null) {
            this._root = node;
            return;
        }
        parentNode = currentNode;
        if(currentNode != null){
            if (id < currentNode.ID) {
                currentNode = currentNode.left;
                if (currentNode == null && parentNode != null) {
                    parentNode.left = node;
                    return;
                }
            } else {
                currentNode = currentNode.right;
                if (currentNode == null && parentNode != null) {
                    parentNode.right = node;
                    return;
                }
            }
        }
    }
   
    public searchNode (id: number): Node<T> | null {
        let tmpNode: Node<T> | null = this._root;
        if(tmpNode != null){
            if (id === tmpNode.ID) {
                return this._root;
            }
            while (id !== tmpNode.ID) {
                if(id > tmpNode.ID){
                    tmpNode = tmpNode.right;
                } else {
                    tmpNode = tmpNode.right;
                }
                if (tmpNode == null) {
                    return null;
                }
            }
        }
        return tmpNode;
    }
    
    public deleteNode (id: number): boolean {
        let currentNode: Node<T> | null = this._root;
        let parentNode: Node<T> | null = currentNode;
        let isLeftChild: boolean = false;

        if(currentNode != null){
            while (currentNode.ID !== id) {
                parentNode = currentNode;
                if (id < currentNode.ID) {
                    currentNode = currentNode.left;
                    isLeftChild = true;
                } else {
                    currentNode = currentNode.right;
                    isLeftChild = false;
                }
                if (currentNode == null) {
                    return false;
                }
            }
            if (currentNode.left == null && currentNode.right == null) {
                if (currentNode === this._root) {
                    currentNode = null;
                } else {
                    if (isLeftChild && parentNode != null) {
                        if(parentNode != null){
                            parentNode.left = null;
                        }
                    } else {
                        if(parentNode != null){
                            parentNode.right = null;
                        }
                    }
                }
                return true;
            }
            if (currentNode.right == null) {
                if (currentNode === this._root) {
                    this._root = currentNode.left;
                    return true;
                }
                if (isLeftChild) {
                    if(parentNode != null){
                        parentNode.left = currentNode.left;
                    }
                } else {
                    if(parentNode != null){
                        parentNode.right = currentNode.left;
                    }
                }
                return true;
            }
            if (currentNode.left == null) {
                if (currentNode === this._root) {
                    this._root = currentNode.right;
                    return true;
                }
                if (isLeftChild) {
                    if(parentNode != null){
                        parentNode.left = currentNode.right;
                    }
                } else {
                    if(parentNode != null){
                        parentNode.right = currentNode.right;
                    }
                }
                return true;
            }
        }
        return true;
    }

    public printInorder(node: Node<T> | null) {
        if (node !== null) {
          this.printInorder(node.left);
          console.log(node.data);
          this.printInorder(node.right);
        }
    }
}
