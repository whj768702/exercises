// var  = [1,2,3,1,2,3,4,6,8,9,10]
// 生成 ['1-3','1-4,'6','8-10']
const arr = [1,2,3,1,2,3,4,6,7,8,9,10];

function format(arr) {
  const length = arr.length;
  const result = []; 
  
  for (let i=0;i<length;i++) {
    let startNumber = arr[i];
    let endNumber = undefined;
    for(let j=i+1;j<=length;j++) {
      if (arr[j]-arr[j-1]===1) {
        endNumber = arr[j];
      } else {
        result.push({
          startNumber,
          endNumber,
          line: !!endNumber
        });
        i = j-1;
        break;
      }
    }
  }
  return result.map(item => (item.line?`${item.startNumber}-${item.endNumber}`:item.startNumber))
}

const temp = format(arr);

console.log(temp);