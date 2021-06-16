// TODO
//*    061 - Deck

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const q = parseInt(input[0], 10);
    // let t = [], x = [];
    let ans = [];
    for (let i = 1; i <= q; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        // t.push(a);
        // x.push(b);

        //* 条件に応じて、スタックとキューの実行
        //* スタック(LIFO)：最後に入れたものを先に取り出す、例：積み上げた本の取り出し
        //* キュー(FIFO)：最初に入れたものを先に取り出す、例：飲食店の行列
        if (a == 1) {
            ans.unshift(b);
        } else if (a == 2) {
            ans.push(b);
        } else {
            console.log(ans[b - 1]);
        }
    }
    // console.log(t);
    // console.log(x);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/061.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}