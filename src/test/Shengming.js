var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
声明数组;
var list = [1, 2, 23];
var list2 = [1, 2, 23];
var list3 = [12, 'asdf'];
console.log(list);
console.log(list2);
console.log(list3);
// keof
// const layout = {
//     labelCol: { span: 6 },
//     wrapperCol: { span: 16 }
// }
// type layoutType = typeof layout
// const test: keyof layoutType = {}
// console.log(test)
// 元组
var tuple = ['asdf', 12];
console.log(tuple);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color);
// 声明
// 数组解构
var input = [1, 2, 3];
var a = input[0], b = input[1], c = input[2];
console.log(a, b, c);
// 对象解构
var o = {
    a1: 'a',
    b1: 1,
    c1: 'c'
};
// let {a1, b1} = o
// console.log(a1)
// console.log(b1)
var a1 = o.a1, b2 = __rest(o, ["a1"]);
console.log(a1);
console.log(b2);
// 函数中的解构
function fun1(param) {
    var a = param.a, _a = param.b, b = _a === void 0 ? 'str' : _a;
    console.log(a, b);
}
fun1({ a: 10 });
// 解构赋值 默认属性
function fun2(_a) {
    var _b = _a.a, a = _b === void 0 ? 0 : _b, _c = _a.b, b = _c === void 0 ? 10 : _c;
    console.log(a, b);
}
fun2({ a: 0 });
// 展开
console.log(__spreadArray([1, 2, 3], list, true));
