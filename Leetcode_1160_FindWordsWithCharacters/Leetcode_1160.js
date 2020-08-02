wordss = ["cat","bt","hat","tree"];
charss ="atach";

function countCharacters(words, chars) {
    let totalResult = 0;
    let temporaryStorage = [];
    charsArray = chars.split('');
    for(let i=0; i<words.length; i++){
        let word = words[i];
        let wordArray = word.split('');
        let wordArrayLength = wordArray.length;
        console.log("wordArrayBeg:"+ wordArray+" "+ wordArray.length);

        for(let k=0; k<charsArray.length; k++){
            let CLetter = charsArray[k];

            for(let j=0; j<wordArray.length; ++j){
                let WLetter = wordArray[j];
                console.log(CLetter +" ---- "+ WLetter +"----"+temporaryStorage +" ------ "+ charsArray);
                if (CLetter == WLetter){
                    temporaryStorage.push(WLetter);
                    charsArray.splice(k,1);
                    wordArray.splice(j,1);
                    j=-1;
                    k=0;
                    WLetter = wordArray[j];
                    CLetter = charsArray[k];
                }    
            }
        }
        temporaryStorage = [];
        charsArray = chars.split('');

        if (wordArray.length==0){
            totalResult+=wordArrayLength;
            console.log("totalResult: "+totalResult);
        }
    }
    console.log(temporaryStorage);
    console.log("totalResult: "+totalResult);
};

function LetterIsPresent(currentletter,tempS){
    for(let i=0; i<tempS.length; i++){
        if (currentletter==tempS[i]){
            return true;
        }
        // else{
        //     return false;
        // }
    }
}

countCharacters(wordss, charss) ;