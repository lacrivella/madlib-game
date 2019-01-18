function madLib() {

    var firstNounInput = document.getElementById ('noun-one');
    var firstVerbInput = document.getElementById ('verb-one');
    var secondVerbInput = document.getElementById ('verb-two');
    var firstAdjInput = document.getElementById ('adj-one');
    

    //get values  by input
    var firstNoun = firstNounInput.value;
    var firstVerb = firstVerbInput.value;
    var secondVerb = secondVerbInput.value;
    var firstAdj = firstAdjInput.value;

    var madParagraph = "Baby, can't you see I'm " + firstVerb + ". A " + firstNoun + " like you should " + secondVerb + " a warning. It's " + firstAdj + " I'm falling."

    //display
    var madDisplay = document.getElementById('madDisplay');
    madDisplay.textContent = madParagraph;
}




