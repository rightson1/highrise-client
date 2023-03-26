
function insertStack(stack, i) {
    let n = stack.length;
    const top = n - 1;
    if (stack[top] === undefined) {
        stack[top] = i;
        console.log(stack)
        return stack;
    } else {
        console.log("stack full");
    }
}
function deleteTopStack(stack, i) {
    let n = stack.length;
    const top = n - 1;
    if (stack[top] !== undefined) {
        stack[top] = undefined;

        console.log(stack.filter((i) => i !== undefined))
        return stack
    } else {
        console.log('stack top null')
        return stack
    }

}
const deleteList = (arr, i) => {
    const x = arr;
    let n = x.length;
    if (i >= n) {
        console.log("i is greater than n");
        return x;
    }
    let j = i;
    while (!(j >= n)) {
        if (j >= n - 1) {
            x.splice(-1)
            console.log(x)
            return x;
        }
        x[j] = x[j + 1];
        j++;
    }

    return x;
};
const insertList = (arr, i, y) => {
    const x = arr;
    let n = x.length;
    if (i >= n) {
        console.log("i is greater than n");
        return x;
    }
    let j = i - 1;
    while (!(i < n)) {
        x[j - 1] = x[j];
        j--;
    }
    x[i] = y;
    console.log(x)
    return x;

}
class Queue {
    constructor() {
        this.arr = [];
        this.size = 10;
        this.rear = -1;
        this.front = 0;
    }
    enqueue(item) {
        if (this.rear == this.size)
            return "overflow";
        this.rear += 1;
        this.arr[this.rear] = item;
        this.size += 1;
    }
    dequueue() {
        if (this.isEmpty()) {
            return "under flow";
        }
        let removeElement = this.arr[this.front];
        this.front += 1; e.
            this.size -= 1;
        return removeElement;
    }
    isEmpty() {
        return this.size === 0;

    }

}
const queue = new Queue();
const fuctionSwitch = (dataSMethod, props) => {
    switch (dataSMethod) {
        case "stackInsert":
            return insertStack(props.list, props.i);
        case "stackDelete":
            return deleteTopStack(props.list, props.i);
        case "arrayDelete":
            return deleteList(props.list, props.i)
        case "insertArray":
            return
        case "insertQueue":
            return queue.enqueue(4)
        case "dequeue":
            return queue.enqueue(42)



    }
};






const list = new Array(5)
const i = list.length;
for (let x = 0; x < i; x++) {
    list[x] = x
}
// fuctionSwitch("stackInsert", { list, i: 10 });
// fuctionSwitch("stackDelete", {list});
// fuctionSwitch("arrayDelete", { list:[1, 2, 3, 4, 5], i: 0 });
// fuctionSwitch("insertArray", { list:[0, 2, 3, 4, 5], i: 1,y:"1111"});
fuctionSwitch("insertQueue");
fuctionSwitch("dequeue");