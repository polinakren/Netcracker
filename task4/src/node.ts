export class Node<T> {
    readonly _id: number;
    private _data: T | undefined;
    public _left: Node<T> | null = null;
    public _right: Node<T> | null = null;

    constructor(id: number, data?: T) {
        this._id = id;
        this._data = data;
    }

    get ID (): number {
        return this._id;
    }
    get data (): T | undefined {
        return this._data;
    }
    set data (data: T | undefined) {
        this._data = data;
    }
    get left (): Node<T> | null {
        return this._left;
    }
    set left (left: Node<T> | null) {
        this._left = left;
    }
    get right (): Node<T> | null{
        return this._right;
    }
    set right (right: Node<T> |null) {
        this._right = right;
    }
}
