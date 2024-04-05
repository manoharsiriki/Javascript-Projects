
# Topic Name - Higher order functions


## Description 

A Higher order function in Javascript is a function that accepts a function as an argument. 

Ex: Array functions - map, reduce, split, splice

> Map, Sort, Reduce, Filter - 
> Return a new array and do not modify the existing array. 
> Same is the case with slice. 

> `1. Map - Performs an operation specified in the call back function sent as argument. In the below example, the map function we are setting to double each element in the array. **`

```javascript
let vals = [4, 8, 1, 2, 9];
console.log(vals);
vals = vals.map(x => x * 2);
console.log(vals);
> [8,16,2,4,18]
```

> `2. Fill will take an array and fill it with values. !! Acts on current array`

```javascript
let vals = [4, 8, 1, 2, 9];
console.log(vals);
vals = vals.map(x => x * 2);
console.log(vals);

let vals = Array(7).fill().map(x=> Math.random());
console.log(vals);
> [0.3,0.4,0.5, 0.6, 0.7]
```

> `3. Reduce - Quirky HOF may be add or aggregate. This function takes 2 arguments, 1 - Accumulator 2 - value and returns the aggregated values based on the operation between accumulator and value`

If you specify a value, it will take as default for Accumulator, otherwise, it would take the first element of the array as initialized value
> 
```javascript
let answer = arrayVals.reduce((x,y)=> x*y); 
console.log('ANSWER '+answer);
> [180]
```

 > `4. Filter - creates a copy of Array with the filter condition speicified. `

 ```javascript 
let arrayVal = [1, 2, 9, 4, 5];

arrayVal = arrayVal.filter(number => number % 2);
console.log(arrayVal);
> [1,9,5]
```


1. FILTER - New Array
2. MAP - New Array 
3. SORT - EXISTING ARRAY
4. FILL - EXISTING ARRAY
5. REDUCE - New Array

> `SORT - Accepts an argument which compares and modifies existing array`

```javascript
let value = [
	{ x: 6, y: 10 },
    { x: 2, y: 5 },
    { x: 1, y:1 }
];

value.sort((a, b) => a.y - b.y);

console.log('OUTPUT : ', value);
> OUTPUT: [{ x: 1, y: 1 }, { x: 2, y: 5 },	{ x: 6, y: 10 }];


let s = "It was a dark and stormy night";
let words = s.split(/\W+/).filter(word => word.length > 2);
words.sort();
console.log(words);

words.sort((a, b) => a.length - b.length);
console.log(words);

> ["and", "dark", "night", "stormy", "was"]
> [("and", "was", "dark", "night", "stormy")];
```