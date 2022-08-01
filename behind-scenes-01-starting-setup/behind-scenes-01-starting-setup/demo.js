const data = {
    message: "hello",
    longMess: 'hello quan',
}

const handler = {
    set(target, key, value) {
        if (key === 'message') {
            target.longMess = value + 'world';
        }
        target.message = value;
    }
}
const proxy = new Proxy(target, handler);
proxy.message = 'Hello';
console.log(3333333333);
console.log(proxy.longMess);