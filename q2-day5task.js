

var jsonresume =  {
    "name" : "Gowtham" ,
    "Course" : "FSD",
    "Year of passed out" : 2021,
    "Qualification" : "BE " ,
    "Stream" : "EEE",
    "Contact no" : 8825411595,
    "City" : "chennai",
    "country" : "India"
    
    
    };
   

    console.log("Iterating JSON using for in loop");
for ( key in jsonresume) {

    console.log(key + ": "+jsonresume[key]);

  }
  console.log(" ");
 
  var Jsonkeys = Object.keys(jsonresume);
  var len = Jsonkeys.length;

  console.log("Iterating JSON using for  loop");
for ( var i =0 ; i< len ; i++ ) {
console.log(Jsonkeys[i] + ":" +Jsonkeys[i]);


}


console.log(" ");

console.log(" Iterating JSON using for each ");

Jsonkeys.forEach((keys ) =>{

    console.log(keys + ":"+jsonresume[keys]);
 });

 console.log(" ");
 console.log("using for of ");

 for (var keylists of Jsonkeys) {
  console.log(keylists + ": " + jsonresume[keylists]);

 }
 

//
//  o/p : 

// Iterating JSON using for in loop
// name: Gowtham
// Course: FSD
// Year of passed out: 2021
// Qualification: BE 
// Stream: EEE
// Contact no: 8825411595
// City: chennai
// country: India
 
// Iterating JSON using for  loop
// name:name
// Course:Course
// Year of passed out:Year of passed out
// Qualification:Qualification
// Stream:Stream
// Contact no:Contact no
// City:City
// country:country
 
//  Iterating JSON using for each 
// name:Gowtham
// Course:FSD
// Year of passed out:2021
// Qualification:BE 
// Stream:EEE
// Contact no:8825411595
// City:chennai
// country:India
 
// using for of 
// name: Gowtham
// Course: FSD
// Year of passed out: 2021
// Qualification: BE 
// Stream: EEE
// Contact no: 8825411595
// City: chennai
// country: India