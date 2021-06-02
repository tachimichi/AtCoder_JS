// TODO
//*   ABC 108 C - Triangular Relationship

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, k] = input.trim().split(' ').map(n => parseInt(n, 10));

    //* 解法1：a % kの値で全探索
    //* a % k を決め打つ
    //* ⇒ b%k, c%kのとるべき値も一意に決まる
    //* (a+b, a+cもkの倍数であるため)
    //* そうして決まったb,cに対して
    //* kの倍数になっているかどうかチェックする
    const num = new Array(k).fill(0);
    // console.log(num);
    for (let i = 1; i <= n; i++) {
        num[i % k]++;
    }
    // console.log(num);

    let count = 0;
    for (let a = 0; a < k; a++) {
        const b = (k - a) % k;
        const c = (k - a) % k;
        if ((b + c) % k != 0) continue;

        count += num[a] * num[b] * num[c];
        // console.log(b, c);
        // console.log(num[a] * num[b] * num[c]);
    }
    // console.log(count);


    //* -----------------------------------------
    //* 解法2：計算量：O(1)
    if (k % 2 == 0) {
        const a = Math.floor(n / k);
        const b = Math.floor((n + (k / 2)) / k);
        console.log(a * a * a + b * b * b);
    } else {
        const a = Math.floor(n / k);
        console.log(a * a * a);
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
