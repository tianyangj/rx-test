var Rx = require('rxjs/Rx');

var sourceStream1 = Rx.Observable.of('t', 'o', 'm', 'm', 'y')
    .zip(Rx.Observable.interval(600).take(5), (x, y) => x);

var sourceStream2 = Rx.Observable.interval(900).take(3);

var responseStream = sourceStream1.buffer(sourceStream2)

responseStream.subscribe(x => console.log(x))