// 类型相关
namespace Name1 {
    // 接口
    interface LableValue {
        label: string;
        name?:string; // 可选属性
    }
    
    function printLable(labelObj: LableValue) {
        console.log(labelObj.label)
    }
    
    const label = {
        label: 'str',
        x: 12
    }
    printLable(label)
    
    // 接口 字符串索引签名
    interface Interface2 {
        [key:string]:number
    }
    
    const a:Interface2 = {
        a: 1,
        b: 2,
        c: 3
    }
    
    console.log(a)

    // 接口定义函数
    interface SearchFun {
        (param1: string, param2: number) : boolean;
    }

    let fun1: SearchFun = function(param1:string, param2: number) {
        console.log(12)
        return true
    }

    fun1('a', 12)

    // 接口定义可索引类型 - 数组
    interface StringArray {
        [index: number]: number;
        legth: number
    }

    let arr: StringArray
    arr = {
        legth: 12
    }
    arr[1] = 12
    arr[2] = 10
    arr[0] = 12
    
    console.log(arr)
    
    // 类实现接口
    interface Sub {
        name1: string,
        name2: number,
        name3: string
    }

    class Father implements Sub {
        name1: string;
        name2: number;
        name3: string;
        constructor(name1: string, name2: number, name3:string) {
            this.name1 = name1
            this.name2 = name2
            this.name3 = name3
        }
    }

    let father = new Father('a', 1, 'vb')

    console.log(father.name1)
    console.log(father.name2)
    console.log(father.name3)

    // interface ClockConstructor {
    //     new (hour: number, minute: number);
    // }
    
    // class Clock implements ClockConstructor {
    //     constructor(h: number, m: number) { }
    // }

    // let clock = new Clock(10, 10)
    // console.log(clock)


    // 类
    class Getter {
        getting: string
        constructor(getting: string) {
            this.getting = getting
        }

        getted():string {
            return "asdf"
        }
    }

    const get = new Getter('asd')
    get.getted()
    get.getting

    // 完整函数类型
    let myAdd: (x:number, y: number) => number = function(x:number, y: number) {
        return x+y
    }
    console.log(myAdd(10, 20))

    // 函数的参数
    function buildName(param1: string, param2?: string, ...restName: string[]) {
        console.log(param2)
        console.log(restName)
    }

    buildName('a', 'b', 'c', 'd')

    // 泛型

    function identy<T>(arg:T):T {
        console.log(arg)
        return arg;
    }

    identy<number>(12)
    identy<string>('sadf')

    identy(Object.create({a: 12}))
    

    const person = {
        isHuman: false,
        printIntroduction: function() {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    }
    let o = Object.create(person)
    console.log(o)

    // 泛型函数赋值
    let test:<T>(arg:T) => T = identy;
    test<string>('asd')

    // 泛型接口
    interface identy2<T> {
        (args: T) : T;
    }

    let test2:identy2<number> = function<T>(args: T): T {
        return args;
    }

    test2(12)

    interface GenericIdentityFn<T> {
        (arg: T): T;
    }
    
    let myIdentity: GenericIdentityFn<number> = function<T>(arg: T): T {
        return arg;
    }

    // 数字字面量类型
    type A = 1|2|3

    const aa:A = 1
}