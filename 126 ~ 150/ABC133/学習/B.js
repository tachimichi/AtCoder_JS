// TODO
//*   ABC 133 B - Good Distance

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = input.trim().split('\n');
    const [n, d] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let t = [];
    for(let i = 1; i <= n; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(a);
    }
    console.log(t);
    
    let count = 0;

    for(let i = 0; i < t.length-1; i++) {
        for(let j = i+1; j < n; j++) {
            let dis = 0;
            for (let k = 0; k < d; k++) {
                dis += Math.pow(Math.abs(t[i][k] - t[j][k]), 2);
            }
            dis = Math.sqrt(dis);
            if(Number.isInteger(dis)) count++;
            // console.log(dis);
        }
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));