let allMember = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function sort(allMember, NumPerGroup) {
    let no = 1,
        tempArr = [],
        group = {};
    originalLength = allMember.length;
    for (let i = 1; i <= originalLength; i++) {
        let curLength = allMember.length - 1,
            random = Math.floor(Math.random() * curLength),
            less = curLength % NumPerGroup;
        tempArr.push(allMember[random]);
        allMember.splice(random, 1);
        if (tempArr.length === NumPerGroup) {
            group[`${no}组`] = tempArr;
            no++;
            tempArr = [];
        }
        if (i > originalLength - less) {
            tempArr.push(allMember[random]);
            allMember.splice(random, 1);
        }
    }
    group[`${no}组`] = tempArr;
    return group;
}

let r = sort(allMember, 3);
console.log(r);