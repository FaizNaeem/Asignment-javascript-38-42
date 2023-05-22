// Custom function to calculate power
//  1st 
// function power(a, b) {
//     let result = 1;
  
//     for (var i = 0; i < b; i++) {
//       result *= a;
//     }
  
//     return alert( result);
    
//   }

//   let name_1 =power()
//     alert(name_1)
  // 2nd
//   function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return alert(" It's a leap year"); // It's a leap year
//     } else {
//       return alert( "It's not a leap year"); // It's not a leap year
//     }
//   }
//   isLeapYear(prompt("enter num"))
  // 3rd
  // Custom function to calculate triangle area
// function calculateTriangleArea(a, b, c) {
//     var s = (a + b + c) / 2;
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;

//   }

//   let name_1 = calculateTriangleArea(2,6,6)
//   alert(name_1)
//   4th
  // Function to calculate average marks
// function calculateAverage(subject1, subject2, subject3) {
//     var totalMarks = subject1 + subject2 + subject3;
//     var average = totalMarks / 3;
//     return average;
//   }
  
//   // Function to calculate percentage marks
//   function calculatePercentage(subject1, subject2, subject3) {
//     var totalMarks = subject1 + subject2 + subject3;
//     var totalObtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (totalObtainedMarks / totalMarks) * 100;
//     return percentage;
//   }
  
//   // Main function
//   function mainFunction(subject1, subject2, subject3) {
//     var average = calculateAverage(subject1, subject2, subject3);
//     var percentage = calculatePercentage(subject1, subject2, subject3);
  
//     console.log("Average Marks: " + average);
//     console.log("Percentage: " + percentage + "%");
//   }
  
//   // Call main function with marks for 3 subjects
//   mainFunction(80, 75, 90);
//  5th
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1; // Character not found
  }
  
var str = "Hello, World!";
var char = "o";
var index = customIndexOf(str, char);
console.log(index); // Output: 4

 // 6th
 function deleteVowels(sentence) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var result = "";
  
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence[i];
      if (!vowels.includes(char)) {
        result += char;
      }
    }
  
    return result;
  }
  var sentence = "Hello, World!";
  var modifiedSentence = deleteVowels(sentence);
  console.log(modifiedSentence); 
  //  7th
  function countSuccessiveVowels(text) {
    var count = 2;
  
    for (var i = 0; i < text.length - 1; i++) {
      var char1 = text[i];
      var char2 = text[i + 1];
  
      switch (char1) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
          switch (char2) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
              count++;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  
    return count;
  }
  var text = "This is a sample sentence.";
  var occurrences = countSuccessiveVowels(text);
  console.log(occurrences); // Output: 2
//   8th
// Function to convert distance to meters
function convertToMeters(distance) {
    return distance * 1000;
  }
  
  // Function to convert distance to feet
  function convertToFeet(distance) {
    return distance * 3280.84;
  }
  
  // Function to convert distance to inches
  function convertToInches(distance) {
    return distance * 39370.1;
  }
  
  // Function to convert distance to centimeters
  function convertToCentimeters(distance) {
    return distance * 100000;
  }
  
  // Function to print distance conversions
  function printDistanceConversions(distance) {
    var meters = convertToMeters(distance);
    var feet = convertToFeet(distance);
    var inches = convertToInches(distance);
    var centimeters = convertToCentimeters(distance);
  
    console.log("Distance in meters: " + meters);
    console.log("Distance in feet: " + feet);
    console.log("Distance in inches: " + inches);
    console.log("Distance in centimeters: " + centimeters);
  }
  
  // Call the function with distance in kilometers
//   var distanceInKm = 100;
//   printDistanceConversions(distanceInKm);
  var distanceInKm = 100;
  printDistanceConversions(distanceInKm);
    
    
    