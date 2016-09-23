var Rx = require('rxjs/Rx');

var stream = Rx.Observable.of(1, 2, 3);

function myMap(source, fn) {
    var result = Rx.Observable.create((observer) => {
        source.subscribe(
            (x) => {
                observer.next(fn(x));
            },
            (error) => {
                observer.error(error);
            },
            () => {
                observer.complete();
            }
        );
    });
    return result;
}

myMap(stream, x => x * x).subscribe(x => {
    console.log(x)
})

stream
    .do(x => console.log('before', x))
    .map(x => x * x)
    .do(x => console.log('after', x))
    .subscribe(x => {
        console.log(x)
    });