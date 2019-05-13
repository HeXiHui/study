let obj={name:'1'};
let obj1={age:'2'};
//obj.__proto__=obj  es5的写法
Object.setPrototypeOf(obj,obj1);
Object.getPrototypeOf(obj)