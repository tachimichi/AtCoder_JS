// TODO
//*   ABC 218

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    // const [x, y] = input.trim().split('.').map(n => parseInt(n, 10));
    const n = parseInt(input[0], 10);
    const x = input[1].trim().split('');
    if (x[n - 1] == "o") {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));