// Write a JavaScript program to create a new string
// adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.

// String: startsWith(searchString[,position=0])
// String: endsWith(searchString[,length])
// String: str.concat(string2[,string3,...,stringN]) 

function addingPy(str) {
  if (str.startsWith('Py')) {
    return str;
  } else {
    return 'Py'.concat(str);
  }
}
console.log(addingPy('Python'));
console.log(addingPy('thon'));