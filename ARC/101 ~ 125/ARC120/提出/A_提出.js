// TODO
//*   ARC 120 A - Max Add

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    // console.log(n);
    // console.log(a);

    let sum = 0;
    let max = 0;
    max = Math.max(max, ...a)
    // console.log(max);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            a[j] += max;
            max = Math.max(max, a[j]);
        }
        a.forEach(element => {
            sum += element;
        });
        console.log(sum);
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}