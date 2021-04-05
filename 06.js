const list_letters_first = ['c', 'd', 'e', 'g', 'h']
    , list_letters_second = ['X', 'Z']
const letterMissing = (first = list_letters_first, second = list_letters_second) => {
    let list_letters_first;
    let list_letters_second;
    if (first.indexOf('f') === -1) {
        list_letters_first = 'f'
    } else {
        list_letters_first = ''
    }

    if (second.indexOf('Y') === -1) {
        list_letters_second = 'Y'
    }
    console.log(list_letters_first)
    console.log(list_letters_second)
}

letterMissing()