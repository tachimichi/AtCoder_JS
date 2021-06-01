// TODO
//*   ABC 112 C - Pyramid

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let x = [], y = [], h = [];
    for (let i = 1; i <= n; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        x.push(a[0]);
        y.push(a[1]);
        h.push(a[2]);
    }
    // console.log(x);
    // console.log(y);
    // console.log(h);

    //* 条件が1つの場合の処理
    const filterResult = h.filter(element => {
        return element > 0;
    });
    // console.log(filterResult);
    if (filterResult.length === 1) {
        for (let i = 0; i < h.length; i++) {
            if (h[i] == filterResult) {
                return console.log(x[i], y[i], h[i]);
            }
        }
    }

    for (let cx = 0; cx <= 100; cx++) {
        for (let cy = 0; cy <= 100; cy++) {
            let ok = true;
            let highest = -1;
            //* 
            for (let i = 0; i < n; i++) {
                if (h[i] > 0) {
                    const high = h[i] + Math.abs(x[i] - cx) + Math.abs(y[i] - cy);
                    console.log(high);
                    //* 初回の高さを決定する
                    if (highest < 0) highest = high;
                    //* 次の高さも、同じであればセーフ
                    if (highest != high) ok = false;
                }
            }
            console.log("---------------");
            if (ok) return console.log(cx, cy, highest);

        }
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
