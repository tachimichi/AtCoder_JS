// TODO
//*   ABC 100 C - *3 or /2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    //* 解法：
    //* *3 or /2 を選択する必要があるが、*3は関係ない
    //* a[i]の/2の回数を最大まで求めていく
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        while (a[i] % 2 == 0) {
            a[i] /= 2;
            sum++;
        }
    }
    console.log(sum);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
