const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

export default function createPassword(length = 8, hasNumbers = true, hasSymbols = true) {
    let chars = alphabet
    let password = ''

    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''

    for (let i = 0; i < length; i++) {
       password += chars.charAt(Math.floor(Math.random() * chars.length)) 
    }

    return password
}