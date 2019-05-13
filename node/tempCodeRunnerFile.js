Promise.resolve().then(function(){console.log('Promise')});
process.nextTick(function(){console.log('next')});
console.log(11111)