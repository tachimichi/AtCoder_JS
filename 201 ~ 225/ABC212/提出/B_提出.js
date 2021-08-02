// TODO
//*   ABC 212 B - Weak Password

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const x = input.trim().split('').map(n => parseInt(n, 10));
    const num = "01234567890".split('').map(n => parseInt(n, 10));

    if (x[0] == x[1] && x[1] == x[2] && x[2] == x[3]) return console.log('Weak');

    for (let i = 0; i < x.length - 1; i++) {
        const testNum = x[i];
        const nextNum = x[i + 1];
        for (let j = 0; j < num.length - 1; j++) {
            if (testNum == num[j]) {
                if (nextNum != num[j + 1]) return console.log('Strong');
            }
        }
    }
    console.log('Weak');

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}