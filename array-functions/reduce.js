function reduce(array, reducer, initialValue) {

    if (arguments.length !== 2 && arguments.length !== 3) throw ReferenceError("Wrong number of arguments: two expected (Array, Callback function).");
    if (!(array instanceof Array)) throw TypeError("First argument must be an array.");
    if (!(reducer instanceof Function)) throw TypeError("Second argument must be a callback function thaht takes 2 arguments (accumulator, value).");
    if (initialValue !== undefined && typeof initialValue !== 'number') throw TypeError("InitialValue must be either undefined or a number.")
    if (reducer.length !== 2) throw ReferenceError("Callback function must have two arguments (accumulator, value).");
    
  
    if (initialValue || initialValue === 0) {
        var accumulator = initialValue
        var start = 0
    } else {
        var accumulator = array[0]
        var start = 1
    }
        
    for (var i = start; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i])
    }
    return accumulator
}
