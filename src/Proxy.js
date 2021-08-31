const obj = { name: "mingsen", age: 25 };

const proxyObj = new Proxy(obj, {
  get(target, propName) {
    return Reflect.get(target, propName);
  },
  set(target, propName, value) {
    Reflect.set(target, propName, value);
  },
  deleteProperty(target, propName) {
    Reflect.deleteProperty(target, propName);
  },
});

console.log(proxyObj, "proxyObj");
console.log(obj, "obj");
