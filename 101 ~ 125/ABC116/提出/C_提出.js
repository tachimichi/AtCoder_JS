// TODO
//*   ABC 117 C - Streamline

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    a.sort((a, b) => a - b);

    let t = [];
    for (let i = 0; i < m - 1; i++) {
        let x = a[i + 1] - a[i];
        t.push(x);
    }
    t.sort((a, b) => b - a);

    let ans = 0;
    //* 始点：区間が大きい値をn-1飛ばす。
    //* 移動最小化：m-n個の区間を最小の値で選択
    for (let i = n - 1; i < t.length; i++) {
        ans += t[i];
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
