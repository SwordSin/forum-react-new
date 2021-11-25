const CryptoJS = require('crypto-js')
// import { LoginDataType, RegisterDataType } from '@/shims'

/**
 * 加密（需要先加载lib/aes/aes.min.js文件）
 * @param word
 * @returns {*}
 */

const KEY = 'abcdefgabcdefg12'

function encrypt(word) {
  const key = CryptoJS.enc.Utf8.parse(KEY)
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return encrypted.toString()
}

/**
 * 解密
 * @param word
 * @returns {*}
 */
function decrypt(word) {
  const key = CryptoJS.enc.Utf8.parse(KEY)
  const decrypt = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}

console.log(encrypt('asdf'))
console.log(decrypt('lPIZAKF7jz98aObUmQQe7Q=='))

// export default {}
