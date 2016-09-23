var Rx = require('rxjs/Rx');

var sourceStream1 = Rx.Observable.of('t', 'o', 'm', 'm', 'y');
var sourceStream2 = Rx.Observable.interval(1000).take(5);

var combined = sourceStream1.zip(sourceStream2, (x, y) => x);

combined.subscribe(x => console.log(x))