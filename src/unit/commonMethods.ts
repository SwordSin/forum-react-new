/**
 * 共通函数
 */

// 获取cookie
export const getCookie = function(key: string):string {
    const cookie:string = document.cookie
    let cookieValue = ''
    cookie.split('; ').map(val => {
        if (val.indexOf(key + '=') === 0) {
            cookieValue = val.substring((key + '=').length)
        }
    })
    return cookieValue
}