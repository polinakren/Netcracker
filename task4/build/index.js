import { Node } from "./node.js";
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this._root = null;
    }
    Object.defineProperty(BinaryTree.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    BinaryTree.prototype.insert = function (data) {
        if (this._root === null) {
            this._root = new Node(data);
        }
        else {
            this.insertNode(this._root, data);
        }
    };
    BinaryTree.prototype.insertNode = function (node, data) {
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data);
            }
            else {
                this.insertNode(node.left, data);
            }
        }
        else {
            if (node.right === null) {
                node.right = new Node(data);
            }
            else {
                this.insertNode(node.right, data);
            }
        }
    };
    return BinaryTree;
}());
