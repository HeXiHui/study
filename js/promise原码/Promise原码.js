function Promise(executor) {
    var that = this;
    that.onResolveCallbacks=[];//存放所有成功的回调
    that.onRejectCallbacks=[];//存放所有失败的回调
    that.status = 'pending';//设定promise默认状态
    function resolve(value) {
        if (that.status === 'pending') {
            that.value=value;
            that.status = 'resolve';
            that.onResolveCallbacks.forEach(element => {element()})
        }
    };
    function reject(reason) {
        if (that.status === 'pending') {
            that.reason=reason;
            that.status = 'reject';
            that.onRejectCallbacks.forEach(element=>{element()})
        }
    };
    executor(resolve, reject)
};
Promise.prototype.then = function (onFulfilled, onReject) {
    let that = this;
    if (that.status === 'resolve') {
        onFulfilled(that.value)
    };
    if (that.status === 'reject') {
        onReject(that.reason)
    };
    if(that.status==='pending'){
        that.onResolveCallbacks.push(function(){onFulfilled(that.value)});
        that.onRejectCallbacks.push(function(){onReject(that.reason)})
    }
}

module.exports = Promise