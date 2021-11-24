// TODO
//*   ABC 221 B - typo

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let a = input[0].trim().split('');
    let s = input[0].trim().split('');
    let b = input[1].trim().split('');

    // console.log(a);
    // console.log(s);
    // console.log(b);
    // console.log(a.length);

    let isOK = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            isOK = false;
        }
        if (isOK == false) break;
    }
    if (isOK) return console.log('Yes');

    //* --------------------------------------
    for (let i = 0; i < a.length - 1; i++) {

        let count = 0;
        //* ただの=だと、値渡しとなり元の配列も変更の影響を受ける
        //https://qiita.com/takahiro_itazuri/items/882d019f1d8215d1cb67
        a = s.concat();

        // 文字列の入れ替え
        let t = a[i];
        a[i] = a[i + 1];
        a[i + 1] = t;

        //* ---------------------------------------
        // 文字列の比較検証
        for (let j = 0; j < a.length; j++) {
            if (a[j] !== b[j]) {
                isOK = false;
            } else {
                count++;
            }

            if (count == a.length) {
                // console.log('count', count);
                return console.log('Yes');
            }
        }
        // console.log('count' + i, count);
    }
    console.log('No');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));