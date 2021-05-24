// TODO
//*    046 - I Love 46

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    const b = input[2].split(' ').map(n => parseInt(n, 10));
    const c = input[3].split(' ').map(n => parseInt(n, 10));

    let am = new Array(46).fill(0);
    let bm = new Array(46).fill(0);
    let cm = new Array(46).fill(0);

    //* A,B,Cも46で割った余りに着目する
    //* ⇒「同じ意味」のものをまとめて考えられるようにする
    //* 46^3 = 97336通りのみ（全探索が可能）
    //* Ai = xとなる個数をax
    //* Bj = yとなる個数をby
    //* Ck = zとなる個数をcz
    //* (x,y,z)の組み合わせはax * by * cz
    //* 
    //* x+y+z % 46 == 0に対する組み合わせの数が答え

    for(let i = 0; i < n; i++) {
        am[a[i] % 46]++;
        bm[b[i] % 46]++;
        cm[c[i] % 46]++;
    }

    let count = 0;
    
    for(let i = 0; i < 46; i++) {
        for(let j = 0; j < 46; j++) {
            for(let k = 0; k < 46; k++) {
                if((i+j+k) % 46 == 0) {
                    count += am[i] * bm[j] * cm[k];
                }
            }
        }
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/046.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}