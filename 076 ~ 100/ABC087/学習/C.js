// TODO
//*   ABC 087 C - Candies

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const x = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const points = [0, ...x, 0];
    const difference = [];
    const ans = [];

    //* コールバック関数（要素、添え字、配列自体）
    points.forEach((point, i, self) => {
        // console.log(point);
        // console.log(i);
        // console.log(self);
        // console.log("-----");
        if (i < self.length - 1) {
            difference.push(Math.abs(self[i + 1] - self[i]));
        }
    });
    // console.log(difference);

    const sum = difference.reduce((a, b) => a + b);
    // console.log(sum);

    for (let i = 1; i < points.length - 1; i++) {
        const skip = Math.abs(points[i - 1] - points[i + 1]);
        const NoSkip = Math.abs(points[i - 1] - points[i]) + Math.abs(points[i] - points[i + 1]);

        const change = skip - NoSkip;
        ans.push(sum + change);
    }
    console.log(ans.join('\n'));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
