class Parent{
    constructor(){
        this.name='parent';
    };
    static b(){
        return 2
    }//静态属性
    eat(){
        console.log(eat)
    }
};
class Child extends Parent{//要求继承父亲的私有和公有属性
    construvtor(){
        super();//Parent.call(this)等同
        this.age='2'
    };
    static a(){
        return 1
    };
    smoking(){//原型上的方法
        console.log('somke')
    }
};
let child=new Child()
//类只能new
// 类可以继承私有，公有和静态方法
// 父类的构造函数中返回一个引用类型会把这个引用类型作为子类的this