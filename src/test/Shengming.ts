//  声明数组
const list:Array<number> = [1, 2, 23]
const list2:number[] = [1, 2, 23]
type A = string|number
const list3: A[] = [12, 'asdf']
console.log(list)
console.log(list2)
console.log(list3)

// keof

// const layout = {
//     labelCol: { span: 6 },
//     wrapperCol: { span: 16 }
// }
// type layoutType = typeof layout
  
// const test: keyof layoutType = {}
// console.log(test)


// 元组
const tuple:[string, number] = ['asdf', 12]
console.log(tuple)

// 枚举
enum Color {Red, Green, Blue}

console.log(Color)

// 声明

// 数组解构
let input:number[]|string[] = [1, 2, 3]
let [a, b, c] = input
console.log(a, b, c)

// 对象解构
let o = {
    a1: 'a',
    b1: 1,
    c1: 'c'
}

// let {a1, b1} = o

// console.log(a1)
// console.log(b1)
let {a1, ...b2} = o

console.log(a1)
console.log(b2)

// 函数中的解构

function fun1(param: {a: number, b?:string}):void {
    let {a, b = 'str'} = param
    console.log(a, b)
}
fun1({a: 10})

// 解构赋值 默认属性
function fun2({a = 0, b = 10}):void {
    console.log(a, b)
}

fun2({a: 0})

// 展开

console.log([1, 2, 3, ...list])

