function checkMagazine(magazine, note) {
    let magWords=magazine.split(' ');
    let noteWords =note.split(' ');
    let magcounter = 0;
    let noteCouter = 0;


    //console.log('magwords: '+magWords);
    //console.log('notewords: '+noteWords);
    for(let i=0; i<noteWords.length; i++){
        for(let j=0; j< magWords.length; j++){
            if(noteWords[i]==magWords[j]){
                noteWords.splice(i,1);
                i--;
                magWords.splice(j,1);
                j--;
            }
        }
    }
    if (noteWords.length == 0){
        console.log('Yes');
    }else{
        console.log('No');
    }
    

}
checkMagazine(
    'give me one grand today night','give one grand today');