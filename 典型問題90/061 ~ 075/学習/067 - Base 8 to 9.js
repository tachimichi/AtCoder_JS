// TODO
//*    067 - Base 8 to 9

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // let [n, k] = input.trim().split(' ').map(n => parseInt(n, 10));
    let [n, k] = input.trim().split(' ');

    //* 解法
    //* nを8進法として受け取る
    //? 0b(2進数) や 0o(8進数)、0x(16進数)を接頭辞として付ける
    //* 9進法として変換
    //* 数字の8を5へ書き直す
    //* 連結

    for (let i = 1; i <= k; i++) {

        // console.log(n); // 10進数

        //* '0o'を先頭に付けると8進数として認識する
        n = '0o' + n;
        n = BigInt(n);
        // console.log(n); // 8進数

        n = n.toString(9).split('');
        // console.log(n); // 9進数

        for (let j = 0; j < n.length; j++) {
            if (n[j] == "8") n[j] = "5";
        }
        n = n.join('');
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