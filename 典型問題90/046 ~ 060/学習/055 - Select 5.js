// TODO
//*    055 - Select 5

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    //* parseIntだとWAになる
    // const [n, p, q] = input[0].split(' ').map(n => parseInt(n, 10));
    // const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* BigIntだとTLEになる
    const [n, p, q] = input[0].split(' ').map(n => BigInt(n));
    const a = input[1].split(' ').map(n => BigInt(n));

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const s2 = a[i] * a[j] % p;
            for (let k = 0; k < j; k++) {
                const s3 = s2 * a[k] % p;
                for (let l = 0; l < k; l++) {
                    const s4 = s3 * a[l] % p;
                    for (let m = 0; m < l; m++) {
                        // ans += BigInt(s4) * BigInt(a[m]) % BigInt(p) == BigInt(q);
                        ans += s4 * a[m] % p == q;
                    }
                }
            }
        }
    }
    console.log(ans);
    // console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/055.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}