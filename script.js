function nameChange(newName) {
    const element = document.getElementById("newName");
    element.innerHTML = "Lee Hildebrandt";
}

function removeElement1(user1) {
    const element = document.getElementById("user1");
    element.remove();
}
var count1 = 500;
var count1Element = document.querySelector("#increase");

function count1Add1() {
count1++;
count1Element.innerText = count1 + "+";
}

var count2 = 2;
var count2Element = document.querySelector("#decrease");

function count2Subtract1() {
count2--;
count2Element.innerText = count2;
}

function removeElement2(user2) {
    const element = document.getElementById("user2");
    element.remove();
}