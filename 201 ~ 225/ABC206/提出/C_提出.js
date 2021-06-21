// TODO
//*   ABC 206 C - Swappable

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let mp = new Map();

    let ans = 0;
    for (let i = 0; i < n; i++) {

        if (mp.has(a[i])) {
            //* ある場合、重複していない分だけ条件を満たすことができる
            //* 重複+1をa[i]にセットする
            ans += i - mp.get(a[i]);
            mp.set(a[i], mp.get(a[i]) + 1);

        } else {
            //* ない場合、過去の数値分だけ条件を満たすことができる
            //* a[i]に1をセットする
            ans += i;
            mp.set(a[i], 1);
        }
    }
    console.log(mp);
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
