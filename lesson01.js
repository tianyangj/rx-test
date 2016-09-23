var Rx = require('rxjs/Rx');

console.log('Lesson 01 Starts...');

var stream = Rx.Observable.of(1, 2, 3);

stream.map(x => {
    return x * 10;
}).subscribe(x => {
    console.log(x);
});

console.log('Lesson 01 Ends...');