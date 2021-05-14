// TODO
//*   027 - Sign Up Requests

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let t = [];
    for(let i = 1; i <= n; i++) {
        t.push(input[i].trim());
    }

    //* new Setで対応しようとしたらTLE
    //* ⇒2重forループとなり、O(N^2)となる
    //* 
    //* 前提：N <= 10^5はTLE
    //* 
    //* 解法：mapで管理
    //* O(logN)
    //* 
    //? if(mがt[i]を保持しているかチェック) {
    //?     持っている時の処理
    //? } else {
    //?     持っていない時の処理
    //? }


    let m = new Map();
    for (let i = 0; i < t.length; i++) {
        if(m.has(t[i])) {
            continue;
        } else {
            m.set(t[i], 1);
            console.log(i+1);
        }
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/027.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}