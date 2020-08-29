//Problem 10 : return the smallest string that has all the letters of the orginal string
//remember that 'abasterdeb' would not consider the first a as the second is present to make the game work. would be:'basterd'

function fewestCoins(coins) {

    //check what is the stack of primary letters in coins and store them in the array primaryLetters
   
    let arr = coins.split('');
    let counter = 0;
    let primaryLetters= [];

    for(let i = 0; i<arr.length; i++){
        presence = IsPresent(primaryLetters, arr[i]); // function isPresent defined at the bottom
        if(presence){
            primaryLetters.push(arr[i]);
        }
    }

     //Example: aadabbcaabcda
    //primary letters: [a, b, c, d]

    //--------------------------------------------------------------------------------------------------------------------------

    //Now we need to create and store in partialStrings the sub-blocks from coins that contain all the letters in primaryLetters
    //The goal is to find check in arr(coins array) if the full primary letters stack can come back several times, and if so
    //store them in a new array called partialStrings.

    let tempArray =[]; //Temporary array

    let validLetter= [...primaryLetters]; 
    //clone of primaryLetters. Once a letter is detected, the letter is deleted from this copy array. 
    //When the ValidLetter array is empty,it means that all the primary letters have been detected.

    let partialStrings=[];  //if all the primary letters have been detected, the algorithm stores them in the partialStrings array;

    for(let i = 0; i<arr.length; i++){
        if(validLetter.length > 0){
            for(let j=0; j<primaryLetters.length; j++){
                if(primaryLetters[j] === arr[i]){
                    tempArray.push(arr[i]);
                    validLetter =IsValidLetter(validLetter,arr[i]);
                }
            }
        }
        if(validLetter.length === 0){
            partialStrings.push(tempArray.join(''));
            tempArray=[];
            validLetter= [...primaryLetters];
        }
    }
    
    // example: at this point we have [aadabbc] and [aabcd]

    //--------------------------------------------------------------------------------------------------------------------------

    //From here we have sub-strings of primary letters, but some of them still have extra letters that we want to get rif of.
    //the solution is to cycle into each substring from the end, and delete every second occurence of the same letter,
    //at the only condition of course that all the primaryletters have occured.

    let partialResult =[];
    validLetter= [...primaryLetters];
    for(let i = 0; i< partialStrings.length;i++){
        let arr4 =partialStrings[i].split('');
        let repeatArray=[];
        for(let j=arr4.length-1; j>=0;j--){

            presence = IsPresent(repeatArray, arr4[j]); // function defined at the bottom
            validLetter =IsValidLetter(validLetter, arr4[j]); // function defined at the bottom

            if (presence){
                repeatArray.push(arr4[j]);
            }
            else{
                if(validLetter.length===0){
                    arr4.splice(j,1);
                }
            }
        }
        validLetter= [...primaryLetters];
        partialResult.push(arr4.join(''));
    }

    // example: at this point we have [dabbc] and [abcd]

    //--------------------------------------------------------------------------------------------------------------------------

    //Finally, we can cycle inside the final strings that have been cleaned and return which one is the smallest.

    let Result;
    for(let i=0; i<partialResult.length;i++){
        Result = partialResult[0];
        if(partialResult[i].length<Result.length){
            Result = partialResult[i];
        }
    }
    console.log(Result); // example: We finally have: abcd

 return Result;   
}

fewestCoins('aadabbcaabcda');  //return abcd

//fewestCoins('aabsbbbbbbattatbtsss'); //bsat or tatbs : bsat
//arr: dabbcabcd'


//-------------------------------------------------------FUNCTIONS---------------------------------------------------------
//This boolean function tells if the letter is present in the array passed
function IsPresent(array, letter){
    let presence = true;
    for(let i=0; i<array.length;i++){
        if(array[i] === letter){
            presence = false;
        }
    }
    return presence;
}

//This function checks if the letter passed is in the array. if yes it returns an array minus the current letter
function IsValidLetter(array, letter){
    for(let i= 0; i<array.length; i++){
        if(array[i]=== letter){
            array.splice(i,1);
            i--;
        }
    }
    return array;
}







//problem 2 or 3:
//function(numbers, k)

//1: sequance of letters of size k that dont repeat-> answer yes if its possible, no if not
