const Node = require('./Node')

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    Prepend(value) {
        let node = new Node(value);
        if(!this.head) {
        this.head = node;
    }
       else {
        node.pointer = this.head;
        this.head = node;
       }
       this.size++
    }
    
    Append(value) {
        let node = new Node(value);
        let current;

        if(!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            while(current.pointer) {
                current = current.pointer
            }
            current.pointer = node;
        }

        this.size++
    }

    
    //size
    getSize() {
        if(!this.head) {
            console.log("This list is empty");
        }

        console.log("Number of nodes: " + this.size);
    }

    //head
    getHead() {
        if(!this.head) {
            console.log("This list is empty");
        }
        else{
        console.log("First node: " + this.head.value);
    }
    }

    //tail
    getTail() {
        let current = this.head;
        while(current.pointer) {
            current = current.pointer;
        }
        console.log("Last node: " + current.value);
    }

    //at(index)
    at(index) {

        if(index>=this.size) {
            console.log("Index not found")
        }

        else {
        
        let current = this.head;
        let counter = 0;
        while(counter < index) {
            current = current.pointer
            counter++;
        }
        console.log("at index " + index + " : " + current.value);
    }

    }

    //pop
    pop() {
        let current = this.head;
        while(current.pointer.pointer) {
            current = current.pointer;
        }
        current.pointer = null;
        this.size--
    }

    //contains(value)
    contains(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return console.log(true);
            }
            current = current.pointer;
        }
        return console.log(false);
    }

    //find(value)
    find(value) {
        let current = this.head
        let counter = 0;
        while(current) {
            if(current.value === value) {
                console.log("node " + counter + " contains " + value);
                return
            }
            current = current.pointer;
            counter++
        }
        console.log("Value not found");
    }

    //tostring [ format: (value) -> (value) -> (value) -> null]
    printString() {
        let current = this.head;
        while(current) {
            console.log("(" + current.value + ")" + "->");
            current = current.pointer
        }

    }

    //insertAt (value,index);
    insertAt(value, index) {
        let current = this.head;
        let counter = 0;
        if(index = 0) {
            Append(value);
        }
        while(counter<=index) {
            current = current.pointer;
            counter++
        }
        let node = new Node(value, current.pointer.pointer);
        node.pointer = current.pointer;
        current.pointer = node;
        this.size++;
    }

    //removeAt(index)
    removeAt(index) {
        if(index>this.size) {
            return;
        }

        let current = this.head;
        let counter = 0;
        while(counter<index-1) {
            current = current.pointer;
            counter++
        }

        current.pointer = current.pointer.pointer
        this.size--;
    }
}

const list = new LinkedList();

list.Append(100);
list.Append(200);
list.Append(400);
list.insertAt(300, 2);
list.removeAt(2);
list.find(200);
list.contains(333);
list.getHead();
list.getTail();
list.getSize();
list.at(2);
list.printString();


