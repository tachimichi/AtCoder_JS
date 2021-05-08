// TODO
//*   ABC 200 C - Ringo's Favorite Numbers 2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0],10);
    let a = input[1].trim().split(' ').map(n => parseInt(n,10));

    let t = new Array(200).fill(0);
    // console.log(t);
    for(let i = 0; i < n; i++) {
        let amari = a[i] % 200;
        t[amari]++;
    }
    // console.log(t);

    let ans = 0;
    for(let i = 0; i < t.length; i++) {
        ans += (t[i] * (t[i]-1))/2;
    }
    console.log(ans);

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