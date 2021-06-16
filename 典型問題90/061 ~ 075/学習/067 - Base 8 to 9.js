// TODO
//*    067 - Base 8 to 9

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // let [n, k] = input.trim().split(' ').map(n => parseInt(n, 10));
    let [n, k] = input.trim().split(' ');

    for (let i = 1; i <= k; i++) {
        //* nを8進法として受け取る
        //* 9進法として変換
        //* 数字の8を5へ書き直す
        //* 連結

        // console.log(n);
        n = parseInt(n, 8);
        n = BigInt(n);
        // console.log(n);
        n = n.toString(9).split('');
        // console.log(n);

        for (let j = 0; j < n.length; j++) {
            if (n[j] == "8") n[j] = "5";
        }
        // console.log(n);
        n = n.join('');
        // console.log(n);
    }
    //* ループは9進法で終了しているため、8進法で出力
    console.log(n.toString(8));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/067.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}