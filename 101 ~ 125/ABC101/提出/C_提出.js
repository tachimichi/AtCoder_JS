// TODO
//*   ABC 101 C - Minimization

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    //* 解法1：
    const ans = Math.floor((n - 1 + k - 2) / (k - 1));
    console.log(ans);

    //* 解法2
    //* 交差している区間は互いに行き来できるものとする。
    //* 最小個数の区間を置いて、1〜N全体を行き来できるようにせよ。

    let ans2 = 0;
    let right = 0;
    while (true) {
        if (ans2 == 0) {
            right += k;
        } else {
            right += k - 1;
        }
        ans2++;

        if (right >= n) break;
    }
    // console.log(ans2);
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
