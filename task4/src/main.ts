import { BinaryTree } from "./tree.js";

const tree: BinaryTree<string> = new BinaryTree<string>(1, "A");

tree.addNode(3, '20');
tree.deleteNode(3);