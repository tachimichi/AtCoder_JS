// TODO
//*    067 - Base 8 to 9

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, k] = input.trim().split(' ').map(n => BigInt(n));
    const mod = 1000000007n;

    if (k == 1n) {
        const ans = (n == 1n) ? 1 : 0;
        return console.log(ans);

    } else if (n == 1n) {
        const ans = k % mod;
        return console.log(ans.toString());

    } else if (n == 2n) {
        const ans = k * (k - 1n) % mod;
        return console.log(ans.toString());

    } else {
        const ans = k * (k - 1n) % mod * calc(k - 2n, n - 2n) % mod;
        return console.log(ans.toString());

    }

    //* ------------------------------
    function calc(a, b) {
        let t = 1n;
        while (b != 0n) {
            if (b % 2n == 1n) {
                t = t * a % mod;
            }

            a = a * a % mod;
            b /= 2n;
        }
        return t;
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/069.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}