//数组的常见方法
//reduce 叠加  返回的结果是叠加以后的结果
let fn=[1,2,3,4,5].reduce((prev,next,currIndex,ary)=>{
    return prev+next
})
console.log(fn)
//forEach
[1,2,3].forEach((item,index)=>{
    console.log(item)
})
//map 返回值是 一个新数组
let arr=[1,2,3].map((item)=>{
    return item-1
});
console.log(arr)
//原理
let arr=[];
Array.prototype.map=function(fn){
    for(let i=0;i<this.length;i++){
        arr.push(fn[i],i)
    }
    return arr
}

//filter 过滤如果是true表示留下
let filte=[1,2,3].filter((item)=>{
    return item>2
});
console.log(filte)
//find 查找
let fin=[1,2,3].find(item=>{
    if(item===2){
        return item
    }else{
        return undefined
    }
})
console.log(fin)
//some 找到后找加true
let s=[1,2,3].some(item=>{
    return item=2
});
console.log(s)
//include 包含