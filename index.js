const difftext1 = document.getElementById("text1");
const difftext2 = document.getElementById("text2");
// document.getElementById("#compareButton").addEventListener("click", compare);

var el = document.getElementById("compareButton");
if(el){
  el.addEventListener("click", compare);
}

function getDiff(text1,text2){
console.log(text1);
console.log(text2);
  var diffRange = []
  var currentRange = undefined
  for(var i=0;i<text1.length;i++){
    if(text1[i] != text2[i]){
      if(currentRange == undefined){
        currentRange = [i]
      }
    }
    if(currentRange != undefined && text1[i] == text2[i]){
      currentRange.push(i)
      diffRange.push(currentRange)
      currentRange = undefined
    }
  }
  if(currentRange != undefined){
    currentRange.push(i)
    diffRange.push(currentRange)
  }
  return diffRange;
}

/* var text1 = "that is number 125, also what more"
var text2 = "this is number 123; also no more" */

function compare(){
var text1 = document.getElementById("first").value;
var text2 = document.getElementById("second").value;
console.log(text1);
var diffRange = getDiff(text1,text2)
var element = document.createElement('p')
console.log(diffRange);
console.log(diffRange.length);
for(var i=diffRange.length-1;i>=0;i--){
  var range = diffRange[i]
  var s = range[0]
  var e = range[1]
  text1 = text1.slice(0,s) + "<span class='highlight'>" + text1.slice(s,e) + "</span>" + text1.slice(e)
  text2 = text2.slice(0,s) + "<span class='highlight'>" + text2.slice(s,e) + "</span>" + text2.slice(e)
}

difftext1.innerHTML = text1
difftext2.innerHTML = text2
document.body.appendChild(difftext1)
document.body.appendChild(difftext2)
}