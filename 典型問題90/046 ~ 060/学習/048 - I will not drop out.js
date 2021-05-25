// TODO
//*    048 - I will not drop out

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    let t = [];
    for(let i = 1; i <= n; i++) {
        const [a, b] = input[i].split(' ').map(n => parseInt(n, 10));
        //* 解法：アクションを考える
        //* 1. まだ取得していない部分点(b点)を得る
        //* 2. 部分点を取得した問題で、満点を得る(a-b点)
        t.push(b, a-b);
    }
    //* ポイント：
    //* 1つの問題に対して、b>a-bが保証されている
    //* ⇒部分点を経由せずに直接、満点を取得することは無い

    //* 降順
    t.sort((a,b) => b-a);
    // console.log(t);

    let ans = 0;
    for(let i = 0; i < k; i++) {
        ans += t[i]
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/048.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}