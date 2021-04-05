const Paragraf = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ubahKata = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];

function sensor(Paragraf, _ubahKata) {

    const replaceWords = ubahKata.map(ele => {
        let str = '*';
        for (let i = 1; i < ele.length; i++) str += '*';
        return str;
    });

    return Paragraf.split(' ').map(word => {
        for (let j = 0; j < cenWords.length; j++) {
            if (word.search(new RegExp(`^${ubahKata[j]},?\\.?$`, "*")) !== -1) {
                word = word.replace(ubahKata[j], replaceWords[j])
            }
        }
        return word;
    }).join(' ');
}

console.log(Paragraf, "\n");
console.log(sensor(Paragraf, ubahKata));