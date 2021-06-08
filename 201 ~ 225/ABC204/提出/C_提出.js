// TODO
//*   ABC 204 C - Tour

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    const lists = Array(n).fill().map(_ => Array()); //* 隣接リスト

    for (let i = 1; i <= m; i++) {
        let [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        //* 最小の地点を0に設定する方が便利
        a--, b--;
        lists[a].push(b);
        // e[a - 1].push(b - 1);
    }

    console.log(lists);
    //* ----------------------------------

    let ans = 0;
    let used;
    for (let i = 0; i < n; i++) {
        //* スタート地点が変わるたびに、リセットすること
        used = new Array(n).fill(false);
        //* スタート地点はtrueにする
        used[i] = true;

        let q = [];
        q.push(i);

        // console.log(q);
        // console.log(q.length);

        while (q.length > 0) {
            let v = q.shift();
            ans++;

            lists[v].forEach(w => {
                if (used[w] != true) {
                    used[w] = true;
                    q.push(w);
                }
            });
        }
    }
    console.log(ans);
}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
