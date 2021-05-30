// TODO
//*   ABC 203

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(n => BigInt(n));
    
    let m = new Array(1001).fill(0n);
    let map = new Map();
    // console.log(m);

    // console.log(Math.pow(10, 100));

    let t = [];
    for(let i = 1; i <= n; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => BigInt(n));
        // m[a] += b;
        t.push([a,b]);
    }
    t.sort((a,b) => a[0].toString() - b[0].toString());
    // console.log(t);
    // console.log(m[1000]);

    let ans = 0n;
    let count = 0n;
    let isSafe = 0n;
    for(let i = 0; i < n; i++) {
        // console.log(t[i][0]);
        isSafe = k - t[i][0];
        if(isSafe >= 0) {
            for(let j = i; j < n; j++) {
                if(t[i][0] == t[j][0]) {
                    k += t[j][1];
                }
            }
        } else {
            // console.log(isSafe);
            // console.log((k-isSafe).toString());
            return console.log(k.toString());
        }
    }
    // console.log(isSafe);
    if(k > 1000){
        console.log(k.toString());
    } else {
        console.log((k-isSafe).toString());
    }

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
