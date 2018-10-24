const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('this is my resolve data');
        reject('something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);    
}).catch((e) => {
    console.log(e);
});

console.log('after');
