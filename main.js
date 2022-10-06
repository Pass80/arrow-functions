//================ Übung 1 ======================

const heading1 = document.getElementById('heading1');
const textInput = document.getElementById('txt-input');

const generateTxt = () => {
    heading1.innerHTML = textInput.value;
    textInput.value = '';
};

const heading2 = document.getElementById('heading2');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

const sum = () => {
    heading2.innerHTML = num1Input.value * 1 + num2Input.value * 1;
    num1Input.value = '';
    num2Input.value = '';
};

const num3Input = document.getElementById('num3');
const num4Input = document.getElementById('num4');

const multiply = () => {
    alert(`the result is ${num3Input.value * num4Input.value}`);
    num3Input.value = '';
    num4Input.value = '';
};

const i = true;
const j = 'hi';
const k = 1;
const l = { name: 'John' };
const a = [0, 1];

const typeOf = (variable) => {
    console.log(`the type of this variable is ${typeof variable}`);
};

typeOf(i);
typeOf(j);
typeOf(k);
typeOf(l);
typeOf(a);

//================ Übung 2 ======================

const hero = (heroName, heroPower, heroEnemy) => {
    const name = 'Mein:e Lieblingsheld:in ist:';
    const power = 'Er/sie hat die Fähigkeit:';
    const enemy = 'Sein/ihr größter Gegner ist:';
    console.log(
        `${name} ${heroName}, ${power} ${heroPower}, and ${enemy} ${heroEnemy}`
    );
};

hero('Batman', 'Fliegen', 'Joker');

//================ Übung 3 ======================

const multiply1 = (num) => {
    console.log(num * 2);
    return num * 2;
};

multiply1(4);

//================ Übung 4 ======================

const multiply3 = (num) => {
    if (num <= 27) {
        return console.log(27 - num);
    }
    return console.log((num - 27) * 2);
};
multiply3(20);
multiply3(27);
multiply3(35);
multiply3(74);
multiply3(123);
