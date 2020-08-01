var countCharacters = function(words, chars) {
    let wordResult = 0;
    let charResult = 0;
    let totalResult = 0;
    let temporaryStorage = [];
    for(let word=0; word<words.length(); word++){
        for(let WLetter=0; WLetter<word.length(); WLetter++){
            wordResult += charCodeAt(WLetter);
            for(let CLetter=0; CLetter<chars.length; CLetter++){
                if (CLetter == WLetter && !LetterIsPresent(CLetter,temporaryStorage)){
                    temporaryStorage.push(CLetter);
                }
            }
        }
        if (wordResult==charResult){
            totalResult+=word.length();
        }
    }
};

function LetterIsPresent(currentletter,tempS){
    for(let i=0; i<tempS.length(); i++){
        if (i==currentletter){
            return true;
        }
        else{
            return false;
        }
    }
}