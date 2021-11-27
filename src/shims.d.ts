export interface InlintStyleType {
    [key:string]:string;
}

export interface PropsType {
    [key:string]: string|number;
}

export interface InputCallBackType {
    (name:string, value:string): void
}

// 注册数据类型
export interface RegisterDataType {
    username: string;
    email: string;
    netName: string;
    password: string;
    passwordAgain: string
}

// 登录数据类型
export interface LoginDataType {
    username: string;
    password: string;
    rememberMe: boolean;
}

// 板块类型
export interface BoardInfoType {
    boardId: number;
    boardName: string;
    param1: string;
    param2: string;
    param3: string;
    param4: string;
}

// 用户数据结构
export interface UserInfoType {
    userId: number;
    username: string;
    email: string;
    netName: string;
    password: string;
    headImg: string;
    param1?: string;
    param2?: string;
    param3?: string;
    param4?: string;
}

// api返回类型
export interface ApiDataType<T> {
    status: string;
    data: T;
}