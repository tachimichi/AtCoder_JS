// TODO
//*   ABC 183 C - Travel

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    //* ------------------------------------
    let t = [];
    for(let i = 1; i <= n; i++) {
        t.push(input[i].split(' ').map(n => parseInt(n, 10)));
    }
    console.log(`初期n：${n}`);
    console.log(`初期k：${k}`);
    console.log(`初期t：`);
    console.log(t);
    console.log('----------------------');
    //* -------------------------------------
    let tmp = [];
    for (let i = 2; i <= n; i++) {
        tmp.push(i); 
    }
    console.log(`初期tmp：${tmp}`);
    console.log('--------------------------------');
    console.log('---------perm関数前-------------');
    //* -------------------------------------
    //? 順列を作成する（始点は1と決まっているため、そこを省略するためtmp=2）
    let p = permutation(tmp, n-1);
    let ans = 0;    
    console.log('---------perm関数後-------------');
    console.log(`p：`);
    console.log(p);


    for (let i = 0; i < p.length; i++) {
        //* 配列の最初に1を追加する(始点=1)
        p[i].unshift(1);
        //* 配列の末尾に1を追加する(終点=1)
        p[i].push(1);
        console.log('---------shift, unshift後-------------');
        console.log(`p：`);
        console.log(p);

        //* sumの初期化
        let sum = 0;
        
        //* 0 <= j < p[i].length-1 の全探索
        for (let j = 0; j < p[i].length-1; j++) {
            //* t[p[i][j]-1][p[i][j+1]-1]
            //? t[行(p移動前)][列(p移動後)]
            //* ⇒移動時間が求まる
            sum += t[p[i][j]-1][p[i][j+1]-1];
            console.log(`i：${i}、j：${j}`);
            console.log(` t[p[i][j]-1][p[i][j+1]-1]：${ t[p[i][j]-1][p[i][j+1]-1]}`);
            console.log(`sum：${sum}`);
            console.log(`-------------------`);
        }
        if (sum == k) ans++;
    }

    console.log(ans);
}

function permutation(nums, k) {
    // console.log(`perm関数の初期nums：${nums}`);
    // console.log(`perm関数の初期k：${k}`);
    // console.log('---------------------------');
    let ans = [];
    // console.log(`初期ans：${ans}`);
    //* 
    if(nums.length < k) return [];
    if(k === 1) {
        for(let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]];
        }
    } else {
        for(let i = 0; i < nums.length; i++) {
            let parts = nums.slice(0);
            // console.log('-----------------------');
            // console.log(`splice前：${parts}`);
            parts.splice(i, 1)[0];
            // console.log(`splice後：${parts}`);
            // console.log('-------------------------');
            let row = permutation(parts, k-1);
            // console.log(`row：${row}`);
            for (let j = 0; j < row.length; j++) {
                ans.push([nums[i]].concat(row[j]));
            }
        }
    }
    return ans;
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));