names = ['ПEтр Иванов', 'Петр иванов', 'ИваН ПЕТРов', 'Иван Петров']

function split_name_and_surname(full_name) {
    return full_name.split(' ');
}

function get_correct_name_or_surname(str) {
    let first_char   = str.substr(0,1).toUpperCase();
    let remain_chars = str.substr(1).toLowerCase();
    let correct_name = first_char + remain_chars
    return correct_name;
}
for (let f_name of names) {
    let full_name = split_name_and_surname(f_name);
    let old_name    = full_name[0];
    let old_surname = full_name[1];

    console.log(old_name, old_surname);

    let correct_name    = get_correct_name_or_surname(old_name)
    let correct_surname = get_correct_name_or_surname(old_surname)

    console.log(correct_name, correct_surname);

    result_name    = old_name === correct_name ? 'Имя осталось без изменений,' : 'Имя было преобразовано,';
    result_surname = old_surname === correct_surname ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована';

    console.log(result_name, result_surname);
    console.log('------------------------------------------------------');
};