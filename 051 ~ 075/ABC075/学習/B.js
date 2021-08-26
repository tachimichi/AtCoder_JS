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
        ans.unshift(0);
        ans.push(0);
        ans.push(list);
    }
    const mod = new Array(w + 2).fill('.');
    t.unshift(mod);
    t.push(mod);
    console.log(t);

    const zero = new Array(w + 2).fill(0);
    ans.unshift(zero);
    ans.push(zero);
    console.log(ans);
    // ---------------------------------------------

    for (let i = 1; i < h + 1; i++) {
        for (let j = 1; j < w + 1; j++) {
            if (t[i][j] == '#') {
                console.log(i, j);

                ans[i - 1][j - 1]++;
                ans[i][j - 1]++;
                ans[i + 1][j - 1]++;
                ans[i][j - 1]++;
                ans[i][j + 1]++;
                ans[i + 1][j - 1]++;
                ans[i + 1][j]++;
                ans[i + 1][j + 1]++;
            }
        }
    }
    console.log(ans);

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));