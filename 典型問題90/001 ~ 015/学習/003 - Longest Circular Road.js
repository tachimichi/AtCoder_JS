// TODO
//*   003 - Longest Circular Road

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const graph = Array(n).fill().map(_ => Array()); //* 隣接リスト
    for (let i = 1; i < n; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        graph[a - 1].push(b);
        graph[b - 1].push(a);
    }
    const dist = new Array(n + 1).fill(Infinity);

    //* 頂点1からの最短距離を求める
    //* maxid1: 頂点1から最も離れている（最短距離が長い）頂点
    getDist(1);
    // console.log(dist);
    let maxn1 = -1;
    let maxid1 = -1;
    for (let i = 1; i <= n; i++) {
        if (maxn1 < dist[i]) {
            maxn1 = dist[i];
            maxid1 = i;
        }
    }
    // console.log(maxn1, maxid1);

    //* 頂点maxid1からの最短距離を求める
    //* maxn2: 木の直径（最短距離の最大値）
    getDist(maxid1);
    // console.log(dist);
    let maxn2 = -1;
    for (let i = 1; i <= n; i++) {
        maxn2 = Math.max(maxn2, dist[i]);
    }

    console.log(maxn2 + 1);

    function getDist(start) {
        //* 幅優先探索（BFS）により、最短距離を計算
        for (let i = 1; i <= n; i++) {
            dist[i] = Infinity;
        }
        let q = [];
        q.push(start);
        dist[start] = 0;

        while (q.length > 0) {
            const pos = q.shift();
            graph[pos - 1].forEach(to => {
                if (dist[to] == Infinity) {
                    dist[to] = dist[pos] + 1;
                    q.push(to);
                }
            });
        }
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/003.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}