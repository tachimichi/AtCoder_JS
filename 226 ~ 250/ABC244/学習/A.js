// TODO
//*   ABC 244 A - Last Letter

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0].trim(), 10);
    let str = input[1].trim().split('');
    // console.log(str);
    console.log(str[n - 1]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));