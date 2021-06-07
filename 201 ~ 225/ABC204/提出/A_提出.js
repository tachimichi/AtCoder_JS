// TODO
//*   ABC 204 A - Rock-paper-scissors 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const a = input.trim().split(' ').map(n => parseInt(n, 10));
    // a.sort((a, b) => a - b);


    if (a[0] == 0 && a[1] == 1) {
        return console.log(2);
    }
    if (a[0] == 1 && a[1] == 0) {
        return console.log(2);
    }
    if (a[0] == 1 && a[1] == 2) {
        return console.log(0);
    }
    if (a[0] == 2 && a[1] == 1) {
        return console.log(0);
    }
    if (a[0] == 0 && a[1] == 2) {
        return console.log(1);
    }
    if (a[0] == 2 && a[1] == 0) {
        return console.log(1);
    }



    if (a[0] == a[1] && a[0] == 0) {
        return console.log(0);
    }
    if (a[0] == a[1] && a[0] == 1) {
        return console.log(1);
    }
    if (a[0] == a[1] && a[0] == 2) {
        return console.log(2);
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