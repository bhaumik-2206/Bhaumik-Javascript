// 1
// let stringLength = "Lets count length of this string";
// let count = stringLength.length;
// console.log(count);

// 2
// let uppercase = "hello";
// console.log(uppercase.toUpperCase());

// 3
// let findPosition = "Hello World";
// console.log(findPosition.indexOf("l"));

// 4
// let concatString = "Hello";
// let second = "World!"
// console.log(concatString.concat(" ", second));

// 5
// let extractPortion = "Hello World";
// console.log(extractPortion.slice(3, 10));
// console.log(extractPortion.slice(3));
// console.log(extractPortion.substring(3, 10));
// console.log(extractPortion.substring(3));

// 6
// let replaceString = "Good Morning";
// console.log(replaceString.replace("Morning", "Evening"));

// 7
// let splitString = "This is a string";
// console.log(splitString.split("s"));
// console.log(splitString.split(""));

// 8
// let trimString = "       Hello       world         ";
// console.log(trimString.trim());
// console.log(trimString);
// console.log(trimString.trimEnd());
// console.log(trimString.trimStart());

// 9
// let searchString = "search for everything";
// console.log(searchString.search("for"));

// 10
// let startString = "Hello , Good Morning , Everyone!";
// console.log(startString.startsWith("Hello"));
// console.log(startString.startsWith("Good", 9));

// 11
// const message = "Hello, World!";
// console.log(message.length);                             //We get the length of string

// 12
// const str = "HelloWorld";
// console.log(str.toLowerCase());                          //String convert to lower case

// 13
// const sentence = "I love JavaScript!";
// console.log(sentence.indexOf("JavaScript"));             //We get the index of Javascript

// 14
// const name = "John";
// const greeting = `Hello, ${name}!`;                      //This is the method we use the variable value in the string
// console.log(greeting);

// 15
// const text = "Hello, World!";
// console.log(text.substring(7));                          //We get the string from 7 to end

// 16
// const message = "Hello, World!";
// console.log(message.replace("World", "Universe"));       //Replace the string 

// 17
// const words = "apple, banana, orange";
// const fruits = words.split(", ");                        //We split the string where ", " are get and store in array ane this array are stored in fruits. 
// console.log(fruits);                                     //Here we print the array

// 18
// const text = "   Hello, World!   ";
// console.log(text.trim());                                //The string is trim start and end both side trim ignor white space in start and end.

// 19
// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("dog"));                   //If the dog in includes in string than return true

// 20
// const str = "Hello, World!";
// console.log(str.endsWith("!"));                          //If the string ends with ! than return true

// 21
// const sentence = "JavaScript is fun!";
// console.log(sentence.charAt(4));                         //We get the character at 4th index

// 22
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(", ", str2));                    //We concat the two strint with ", " comma

// 23
// const sentence = "JavaScript is awesome!";
// console.log(sentence.slice(0, 10));                      //The string is get from 0 to 10th index

// 24
// const text = "Hello, World!";
// console.log(text.repeat(3));                             //The string is repeat given(3) time

// 25
// const sentence = "The quick brown fox";
// console.log(sentence.split(" "));                        //Split the string where the " "(space) is get

// 26
// const str = "Hello, World!";
// console.log(str.indexOf("o"));                           //We get the index where the "o" is coming.

// 27
// const sentence = "JavaScript is fun!";
// console.log(sentence.substring(4, 10));                  //We get the string from 4 to 10 index

// 28
// const text = "Hello, World!";
// console.log(text.charAt(7));                             //We get the character at 7th index

// 29
// const sentence = "I love JavaScript!";
// console.log(sentence.split("o"));                        //Split the string where the "o" is coming in string

// 30
// const str = "Hello, World!";
// console.log(str.includes("World"));                      //If the given string is includes in string then return true else false

// 31
// const sentence = "JavaScript is cool!";
// console.log(sentence.lastIndexOf("o"));                  //We get the index of "o" but the compiler start searching from last.

// 32
// const text = "Hello, World!";
// console.log(text.startsWith("Hello"));	                //If the string start with Hello then return true else false

// 33
// const str = "Hello, World!";
// console.log(str.toUpperCase());                          //We convert full string in Upper case.

// 34
// const sentence = "JavaScript is awesome!";
// console.log(sentence.toLowerCase());                     //We convert full string in lower case.

// 35
// const str = "Hello, World!";
// console.log(str.charAt(13));                             //In the string there are 12 character but we put 13 then compiler return empty string

// 36
// const sentence = "JavaScript is fun!";
// console.log(sentence.substr(4, 10));                     //In substr we put two value starting index and length of the string

// 37
// const text = "Hello, World!";
// console.log(text.includes("WORLD"));                     //If the givem string in specify in string then return true else false

// 38
// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome"));     //Replace the string amazing to awesome.

// 39
// const str = "Hello, World!";
// console.log(str.charCodeAt(4));                          //We get the character code at 4th index

// 40
// const sentence = "JavaScript is powerful!";
// console.log(sentence.split(" ").length);                 //We get the length of split string wo make an array with the help of split

// 41
// const text = "Hello, World!";
// console.log(text.search("W"));                           //We get the index of first W

// 42
// const sentence = "JavaScript is dynamic!";
// console.log(sentence.slice(-7));                         //We can use minus value in slice method , We get the string from -7 to end

