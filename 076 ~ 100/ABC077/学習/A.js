// TODO
//*   ABC 077 A - Rotation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let a = input[0].trim().split('');
    let b = input[1].trim().split('');

    let isOK = "YES";
    for (let i = 0; i < 3; i++) {
        // console.log(a[i]);
        // console.log(b[2 - i]);
        if (a[i] != b[2 - i]) isOK = "NO";
    }
    console.log(isOK);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));


