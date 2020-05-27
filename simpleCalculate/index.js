/**
 *
 * 简易版计算器，直接传表达式str即可得到结果，str中不能有浮点数，否则NaN，可有多余空格
 *
 * @param {*} str
 * @returns String
 */
function calculate(str) {
    let char = 'a', //形参名
        tempStr = str,
        numsArr = [], //实参集合
        paramsArr = []; //形参集合
    // 若还有数字
    while (tempStr.match(/\d+/)) {
        // 输出格式：[ '34', index: 0, input: '34 + (5-3)*2', groups: undefined ]
        let num = tempStr.match(/\d+/)[0];
        // 每个数字
        numsArr.push(num * 1);
        //新str覆盖旧str
        tempStr = tempStr.replace(num, char)
        paramsArr.push(char)
        //重新拼接一个新形参名
        char += 'a'
    }
    // console.log('paramsArr', paramsArr)
    // console.log('numsArr', numsArr)
    let cal = new Function(paramsArr, `return ${tempStr}`)
    return cal(...numsArr);
}


let r1 = calculate('34 + (5-3)*2'); //38
console.log('r1', r1) //pass
let r2 = calculate('100 / 2 + (2*  5    )'); //60
console.log('r2', r2) //pass
let r3 = calculate('9-2+5-1+        4-5+ 1/ 5 *       5'); //11
console.log('r3', r3) //pass
let r4 = calculate('2**4'); //16
console.log('r4', r4) //pass
let r5 = calculate('99.5 - 10.2'); //89.3
console.log('r5', r5) //fail
let r6 = calculate('11/3.0'); //3.666……
console.log('r6', r6) //fail