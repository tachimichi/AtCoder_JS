// TODO
//*   ABC 081 C - Not so Diverse

//* 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を\n（改行）で区切り配列として格納
    input = input.trim().split("\n");
    const [n, k] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    let arr = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        arr[a[i] - 1]++;
    }
    arr.sort((a, b) => b - a);
    // console.log(arr);
    let count = 0;
    for (let i = 0; i < k; i++) {
        count += arr[i]
    }
    console.log(n - count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

