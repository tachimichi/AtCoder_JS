// TODO
//*   033 - Not Too Bright

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [h, w] = input.trim().split(' ').map(n => parseInt(n, 10));

    let a = Math.ceil(h/2);
    let b = Math.ceil(w/2);

    //* コーナーケース
    //* 1. サンプルを解く
    //* 2. WAしそうな箇所を確認する

    if(h == 1 || w ==1) {
        console.log(h*w);
    } else {
        console.log(a*b);
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/033.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}