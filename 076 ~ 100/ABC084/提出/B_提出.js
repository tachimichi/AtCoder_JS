// TODO
//*   ABC 084 B - Postal Code

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [a, b] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const str = input[1].trim().split('-');
    // for (let i = 0; i < a; i++) {
    //     if (str[i])
    // }
    // console.log(str);
    if (str[0].length != a || str[1].length != b) {
        return console.log('No');
    }
    console.log('Yes');
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