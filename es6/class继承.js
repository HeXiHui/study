//类的继承 
// 三种属性 公有属性 私有属性 静态属性
//继承私有 Parent.call()
function Parent(){
    this.name='parent'
};
Parent.prototype.eat=function(){
    console.log('eat')
};
function Child(){
    this.age=9;
    Parent.call(this)//继承私有
}
let child=new Child();
// Child.prototype=Parent.prototype 这不是继承 是兄弟关系
//Child.prototype.__proto__=Parent.prototype//继承公有属性
Object.setPrototypeOf(Chile.prototype,Parent.prototype);//es6写法
Child.prototype=Object.create(Parent.prototype,{constructor:{value:Child}});//只继承公有
