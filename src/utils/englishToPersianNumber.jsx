export function englishToPersian(number) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().split('').map(digit => {
        if (/\d/.test(digit)) {
            return persianNumbers[digit];
        }
        return digit;
    }).join('');
}