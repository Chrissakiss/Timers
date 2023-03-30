function countdown(num) {
    let counter = setInterval(function() {
        num--;
        if(num <= 0) {
            clearInterval(counter);
            console.log('"DONE!"');
        }
        else { console.log(num); }
    }, 1000);
}

function randomGame() {
    let randNum;
    let counter = 0;
    let pick = setInterval(function() {
        randNum = Math.random();
        counter++;
        if(randNum > 0.75) {
            clearInterval(pick);
            console.log(`Number of tries before finding a rando greater than .75: ${counter}`);
        }
    },1000);    
}