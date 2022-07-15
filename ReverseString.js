//approach - 1

var s = "thisisastring";
var t = s.split('');
var newArray = [];
for (var i = t.length - 1; i >= 0; i--) {
  newArray.push(t[i]);
}
console.log(newArray.join(''));

//another approach

reversestring = function(str) {
  let newstr = [...str];
  let pointer1 = 0;
  let pointer2 = newstr.length - 1;
  
  while (pointer1 < pointer2) {
    var temp;
    temp = newstr[pointer1];
    newstr[pointer1] = newstr[pointer2];
    newstr[pointer2] = temp;

    pointer1++;
    pointer2--;
  }

  return newstr.join("");
};

console.log(reversestring("Hello"));