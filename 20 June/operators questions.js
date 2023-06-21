// console.log(5 + 4 * 2);              //multiply-plus
// console.log(10 - 2 / 4);             //divide-minus
// console.log(3 * (2 + 4));            //bracket-miltiply
// console.log(8 / (2 + 2));            //bracket-divide
// console.log(15 % 4 + 2);             //module-plus
// console.log(20 / 4 - 2);             //divide-minus
// console.log(2 + 3 * 4 / 2);          //multiply-divide(left to right)-plus
// console.log(4 / 2 ** 2);             //exponentiation-divide
// console.log((10 + 2) / 3);           //bracket-divide
// console.log(6 * 2 % 4);              //left to right
// console.log(2 ** 3 ** 2);            //right to left
// console.log((4 + 2) ** 3);           //bracket-exponentiation
// console.log(2 + 3 * 4 ** 2);         //exponentiation-multiply-plus
// console.log(6 * (2 + 4) / 3);        //bracket-left to right
// console.log((10 - 2) / 4);           //bracket-divide
// console.log(8 / (2 * 2));            //bracket-divide
// console.log(15 % (4 + 2));           //bracket-module
// console.log(20 / (4 - 2));           //bracket-divide
// console.log(2 + (3 * 4) / 2);        //bracket-divide-plus
// console.log(4 / (2 ** 2));           //bracket-divide
// console.log((10 + 2) / 3);           //bracket-divide
// console.log(6 * (2 % 4));            //bracket-multiply
// console.log(2 ** (3 ** 2));          //bracket-exponentiation
// console.log((4 + 2) ** 3);           //bracket-exponentiation
// console.log(2 + (3 * 4 ** 2));       //bracket(exponentiation-multiply)-plus
// console.log(6 * (2 + 4) % 3);        //bracket-right to left
// console.log((10 - 2) / 4);           //bracket-divide
// console.log(8 / (2 + 2));            //bracket-divide
// console.log(15 % (4 - 2));           //bracket-module
// console.log(20 / 4 - 2);             //divide-minus
// console.log(2 + 3 * (4 / 2));        //bracket-multiply-plus
// console.log(4 / (2 ** 2));           //bracket-divide
// console.log((10 + 2) / 3);           //bracket-divide
// console.log(6 * (2 % 4) - 3);        //bracket-multiply-minus
// console.log(2 ** (3 ** 2));          //bracket-exponentiation
// console.log((4 + 2) ** 3 - 1);       //bracket-exponentiation-minus
// console.log(2 + (3 * 4 ** 2) / 2);   //bracket(exponentiation-multiply)-divide-plus
// console.log(6 * (2 + 4) % 3 + 1);    //bracket-left to right(multiply-module)-plus
// console.log((10 - 2) / 4 + 2);       //bracket-divide-plus
// console.log(8 / (2 * 2) + 3);        //bracket-divide-plus
// console.log(15 % (4 + 2) - 1);       //bracket-module-minus
// console.log(20 / (4 - 2) + 1);       //bracket-divide-plus
// console.log(2 + (3 * 4) / 2 - 1);    //bracket-divide-minus-plus
// console.log(4 / (2 ** 2) + 3);       //bracket-divide-plus
// console.log((10 + 2) / 3 - 1);       //bracket-divide-minus
// console.log(6 * (2 % 4) / 3 + 2);    //bracket-multiply-divide(left to right)-plus
// console.log(2 ** (3 ** 2) - 1);      //bracket-exponentiation-minus
// console.log((4 + 2) ** 3 + 1);       //bracket-exponentiation-plus
// console.log(2 + (3 * 4 ** 2) / 2 - 3);   //bracket(exponentiation-multiply)-divide-minus-plus
// console.log(6 * (2 + 4) % 3 + 1 - 2);//bracket-multiply-module-plus-minus
// console.log("5" + "3");              //both are string than concat two string ->53
// console.log("7" - "2");              //minus(-) is used to substract two value
// console.log("10" * "2");             //multiplication(*) is used to multiply two number or string
// console.log("15" / "5");             //divison(/) is used to divide two number or string
// console.log("10" % "3");             //Module(%) is used to return reminder string
// console.log(("2.5") + 1.8);          //plus operator is used to concat two string if value are string
// console.log(4 - Number("2.5"));      //Number is used to change string into number
// console.log(1.5 * Number("3.2"));    //string into number-multiply
// console.log(9.8 / Number("2"));      //string into number-divide
// console.log("7" + String(2.5));      //number convert into string-concat two string
// console.log(10 - Number("2.5"));     //string into number-minus
// console.log(3.5 * Number("2"));      //string into number-multiply
// console.log(8 / Number("2.5"));      //string into number-divide
// console.log(String(1.2) + "0.5");    //concat
// console.log(6 - Number("1.2"));      //string into number-minus
// const result = 10 * 2 / 5 + Math.pow(2, 3) - 4 % 3; console.log(result);     //math-left to right(multiply-divide)-module-plus-minus
// console.log("hello" && 0);           //first condition true than print second statement in &&
// console.log("" || "world");          //first condition false than print second statement in ||
// console.log(null && true);           //first condition false than print first statement in &&
// console.log(NaN || "value");         //first condition false than print second statement in ||
// console.log(undefined && null);      //first condition false than print first statement in &&
// console.log(10 && "number");         //first condition true than print second statement in &&
// console.log("" || 0);                //first condition false than print second statement in ||
// console.log(NaN && "value");         //first condition false than print first statement in &&
// console.log(null || undefined);      //first condition false than print second statement in ||
// console.log(false && "false");       //first condition false than print first statement in &&
// console.log("hello" || 0);           //first condition true than print first statement in ||
// console.log(0 && true);              //first condition false than print first statement in &&
// console.log(NaN || null)             //first condition false than print second statement in ||
// console.log(undefined && "undefined");//first condition false than print first statement in &&
// console.log(10 || "number");         //first condition true than print first statement in ||
// console.log("" && 0);                //first condition false than print first statement in &&
// console.log(NaN || "");              //first condition false than print second statement in ||
// console.log(null && undefined);      //first condition false than print first statement in &&
// console.log(false || "false");       //first condition false than print second statement in ||
// console.log("hello" && 10);          //first condition true than print second statement in &&
// console.log(true ? "Yes" : "No");    //condition is true than print first statement
// console.log(false ? 10 : 5);         //condition is false than print second statement
// console.log(3 > 5 ? "Greater" : "Less");         //condition is false than print second statement
// console.log(10 === 10 ? "Equal" : "Not equal");  //condition is true than print first statement
// console.log(false ? "Hello" : "World");          //condition is false than print second statement
// console.log(null ? "NotNull" : "Null");          //condition is false than print second statement
// console.log(undefined ? "Defined" : "Undefined");//condition is false than print second statement
// console.log('a' !== 'b' ? "Different" : "Same"); //condition is true than print first statement
// console.log(1 < 0 ? "True" : "False");           //condition is false than print second statement
// console.log(0 ? "Truthy" : "Falsy");             //condition is false than print second statement
// console.log("" ? "Truthy" : "Falsy");            //condition is false than print second statement
// console.log(NaN ? "Valid" : "Invalid");          //condition is false than print second statement
// console.log([] ? "NotEmpty" : "Empty");
// console.log([1, 2] ? "Exists" : "Not exists" );  //condition is true than print first statement
// console.log({} ? "Object" : "Not object");
// console.log(0.5 ? "True" : "False");             //condition is true than print first statement
// console.log(undefined === null ? "Equal" : "Not equal");
// console.log(10 > 5 ? "Greater" : "Less");        //condition is true than print first statement
// console.log(null !== undefined ? "Different" : "Same");//condition is true than print first statement
// console.log(true ? 1 : 0);                       //condition is true than print first statement
let a = 10, b = 20, c = 30; console.log((a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c));
// first check the condition(a > b) if condition is
// true: - than run first statement in first statement there are another statement(a > c) if this condition is true than return (a) else (c)
// false: -than run first statement in second statement there are another statement(b > c) if this condition is true than return (b) else (c)