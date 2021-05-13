// TODO
//*   ABC 131 B - Bite Eating

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    const [n, l] = input.trim().split(' ').map(n => parseInt(n, 10));

    let max = 0;
    let count = 1;
    let t = [];
    for(let i = l; count <= n; i++) {
        max += i;
        count++;
        t.push(i);
    }

    let min = 201;
    let ans = 0;
    for (let i = 0; i < t.length; i++) {
        if(min > Math.abs(t[i])) {
            min = Math.min(min, Math.abs(t[i]));
            ans = t[i];
        }
    }

    console.log(max - ans);


}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));