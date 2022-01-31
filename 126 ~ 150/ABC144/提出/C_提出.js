// TODO
//*   ABC 144 C - Walk on Multiplication Table

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = BigInt(input);
    let ans = BigInt(10e12); //* maxの値

    //? 整数i,jの小さい方は、√n以下の数字となる
    for (let i = 1n; i * i <= n; i++) {

        //* n % i(=a)で余りが出る場合
        if (n % i != 0) continue;

        //* n % a == 0のとき、b = n/aとなる
        let j = BigInt((n / i).toString());

        ans = Math.min(ans.toString(), (i + j - 2n).toString());

    }
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
