// TODO
//*   ABC 228 B - Takahashi's Secret

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, x] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let array = new Array(n).fill(0);

    // x番目の要素からスタート
    let cnt = x - 1;

    // 配列[カウント]目が0ならループする
    while (array[cnt] == 0) {
        // 1にする
        array[cnt] = 1;
        // 次の広める人の要素数をcntに求める
        cnt = a[cnt] - 1;
    }

    let ans = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) ans++;
    }
    console.log(ans);
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