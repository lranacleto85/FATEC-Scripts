export function validatePhone(phone: string): boolean {
    const digits = phone.replace(/\D/g, '')


    if (![10, 11].includes(digits.length)) {
        return false
    }

    const ddd = parseInt(digits.substring(0, 2))
    if (ddd < 11 || ddd > 99) {
        return false
    }

    if (digits.length === 11) {
        return digits[2] === '9'
    }

    if (digits.length === 10) {
        const firstDigit = parseInt(digits[2])
        return firstDigit >= 2 && firstDigit <= 8
    }

    return false
}