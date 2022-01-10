// TODO
//*   ABC 231 B - Election

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let map = new Map();
    for (let i = 1; i <= n; i++) {
        // データ加工
        input[i] = input[i].trim();
        // キーがあるか
        if (map.has(input[i])) {
            map.set(input[i], map.get(input[i]) + 1);
        } else {
            map.set(input[i], 1);
        }
    }
    let count = 0;
    let ans = '';
    map.forEach(function (value, key) {
        // console.log(value, key);
        if (value > count) {
            ans = key;
            count = value;
        }
    });
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