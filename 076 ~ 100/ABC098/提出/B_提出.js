// TODO
//*   ABC 098 B - Cut and Count

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const str = input[1].trim().split('');
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    // console.log(alphabet);

    let ans = 0;
    for (let i = 1; i < n; i++) {
        let count = 0;

        for (let c = 0; c < alphabet.length; c++) {
            // console.log(alphabet[c]);
            let left = false;
            let right = false;

            //* left側の判定
            for (let j = 0; j < i; j++) {
                if (str[j] == alphabet[c]) left = true;
            }
            //* right側の判定
            for (let j = i; j < n; j++) {
                if (str[j] == alphabet[c]) right = true;
            }

            if (left && right) count++;
        }
        //* もしans < countなら、最大値として更新
        if (ans < count) ans = count;
    }
    console.log(ans);
    console.log(n * 26 * n * 2);
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