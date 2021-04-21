var Node = /** @class */ (function () {
    function Node(data) {
        this._data = data;
        this._left = null;
        this._right = null;
    }
    Object.defineProperty(Node.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (right) {
            this._right = right;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (left) {
            this._left = left;
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
export { Node };
