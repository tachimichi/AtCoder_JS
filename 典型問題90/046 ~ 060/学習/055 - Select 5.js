// TODO
//*    055 - Select 5

const BigInteger = require("big-integer");

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    //* parseIntだとWAになる
    // const [n, p, q] = input[0].split(' ').map(n => parseInt(n, 10));
    // const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* BigIntだとTLEになる
    // const [n, p, q] = input[0].split(' ').map(n => BigInt(n));
    // const a = input[1].split(' ').map(n => BigInt(n));
    //* 
    const [n, p, q] = input[0].split(' ').map(n => BigInteger(n));
    const a = input[1].split(' ').map(n => BigInteger(n));

    // console.log(a);

    // const c100x5 = (100 ** 5) / 120;
    // console.log(c100x5);


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

    //* -------------------------------------
    //* combinationN関数による実装
    // let count = 0;
    // for (const A of combinationN(a, 5)) {
    //     // console.log(c);
    //     if (A[0] * A[1] % p * A[2] % p * A[3] % p * A[4] % p == q) count++;
    // }
    // console.log(count);
    //* -------------------------------------
    //* solve関数による実装
    // let ans = solve(0, 0, n, 1n, p, q, a);
    // console.log(ans);
}

function solve(depth, begin, end, v, p, q, a) {
    depth++;
    ans = 0;
    if (depth == 5) {
        for (let i = begin; i < end; i++) {
            // let BigIntcheck = parseInt(BigInt(v) * BigInt(a[i]), 10);
            let BigIntcheck2 = BigInt(v) * BigInt(a[i]);
            // console.log(BigIntcheck2);
            // console.log(BigIntcheck.toString() == BigIntcheck2.toString());
            // if (BigIntcheck.toString() == BigIntcheck2.toString()) {
            //     if (BigIntcheck % p == q) {
            //         ans++;
            //     }
            // } else {
            //     if (BigIntcheck2 % BigInt(p) == BigInt(q)) {
            //         ans++;
            //     }
            // }
            if (BigIntcheck2 % BigInt(p) == q) {
                ans++;
            }
            // console.log(depth);
        }
        return ans;
    }

    for (let i = begin; i < end; i++) {
        // let BigIntcheck = parseInt(BigInt(v) * BigInt(a[i]), 10);
        let BigIntcheck2 = BigInt(v) * BigInt(a[i]);

        let vv = 0;
        vv = (BigIntcheck2 % BigInt(p)).toString();

        // if (BigIntcheck.toString() == BigIntcheck2.toString()) {
        //     vv = (BigIntcheck2 % BigInt(p)).toString();
        //     // vv = BigIntcheck % p;
        // } else {
        //     vv = (BigIntcheck2 % BigInt(p)).toString();
        //     // vv = BigIntcheck2 % p;
        // }
        ans += solve(depth, i + 1, end, vv, p, q, a);
    }
    return ans;
}

function* combinationN(array, n) {
    if (n === 1) {
        for (const a of array) {
            yield [a];
        }
        return;
    }

    for (let i = 0; i <= array.length - n; i++) {
        for (const c of combinationN(array.slice(i + 1), n - 1)) {
            yield [array[i], ...c];
        }
    }
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