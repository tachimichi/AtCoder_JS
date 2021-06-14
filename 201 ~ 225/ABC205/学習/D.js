// TODO
//*   ABC 205 D - Kth Excluded

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, q] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => BigInt(n));
    let k = [];
    for (let i = 2; i < 2 + q; i++) {
        const t = BigInt(input[i]);
        k.push(t);
    }
    console.log(a);
    console.log(k);

    for (let i = 0; i < q; i++) {
        //* 左端と、右端の設定
        let ok = BigInt(0);
        let ng = BigInt(n) + 1n;

        //* 左と右が交わっていない時はループ
        while (ng - ok > 1n) {
            //* BigIntは小数点切り捨て
            let mid = ok + (ng - ok) / 2n;
            // console.log(mid);
            // console.log(a[mid - 1n]);
            //* a[mid(-1は0始点のため)] 
            if (a[mid - 1n] - mid < k[i]) {
                ok = mid;
            } else {
                ng = mid;
            }
        }
        console.log((k[i] + ok).toString());
        // console.log(ng);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/D.txt', 'utf8'));

