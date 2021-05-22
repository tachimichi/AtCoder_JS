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

    let count = 0;
    //* n個分配列を用意する
    let arr = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        //* b[c[j]]に該当する箇所をカウントする
        arr[b[c[i]-1]-1]++;
    }
    // console.log(arr);
    for(let i = 0; i < n; i++) {
        //* 配列の中でa[i]と一致する場所を足していく
        count += arr[a[i]-1];
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
