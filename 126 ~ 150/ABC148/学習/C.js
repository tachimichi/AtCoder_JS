// TODO
//*   ABC 149 C - Next Prime

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));

    let sum = lcm(a, b);
    console.log(sum);

}


function lcm(a,b) {
    var g = (n, m) => m ? g(m, n % m) : n
    return a * b / g(a, b)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));