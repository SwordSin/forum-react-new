let test1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let test2 = {
    a: 'a',
    b: 'b'
}
Object.seal(test2)
test2 = {...test1}
console.log(test1)
