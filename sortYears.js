// wrong 
// Write your code here:
const sortYears = (arr) => {
  let newArray = [];
  arr.sort();
  for (let i = arr.length-1; i >= 0;i--){
    arr.push(newArray);
  }
  return arr;
}






// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 
//right 
const sortYears = arr => arr.sort((x, y) => y - x);

/*
// As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
