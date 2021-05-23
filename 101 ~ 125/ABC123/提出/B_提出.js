// TODO
//*   ABC 123 B - Five Dishes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n')
    //* ----------------
    let sum = 0;
    let longest = 0;
    for(let i = 0; i < 5; i++) {
        let a = parseInt(input[i], 10);
        //* 切り上げの確認
        let ceil = Math.ceil(a / 10) *10;
        sum += ceil;
        //* 差が最大のを記録する
        if(ceil - a > longest) {
            longest = ceil - a;
        } 
    }
    //* 最終的に差が最大のものを引く
    console.log(sum - longest);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}