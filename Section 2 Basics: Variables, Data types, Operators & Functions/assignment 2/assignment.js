const task3Element = document.getElementById('task-3');


// functions
function justAlert () {
  alert('This is an alert');
}

function withName (name){
  alert(`hey this is ${name} writing some functions`);
}

function combine (str1, str2, str3) {
  const combinedText = str1 + str2 + str3;
  return combinedText;
}

// function threeStrings () {
//   let first = 'The quick brown fox';
//   let second = 'jump over the lazy';
//   let third = 'dog.';
//   const final = 'first ' + 'second ' + 'third' + ' . ';
// }
// threeStrings();
// console.log(threeStrings);
// alert(threeStrings);


// calling the functions
// justAlert();
withName('Fo');

task3Element.addEventListener('click', justAlert);

const combinedString = combine('hi', 'there', 'you');
alert(combinedString);