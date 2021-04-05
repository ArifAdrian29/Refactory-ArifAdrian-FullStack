const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(path.join(__dirname, '01.csv'), { encoding: 'utf8' });

function rubahCSV(content) {
    const arr = content.split(/[\n\r]+/ig);

    function rupiah(angka) {
        let rupiah = '';
        const angkarev = angka.toString().split('').reverse().join('');
        for (let i = 0; i < angkarev.length; i++)
            if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
        return 'Rp' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    const keys = arr.shift().split(', ').map(str => str.toLowerCase());
    const transformedArr = arr.map(item => {
        const values = item.split(', ');
        return keys.reduce((obj, key, i) => ({ ...obj, [key]: values[i] }), {});
    }).sort((a, b) => b.price - a.price)
        .map(item => ({ ...item, price: rupiah(parseInt(item.price)) }));

    return transformedArr;
}

const dataJSON = JSON.stringify(rubahCSV(data))
fs.writeFileSync('01.json', dataJSON);