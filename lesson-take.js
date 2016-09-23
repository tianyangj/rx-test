var Rx = require('rxjs/Rx');

var sourceStream = Rx.Observable.interval(1000);

var responseStream = sourceStream.take(5)

responseStream.subscribe(x => console.log(x))