// TODO
//*   ABC 123 C - Five Transportations

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, a, b, c, d, e] = input.trim().split('\n').map(n => parseInt(n, 10));

    //* 解法：
    //* もっとも「きつい」交通機関を考える
    //* Math.ceil(n人/最小キャパ)+4分
    //* ⇒Math.ceil(n人/最小キャパ)は、全員が最小キャパを乗るための回数
    //* ⇒+4分は最小キャパ以外の乗る時間
    //* 
    let ans = Math.ceil(n/Math.min(a,b,c,d,e))+4;
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
