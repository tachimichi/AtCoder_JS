// TODO
//*   ABC 075 B - Minesweeper

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    let t = [];
    let ans = [];
    for (let i = 1; i <= h; i++) {
        //標準入力用
        const a = input[i].trim().split('');
        a.unshift('.');
        a.push('.');
        t.push(a);
        //カウント用
        const list = new Array(w).fill(0);
        list.unshift(0);
        list.push(0);
        ans.push(list);
    }
    //余白計算用
    const mod = new Array(w + 2).fill('.');
    t.unshift(mod);
    t.push(mod);

    const zero = new Array(w + 2).fill(0);
    ans.unshift(zero);
    ans.push(zero);
    // ---------------------------------------------

    for (let i = 1; i < h + 1; i++) {
        for (let j = 1; j < w + 1; j++) {
            if (t[i][j] == '#') {
                // console.log(i, j);

                ans[i - 1][j - 1]++;
                ans[i - 1][j]++;
                ans[i - 1][j + 1]++;
                ans[i][j - 1]++;
                ans[i][j + 1]++;
                ans[i + 1][j - 1]++;
                ans[i + 1][j]++;
                ans[i + 1][j + 1]++;
            }
        }
    }
    for (let i = 1; i < h + 1; i++) {
        for (let j = 1; j < w + 1; j++) {
            if (t[i][j] == '#') {
                ans[i][j] = '#';
            }
        }
    }
    ans.shift();
    ans.pop();
    for (let i = 0; i < ans.length; i++) {
        ans[i].shift();
        ans[i].pop();
        console.log(ans[i].join(''));
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