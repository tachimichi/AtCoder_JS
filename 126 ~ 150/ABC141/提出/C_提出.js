// TODO
//*   ABC 142 C - Go to School

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* ------------------------

    //* 逆順列
    //* 順列 P1,P2,…,PN の逆順列 Q
    //* for (int i = 0; i < N; ++i) Q[P[i]] = i
    //* 
    //* 逆順列 Q においては
    //* i は P[i] 番目の要素である

    let t = new Array(n);
    for(let i = 0; i < n; i++) {
        t[a[i]-1] = i+1;
    }
    // console.log(a.join(' '));
    console.log(t.join(' '));
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
