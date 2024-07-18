// Array to store the words
let my_strings = ["foot", "ball"];

// Function to print the first word
document.getElementById("button1").onclick = function() {
    let word1 = my_strings[0];
    document.getElementById("output").innerHTML += `<p>${word1}</p>`;
};

// Function to print the second word
document.getElementById("button2").onclick = function() {
    let word2 = my_strings[1];
    document.getElementById("output").innerHTML += `<p>${word2}</p>`;
};

// Function to reverse the words and print them
document.getElementById("button3").onclick = function() {
    let word1 = my_strings[0].split('').reverse().join('');
    let word2 = my_strings[1].split('').reverse().join('');
    document.getElementById("output").innerHTML += `<p>${word1}</p>`;
    document.getElementById("output").innerHTML += `<p>${word2}</p>`;
};
