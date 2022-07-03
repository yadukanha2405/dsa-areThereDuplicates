import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// function areThereDuplicates(...arg) {
//   arg.sort((a,b)=> a-b);
//  let start =0;
//  let next = 1;
//  while(next<arg.length){
//    if(arg[start]=== arg[next]){
//      return true
//    }
//    start++
//    next++
//  }
//  return false;
// }
function areThereDuplicates(a, b, c, d) {
  let obj = {};
  for (let key in arguments) {
    obj[arguments[key]] = (obj[arguments[key]] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
}

let result = areThereDuplicates(1, 2, 5, 2);
console.log(result);
