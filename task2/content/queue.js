class Queue {
    constructor() {
        this.queue = [];
    }

    push(element) {
        this.queue.push(element);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    front() {
        return this.queue[0];
    }

    back() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        return this.queue[this.queue.length - 1];
    }

    print() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }

    getElementByIndex(index) {
        return this.queue[index];
    }

    getSize() {
        return this.queue.length;
    }
}

let _log = window.console.log;

window.console.log = function (arg1) {
    let data = new Date();
    arguments = ['The number of elements in the queue is ', arg1, 'at', data.getHours(), ':' , data.getMinutes(),':', data.getSeconds() ];
    _log.apply(this, arguments); 
};

let queue = new Queue();
let index = 0;
let value = 0;

function addElement() {
    let val = document.getElementById('number').value;
    queue.push(val);

    console.log(queue.getSize() , arguments);

    let tbody = document.getElementById('table-result').getElementsByTagName('TBODY')[0];
    let row = tbody.insertRow("TR");

    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    td2.innerHTML = queue.getElementByIndex(index);
    td1.innerHTML = index++;

    value++;
}

function deleteElement() {
    try {
        if (queue.isEmpty()) {
            throw 'empty'
        }
        queue.dequeue();
        document.getElementById('table-result').deleteRow(index);
        index--;
        restartTable();
    } catch (error) {
        console.error('Queue is ' + error);
    }
    console.log(queue.getSize() , arguments);
}

function restartTable() {
    let td = document.getElementById('table-result').getElementsByTagName('td');
    let count = index;

    for (let i = 0; i < 2 * index - 1; i++) {
        if (i % 2 == 0) {
            count -= 1;
            td[i].innerHTML = count;
        }
    }
}

function factorial(number) {
    if (number <= 0) { 
    return 1;
    } else { 
    return (number * factorial(number - 1));
    }
   };
   console.log(factorial(6));
