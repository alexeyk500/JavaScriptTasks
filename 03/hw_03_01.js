let passwords = ['1234_', '4321_', 'qaz-xsw', '_zxd', '_-a', 'qaz', '_-3', '123456789'];

function get_password_safety(pas) {
    if (pas.length > 4 && (pas.includes('-') || pas.includes('_'))) {
        return true;
    } else {
        return false;
    }
}

for (let password of passwords) {
    if (get_password_safety(password)) {
        console.log(password, '- Пароль надёжный');
    } else {
        console.log(password, '- Пароль недостаточно надёжный');
    }
};