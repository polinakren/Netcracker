class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        this.stack.pop();
    }

    isEmpty() {
        return this.stack.length == 0;
    }

    getSize() {
        return this.stack.length;
    }
}

let _log = window.console.log;

window.console.log = function (arg1) {
    let data = new Date();
    arguments = ['The number of elements in the stack is ', arg1, 'at', data.getHours(), ':' , data.getMinutes(),':', data.getSeconds() ];
    _log.apply(this, arguments); 
};

let stack = new Stack;
let index = 0;

function addElement() {
    stack.push(index);
    
    console.log(stack.getSize() , arguments);

    let tbody = document.getElementById('table-result').getElementsByTagName('TBODY')[0];

    let row = document.createElement("TR");
    tbody.appendChild(row);

    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    td2.innerHTML = index + 1;
    td1.innerHTML = index++;
}

function deleteElement() {
    try {
        if (stack.isEmpty()) {
            throw 'empty'
        }
        stack.pop();
        document.getElementById('table-result').deleteRow(index);
        index--;
    } catch (error) {
        console.error('Stack is ' + error);
    }

    console.log(stack.getSize() , arguments);
}
