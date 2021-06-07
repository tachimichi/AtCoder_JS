// TODO
//*   ABC 204 C - Tour

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    const cities = Array(n).fill().map(_ => Array()); //* 隣接リスト
    // console.log(cities);

    for (let i = 1; i <= m; i++) {
        let [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        a--, b--;
        cities[a].push(b);
        // e[a - 1].push(b - 1);
    }
    // console.log(cities);

    //* ----------------------------------
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const visited = new Set();
        //* 始点
        const stack = [cities[i]];
        visited.add(i);
        console.log("visited", visited);
        console.log("stack", stack);
        console.log("----------");

        while (stack.length) {
            const city = stack.pop();
            // console.log(city);

            for (let j = 0; j < city.length; j++) {
                const next = city[j];
                if (visited.has(next)) {
                    continue;
                } else {
                    stack.push(cities[next]);
                    visited.add(next);
                }
            }
        }
        console.log("ans", ans);
        console.log("----------------------");
        ans += visited.size;
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
