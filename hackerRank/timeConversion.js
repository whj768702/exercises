// https://www.hackerrank.com/challenges/time-conversion/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function timeConversion(s) {
  const length = s.length;
  const timePath = s.slice(0, length - 2);
  const timeType = s.slice(length - 2);
  // if (timeType === 'AM') {
  //   timePath[0] = (12 - parseInt(timePath[0])).toString();
  // } else {
  //   timePath[0] = ((12 + parseInt(timePath[0])) % 24).toString();
  // }
  // timePath[0].length === 1 ? (timePath[0] = '0' + timePath[0]) : timePath[0];
  // return timePath.join(':');
  if (timeType === 'AM') {
    if (timePath[0] === '1' && timePath[1] === '2') {
      return '00' + timePath.slice(2);
    }
    return timePath;
  } else {
    if (timePath[0] === '1' && timePath[1] === '2') {
      return '12' + timePath.slice(2);
    }
    return (parseInt(timePath) + 12).toString() + timePath.slice(2);
  }
}

console.log(timeConversion('12:45:54PM'));
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('07:05:45PM'));
