// TODO
//*   007 - CP Classes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const s = input[1].trim().split('')
    const mod = BigInt(10e8 + 7);

    let a = 0n;
    let at = 0n;
    let atc = 0n;
    let atco = 0n;
    let atcod = 0n;
    let atcode = 0n;
    let atcoder = 0n;
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if (s[i] == "a") a += 1n;
        else if (s[i] == "t") at += a;
        else if (s[i] == "c") atc += at;
        else if (s[i] == "o") atco += atc;
        else if (s[i] == "d") atcod += atco;
        else if (s[i] == "e") atcode += atcod;
        else if (s[i] == "r") atcoder += atcode;
    }
    console.log((atcoder % mod).toString());
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/008.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}