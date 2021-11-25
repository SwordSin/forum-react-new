import { InlintStyleType } from '@/shims'

// 共同数据

// 注册表单渲染用数据
export const RegisterItemList = [
    {
        label: '用户名',
        name: 'username',
        type: 'text'
    },
    {
        label: 'email',
        name: 'email',
        type: 'text'
    },
    {
        label: '昵称',
        name: 'netName',
        type: 'text'
    },
    {
        label: '密码',
        name: 'password',
        type: 'password'
    },
    {
        label: '确认密码',
        name: 'passwordAgain',
        type: 'password'
    }
]

// 注册表单数据
export const RegisterDatas = {
    username: '',
    email: '',
    netName: '',
    password: '',
    passwordAgain: ''
}

// 注册表单渲染用数据
export const LoingItemList = [
    {
        label: '用户名',
        name: 'username',
        type: 'text'
    },
    {
        label: '密码',
        name: 'password',
        type: 'password'
    },
    {
        label: '记住我',
        name: 'rememberMe',
        type: 'checkbox'
    }
]

// 注册表单数据
export const LoingDatas = {
    username: '',
    password: '',
    rememberMe: true
}

// input的通用样式
export const InputStyle:InlintStyleType = {
    width: '100%',
    height: '100%',
    fontSize: '16px',
    lineHeight: '16px',
    padding: '1px',
    paddingBottom: '2px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box'
}

export const InputboxStyle:InlintStyleType = {
    width: '200px',
    borderRadius: '3px',
    border: '1px solid var(--box-border-focus-color)'
}