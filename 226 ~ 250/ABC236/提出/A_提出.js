// TODO
//*   ABC 236 A - chukodai

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const str = input[0].trim().split('');
    const [a, b] = input[1].trim().split(' ').map(n => parseInt(n, 10));
    let temp = str[a - 1];
    str[a - 1] = str[b - 1];
    str[b - 1] = temp;
    console.log(str.join(''));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}