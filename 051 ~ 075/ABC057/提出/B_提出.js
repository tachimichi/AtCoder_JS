// TODO
//*   ABC 057 B - Checkpoints

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = [];
    const b = [];
    for (let i = 1; i <= n; i++) {
        const [x, y] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        a.push(x);
        b.push(y);
    }
    const c = [];
    const d = [];
    for (let i = n + 1; i <= n + m; i++) {
        const [x, y] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        c.push(x);
        d.push(y);
    }
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);

    for (let i = 0; i < a.length; i++) {
        let ans = 10e9;
        let max = 10e9;
        for (let j = 0; j < c.length; j++) {
            const dis = Math.abs(a[i] - c[j]) + Math.abs(b[i] - d[j]);
            // 距離が短い場合
            if (dis < max) {
                max = dis;
                ans = j + 1;
            } else if (dis == max) {
                ans = Math.min(ans, j + 1);
            }
        }
        console.log(ans);
    }
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