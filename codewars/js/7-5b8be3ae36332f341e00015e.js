function solve(s, k) {
  let arr = s.split(" ");
  let numArr = [];
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      numArr.push(arr[i]+arr[j]);
      numArr.push(arr[j]+arr[i])
    }
  }
  let ret = [];
  for(let i=0;i<numArr.length;i++){
    if(Number.parseInt(numArr[i])%k===0) {
      ret.push(numArr[i]);
    }
  }
  return ret.length;
}
console.log(solve("1 2 36 4 8", 2));