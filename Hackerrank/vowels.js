function vowelsAndConsonants(s) {
    var letters = s.split('');
    var vowels =[97, 101, 105 ,111, 117 ,121];
    for(let i = 0; i<letters.length; i++){
        for (let j = 0; j<vowels.length; j++){
            if(letters[i].charCodeAt()== vowels[j]){
                console.log(letters[i]);
                letters.splice(i,1);
                i--;
            }
        }
    }
    for(let i = 0; i<letters.length; i++){
        console.log(letters[i]);
    }
        

    //console.log(letters[1].charCodeAt())
}

vowelsAndConsonants('javascriptloops');