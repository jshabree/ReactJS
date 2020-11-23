// non-functional way to trim an input between a div element

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

// functional way to trim an input between a div element

// trim
const trim = str => str.trim();

//wrap inside a div element 

//wrapInDiv

const wrapInDiv = str => '<div>${str}</div>';

// function to convert string to lower case

const toLowerCase = str => str.toLowerCase();

// first, we trim input, so we call trim function, and pass the input

const result = wrapInDiv(toLowerCase(trim(input))); // read input from right to left
