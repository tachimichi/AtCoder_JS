// TODO
//*   ABC 132 C - Divide the Problems

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let d = input[1].split(' ').map(n => parseInt(n, 10));

    d.sort((a,b) => a-b);

    //* 考え方：難易度
    //* ソートして、昇順に並び替える
    //* 後半の1番目と、前半の最後の数字を比較（引き算）
    //* その幅の値が難易度の動的幅
    //* 

    // console.log(d);
    // console.log(d[d.length / 2]);
    // console.log(d[d.length / 2 -1]);
    let ans = d[d.length / 2] - d[d.length / 2 -1];
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