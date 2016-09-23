var Rx = require('rxjs/Rx');

var sourceStream = Rx.Observable.interval(100);

//var resultStream = sourceStream.debounceTime(1000);
var resultStream = sourceStream.throttleTime(1000);

resultStream.subscribe(x => console.log(x))