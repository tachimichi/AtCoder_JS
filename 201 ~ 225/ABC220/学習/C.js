// TODO
//*   ABC 220 C - Long Sequence

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => BigInt(n));
    const x = BigInt(input[2]);

    const sum = a.reduce((sum, element) => sum + element, 0n);
    // console.log(sum);

    const t = x / sum;
    let mod = x % sum;

    console.log(t, a.length);
    console.log(sum, mod);

    let count = 0;
    let i = 0;
    while (true) {
        mod -= a[i];
        i++;
        count++;
        if (mod < 0n || count == 100000) {
            // console.log(mod);
            // console.log(count);
            break;
        }
    }
    console.log(t * BigInt(a.length));
    console.log(count);
    console.log((t * BigInt(a.length) + BigInt(count)).toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));