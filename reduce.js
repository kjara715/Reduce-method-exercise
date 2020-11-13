/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    const valueArray=[];
   return arr.reduce(function(obj, nextObj){
        valueArray.push(nextObj[key]);
        return valueArray;
        }, 0)
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const letterObj={};
    const strAsArray=Array.from(str); //turn the string into an array so can use the reduce method
    const vowels=['a','e','i','o','u'];
    const myVowels=[];
    for(let char of strAsArray){
        if(vowels.indexOf(char.toLowerCase())!==-1){ //needs to be lowercased to match
            myVowels.push(char.toLowerCase());
        }
    }
    //want to now manipute the myVowels array with reduce to turn into the proper letterObj;
    myVowels.reduce(function(accum, nextVowel){
        if (letterObj[nextVowel]){ //if the key is already present in yhe object
            letterObj[nextVowel]++ //then add 1 to its value
        } else {
            letterObj[nextVowel]=1;
        }
        
        return letterObj
    }, 0)
    
    return letterObj
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    
   const reduced = arr.reduce(function(accumObj, nextObj){
        nextObj[key]=value;
        return arr
    }, 0 )
    return reduced
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    const trueArray=[];
    const falseArray=[];
    const thisArray= arr.reduce(function (accum, nextVal){
        if(callback(nextVal)){ //so if the callback of the value evaluates to true
            trueArray.push(nextVal) //put into the trueArray
    
        } else {
            falseArray.push(nextVal); //otherwise put into the falseArray
        }
        return[trueArray, falseArray]
    }, 0)
    return thisArray
}
