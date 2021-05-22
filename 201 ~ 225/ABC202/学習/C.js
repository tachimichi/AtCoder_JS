// TODO
//*   ABC 201 C - Secret Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const b = input[2].trim().split(' ').map(n => parseInt(n, 10));
    const c = input[3].trim().split(' ').map(n => parseInt(n, 10));

    // console.log(n);
    // console.log(a);
    // console.log(b);
    // console.log(c);

    let count = 0;
    let arr = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        arr[b[c[i]-1]-1]++;
    }
    // console.log(arr);
    for(let i = 0; i < n; i++) {
        count += arr[a[i]-1];
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
