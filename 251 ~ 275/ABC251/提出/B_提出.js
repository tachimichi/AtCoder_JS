// TODO
//*   ABC 251 B - At Most 3 (Judge ver.)

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    let count = 0;

    // console.log(n, w);
    // console.log(a);
    const strMap = new Map();
    for (let i = 0; i < a.length; i++) {
        if (strMap.has(a[i])) {
            continue;
        } else {
            strMap.set(a[i], 1);
            // ============
            if (a[i] <= w) count++;
            for (let j = i + 1; j < a.length; j++) {
                const ww = a[i] + a[j];
                if (strMap.has(ww)) {
                    continue;
                } else {
                    strMap.set(ww, 1);
                    // =============
                    if (ww <= w) count++;
                    for (let k = j + 1; k < a.length; k++) {
                        const sum = a[i] + a[j] + a[k];
                        if (strMap.has(sum)) {
                            continue;
                        } else {
                            strMap.set(sum, 1);
                            if (sum <= w) count++;
                        }
                    }
                }
            }
        }
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}