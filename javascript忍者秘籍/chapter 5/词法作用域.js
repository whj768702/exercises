var ninja = 'Muneyoshi';
var action = 'Global';

function report2() {
  var intro = 'Aha';
  console.log('report: ', intro, action);
}
function skulk() {
  var action = 'SKulking';
  report1();
  report2();

  function report1() {
    var intro = 'Aha';
    console.log('report: ', intro, action);
  }
}
skulk();