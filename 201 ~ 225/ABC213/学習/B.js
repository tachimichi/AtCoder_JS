// TODO
//*   ABC 213 B - Booby Prize 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const b = input[1].trim().split(' ').map(n => parseInt(n, 10));
    // console.log(a);

    a.sort((a, b) => a - b);
    const value = a[a.length - 2];
    for (let i = 0; i < input[1].length; i++) {
        if (b[i] == value) {
            console.log(i + 1);
            break;
        }
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));