// 43
// const str = "Hello, World!";
// console.log(str.concat(" Goodbye!"));                    //We concat the string with first string

// 44
// const sentence = "JavaScript is flexible!";
// console.log(sentence.charAt(sentence.length - 1));       //We get the character at (length-1) last index

// 45
// const sentence = "JavaScript is interesting!";
// console.log(sentence.substring(10));                     //We get the string from 10 to end of the string

// 46
// const str = "Hello, World!";
// console.log(str.search("World"));                        //In this example we search the string where they start

// 47
// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse().join(" "));    //In this example first the string is split where the " "(space) is come and than array's all word are reverse and all reverse array word are join with join() method

// 48
// const sentence = "JavaScript is powerful!";
// console.log(sentence.substring(4, 10));                  //We get string from 4 to 10 index

// 49
// const str = "Hello, World!";
// console.log(str.charCodeAt(0));                          //We get character code (Unicode) at 0th index

// 50
// const sentence = "JavaScript is amazing!";
// console.log(sentence.slice(4, 10));                      //We get string from 4 to 10 index

// 51
// const text = "Hello, World!";
// console.log(text.indexOf("o", 5));                       //They give the index of "o" but skip first five character

// 52
// const sentence = "JavaScript is fun!";
// console.log(sentence.startsWith("Java"));                //String startWith Java then return true

// 53
// const str = "Hello, World!";
// console.log(str.endsWith("!"));                          //The string endEith ! then return true

// 54
// const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));              //We get a who is in the last ane we get his index , but they skip last 12 character.

// 55
// const text = "Hello, World!";
// console.log(text.substring(7, 2));                       //We get from string from 2 to 7 index.

// 56
// const sentence = "JavaScript is cool!";
// console.log(sentence.concat(" I love it!"));             //string is concat with first string

// 57
// const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));                //charAt get character st the 7th index and upperCase is used to change charcter lowercase to uppercase

// 58
// const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));

// 59
// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase());          //Perform two task in one sting replace and upperCase.

// 60 - Write a JavaScript function to check whether an 'input' is a string or not.
// function is_string(pass_string) {
//     if (typeof pass_string === 'string') {               //Here we check the typeof input data is string and not.
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));

// 61 - Write a JavaScript function to check whether a string is blank or not.
// function is_Blank(pass_para) {
//     pass_para = pass_para.trim("");
//     if (pass_para == "") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(is_Blank(''));              //true
// console.log(is_Blank('      '));        //false
// console.log(is_Blank('abc'));           //false

// 62 - Write a JavaScript function to split a string and convert it into an array of words.
// function string_to_array(pass_string) {
//     return pass_string.split(" ");
// }
// console.log(string_to_array("Robin Singh"));             //[ 'Robin', 'Singh' ]

// 63 - Write a JavaScript function to extract a specified number of characters from a string.
// function truncate_string(pass_para, number) {
//     return pass_para.slice(0, number);
// }
// console.log(truncate_string("Robin Singh", 4));           // "Robi"

// 64 - Write a JavaScript function that hides email addresses to prevent unauthorized access.
// function protect_email(pass_email) {
//     return pass_email.replace(pass_email.slice(5, pass_email.indexOf("@")), ".....");
// }
// console.log(protect_email("robin_singh@example.com"));   //Output:  "robin...@example.com"
// console.log(protect_email("Jay_prajapati@example.com"));   //Output:  "Jay_p.....@example.com"

// 64 - Write a JavaScript function that hides email addresses to prevent unauthorized access.
// function protect_email(pass_email) {
//     return pass_email.replace(pass_email.slice(5, pass_email.indexOf("@")), ".....");
//     return pass_email.slice(0, 4) + "...." + pass_email.slice(pass_email.indexOf("@"));
// }
// console.log(protect_email("robin_singh@example.com"));   //Output:  "robin...@example.com"





// 65 - Write a JavaScript function to parameterize a string.
// function string_parameterize(pass_string) {
//     return pass_string.toLowerCase().split(" ").join("-");
//     return pass_string.toLowerCase().replaceAll(" ", "-");        //both method are right
// }
// console.log(string_parameterize("Robin Singh from USA."));          //Output: "robin-singh-from-usa"

// 66 - Write a JavaScript function to capitalize the first letter of a string.
// function capitalize(pass_string) {
//     return pass_string.charAt(0).toUpperCase() + pass_string.slice(1);
// }
// console.log(capitalize('js string exercises'));      //Output: "Js string exercises"
// console.log(capitalize('capitalize first letter of a string'));      //Output: "Capitalize first letter of a string"




// 67-Write a JavaScript function to capitalize the first letter of each word in a string.
// function capitalize_Words(pass_string) {
//     let arr = pass_string.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
//     }
//     console.log(arr.join(' '));
// }
// console.log(capitalize_Words('js string exercises'));           //"Js String Exercises"
// for (let a of arr) {
//     (a.charAt(0).toUpperCase() + a.slice(1));
// }


// 68-Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// function insert(pass_string, add_string = "", index = 0) {
//     return (pass_string.slice(0, index) + add_string + pass_string.slice(index));
// }
// console.log(insert('We are doing some exercises.'));                    // Output: "We are doing some exercises."
// console.log(insert('We are doing some exercises.', 'JavaScript '));      // "JavaScript We are doing some exercises."
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));   // "We are doing some JavaScript exercises."