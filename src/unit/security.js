"use strict";
exports.__esModule = true;
var CryptoJS = require('crypto-js');
// import { LoginDataType, RegisterDataType } from '@/shims'
/**
 * 加密（需要先加载lib/aes/aes.min.js文件）
 * @param word
 * @returns {*}
 */
var KEY = 'abcdefgabcdefg12';
function encrypt(word) {
    var key = CryptoJS.enc.Utf8.parse(KEY);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
}
/**
 * 解密
 * @param word
 * @returns {*}
 */
function decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse(KEY);
    var decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
/**
 * 注册/登录时将传到后台的密码加密
 */
// function decryptPassword(data: LoginDataType| RegisterDataType) {
//   for(const item in data) {
//     if(item === 'password' || item === 'passwordAgain') {
//       data[item] = encrypt(data[item])
//     }
//   }
// }
console.log(decrypt('0UjLQZT9Rte8xGVmztMcholSXQwMDEsbQXbYwWyq678='));
exports["default"] = {};
// export { encrypt, decrypt, decryptPassword }
