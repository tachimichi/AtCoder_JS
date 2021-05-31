// TODO
//*   ABC 113 B - Palace

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const [t, a] = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const h = input[2].trim().split(' ').map(n => parseInt(n, 10));

    const palace = [];
    for (let i = 0; i < n; i++) {
        const temperature = parseFloat(t - h[i] * 0.006);
        palace.push([i + 1, temperature]);
    }
    // console.log(palace);

    let min = 10e6;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const abs = Math.abs(a - palace[i][1]);
        if (abs < min) {
            ans = palace[i][0];
            min = abs;
        }
    }
    console.log(ans);
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