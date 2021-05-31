// TODO
//*   ABC 113 C - ID

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let t = [];
    for (let i = 1; i <= m; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push([...a, i]);
    }
    // console.log(t);
    //* 複数キーのソート
    //* 最初に[0]の項目を比較ソート、同じ場合は[1]をソート
    t.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] > b[1] ? 1 : -1;
        } else {
            return a[0] > b[0] ? 1 : -1;
        }
    });
    // console.log(t);

    let ans = [];
    let p = 0;
    let x = 0;
    for (let i = 0; i < m; i++) {
        //* 県コードが前回と一致しているか確認
        if (p === t[i][0]) {
            //* 認識番号を増加
            x++;
        } else {
            //* pに新しい県コードを付与
            //* 認識番号は1に再設定
            p = t[i][0];
            x = 1;
        }
        //* push：ゼロパディング法、
        //TODO 3つ目にindexをpushする。
        ans.push([
            ('000000' + t[i][0]).slice(-6) +
            ('000000' + x).slice(-6),
            t[i][2]
        ]);
    }

    // console.log(ans);
    ans.sort((a, b) => a[1] - b[1]);
    // console.log(ans);
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i][0]);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
