let images = [
    "img/dice-six-faces-one.svg",
    "img/dice-six-faces-two.svg",
    "img/dice-six-faces-three.svg",
    "img/dice-six-faces-four.svg",
    "img/dice-six-faces-five.svg",
    "img/dice-six-faces-six.svg"
];

let dice = document.querySelectorAll("img");

// console.log(dice);

$('#circle').click(function() {
    $("#circle").effect("shake");
});

function roll() {
    dice.forEach(function(die){
        die.classList.add("#circle");
    });
    let dieOneValue = Math.floor(Math.random()*6);
    let dieTwoValue = Math.floor(Math.random()*6);
    console.log(dieOneValue,dieTwoValue);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );

    1000
    ;
}
roll();
