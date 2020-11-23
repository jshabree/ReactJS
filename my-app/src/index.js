import { compose, pipe } from 'lodash/fp';

// non-functional way to trim an input between a div element

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

// functional way to trim an input between a div element

// trim
const trim = str => str.trim();

// wrap inside a div element 

//wrapInDiv

const wrapInDiv = str => '<div>${str}</div>';

// currying
// wrap inside a span element - additional feature

const wrapInSpan = str => '<span>${str}</span>';


// function to convert string to lower case

const toLowerCase = str => str.toLowerCase();

// first, we trim input, so we call trim function, and pass the input

// UGLY CODE ALERT !!!

// const result = wrapInDiv(toLowerCase(trim(input))); // read input from right to left

// effective way to write the code above

// compose encompasses all the functions. does not call them, but passes a reference to them

// problem : we still have to read it from right to left 

// const transform = compose(wrapInDiv, toLowerCase, trim);

// solution to the problem above: use "pipe"

const transform = pipe(trim, toLowerCase, wrapInDiv);

transform(input);
