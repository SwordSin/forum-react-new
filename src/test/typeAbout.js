// 类型相关
var Name1;
(function (Name1) {
    function printLable(labelObj) {
        console.log(labelObj.label);
    }
    var label = {
        label: 'str',
        x: 12
    };
    printLable(label);
    var a = {
        a: 1,
        b: 2,
        c: 3
    };
    console.log(a);
    var fun1;
    fun1 = function (param1, param2) {
        console.log(12);
        return true;
    };
    fun1('a', 12);
    var arr;
    arr = {
        legth: 12
    };
    arr[1] = 12;
    arr[2] = 10;
    arr[0] = 12;
    console.log(arr);
    var Father = /** @class */ (function () {
        function Father(name1, name2, name3) {
            this.name1 = name1;
            this.name2 = name2;
            this.name3 = name3;
        }
        return Father;
    }());
    var father = new Father('a', 1, 'vb');
    console.log(father.name1);
    console.log(father.name2);
    console.log(father.name3);
    // interface ClockConstructor {
    //     new (hour: number, minute: number);
    // }
    // class Clock implements ClockConstructor {
    //     constructor(h: number, m: number) { }
    // }
    // let clock = new Clock(10, 10)
    // console.log(clock)
    // 类
    var Getter = /** @class */ (function () {
        function Getter(getting) {
            this.getting = getting;
        }
        Getter.prototype.getted = function () {
            return "asdf";
        };
        return Getter;
    }());
    var get = new Getter('asd');
    get.getted();
    get.getting;
    // 完整函数类型
    var myAdd = function (x, y) {
        return x + y;
    };
    console.log(myAdd(10, 20));
    // 函数的参数
    function buildName(param1, param2) {
        var restName = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            restName[_i - 2] = arguments[_i];
        }
        console.log(param2);
        console.log(restName);
    }
    buildName('a', 'b', 'c', 'd');
    // 泛型
    function identy(arg) {
        console.log(arg);
        return arg;
    }
    identy(12);
    identy('sadf');
    identy(Object.create({ a: 12 }));
    var person = {
        isHuman: false,
        printIntroduction: function () {
            console.log("My name is ".concat(this.name, ". Am I human? ").concat(this.isHuman));
        }
    };
    var o = Object.create(person);
    console.log(o);
})(Name1 || (Name1 = {}));
