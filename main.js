/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

for (key in students) {
   console.log(students[key]);
}


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
let reverseArray = grades.reverse()
for (key in reverseArray) {
  console.log(reverseArray[key]);
}


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for (key in positiveNumbers) {
  if (positiveNumbers[key] % 2 === 0){
  console.log(positiveNumbers[key]);
}
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for (key in mixedSignNumbers) {
  if (mixedSignNumbers[key] % 2 === 0){
  console.log(mixedSignNumbers[key]);
 }
}



// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.splice(0,2);
symmetricalCapitals.splice(symmetricalCapitals.length-1,1);

for (key in symmetricalCapitals) {
  console.log(symmetricalCapitals[key]);
}



// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(0);
fibonacciNumbers.push(15);
fibonacciNumbers.push(19);
for (key in fibonacciNumbers) {
  console.log(fibonacciNumbers[key]);
}


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

const months = [
  'January',
  'February',
  'March',
  'April',
  'May'
];
for (key in months) {
  console.log(months[key]);
}


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const myNumbers = []
myNumbers.unshift(20);
myNumbers.unshift(10);
myNumbers.unshift(5);

myNumbers.push(30);
myNumbers.push(40);

for (key in myNumbers) {
  console.log(myNumbers[key]);
}


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
for (let i = 3 ; i < 11 ; i++){
  console.log(students[i]);
}

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.

const myStudents = []
for (let i = 3 ; i < 11 ; i++){
  myStudents.push(students[i]);
}
for (key in myStudents) {
  console.log(myStudents[key]);
}


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
let newStudents = students.slice(3, 11)
for (key in newStudents) {
  console.log("sliced Array: " + newStudents[key]);
}
for (key in students) {
  console.log("Original Array: " + students[key]);
}


// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
let newDinosaurs = dinosaurs.splice(4,3);
for (key in newDinosaurs ) {
  console.log("spliced Array: " + newDinosaurs[key]);
}
for (key in dinosaurs) {
  console.log("Original Array: " + dinosaurs[key]);
}


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

console.log(dinosaurs.join('*'));


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
 let reverseDino = dinosaurs.reverse()
 for (key in reverseDino) {
  console.log(reverseDino[key]);
}
// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

let newConcatArray = primaries.concat(secondaries);
for (key in newConcatArray) {
  console.log(newConcatArray[key]);
}
for (key in primaries) {
  console.log("Primary color: " + primaries[key]);
}
for (key in secondaries) {
  console.log("Primary color: " + secondaries[key]);
}
