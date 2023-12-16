const intro = document.getElementById('intro');
const introText = "Hello, I'm";
let introWords = introText.split('');
const download = document.getElementById('cv-button');
console.log(download);

const name = document.getElementById('name');
const nameText = "YIN KYAE WAI";
let nameWord = nameText.split('');

const position = document.getElementById('position');
const positionText = "Junior web developer";
let positionWord = positionText.split('');
download.hidden = true;

displayNextWord(introWords, intro);
setTimeout(() => displayNextWord(nameWord, name), 1800);
setTimeout(() => displayNextWord(positionWord, position), 2800);
setTimeout(() => download.hidden = false, 4500);



function displayNextWord(words, id) {
    let index = 0;

    function displayWord() {
        if (index < words.length) {
            id.innerHTML += words[index];
            index++;
            setTimeout(displayWord, 100);
        }
    }

    displayWord();
}

//education slide in

