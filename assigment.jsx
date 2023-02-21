
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
function insertQueue(stack, i) {
    let m = stack.length;
    const j = stack.filter((i) => i !== null).length;
    if (j === m) {
        console.log('stack full');
        return;
    }
    if (stack[0] == null && j < m) {
        stack[0] = 1;
        const filtered = stack.filter((i) => i !== null)
        console.log(filtered)
        return filtered
    } else {
        console.log("overflow")
    }
}
const dequeue = (arr) => {
    const x = arr.length;
    const j = arr.filter((i) => i !== null).length
    if (j === 0) {
        console.log("queue empty")
    }
    filtered = arr.splice(-1);
    let i = filtered.length - 1;
    while (i) {
        arr[i] == arr[i - 1]
        console.log(i)
        i--
    }
    console.log(arr)

    return arr;
};
const fuctionSwitch = (dataSMethod, props) => {
    switch (dataSMethod) {
        case "stackInsert":
            return insertStack(props.list, props.i);
        case "stackDelete":
            return deleteTopStack(props.list, props.i);
        case "arrayDelete":
            return deleteList(props.list, props.i)
        case "insertArray":
            return insertList(props.list, props.i, props.y)
        case "insertQueue":
            return insertQueue(props.list, props.i)
        case "dequeue":
            return dequeue(props.list, props.i)



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
// fuctionSwitch("insertQueue", { list:[null, 2, 3, 4, null],i:3  });
// fuctionSwitch("dequeue", { list: [2, 2, 3, 4, 7], });