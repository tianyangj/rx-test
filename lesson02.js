var Rx = require('rxjs/Rx');

console.log('Lesson 02 Starts...')

var stream = Rx.Observable.of(1, 2, 3);

// operator takes source as Type Observable
// operator returns result as Type Observable
function operatorSquare(source) {
    // create result Observable
    var result = Rx.Observable.create((observer) => {
        // subscribe source input stream
        source.subscribe(
            (x) => {
                // forward to observer.next
                observer.next(x * x);
            },
            (error) => {
                // forward to observer.error
                observer.error(error);
            },
            () => {
                // forward to observer.complete
                observer.complete();
            }
        );
    });
    return result;
}

function operatorSquare1(source) {
    return source.map(x => {
        return x * x;
    });
}

operatorSquare(stream).subscribe(x => {
    console.log(x);
});

operatorSquare1(stream).subscribe(x => {
    console.log(x);
});

console.log('Lesson 02 Ends...')