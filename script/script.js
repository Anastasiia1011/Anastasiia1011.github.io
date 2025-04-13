console.log("Hello World");
//Alert Button
document.getElementById("alertMe").onclick = function () {alert("Hello world!")};

//Hober Button
const hoverBtn = document.getElementById("hoverButton");
hoverBtn.onmouseover = function () {hoverBtn.style.background = "lightblue";};
hoverBtn.onmouseleave = function () {hoverBtn.style.background = "lightgreen";};

//Incrementing Button + If/Else Coloring 
let count = 0;
document.getElementById("buttonCounter").onclick = function () {
    count +=1;
    const counter = document.getElementById("counter");
    counter.innerHTML = "Count:" + count;

    if (count % 2 === 0) {
        counter.style.color = "green";
    } else {
        counter.style.color = "red";
    }
};

//For loop Messages
const container = document.getElementById("container");
for (let i = 0; i < 5; i++) {
    const para = document.createElement("p");
    para.innerText = "Rabbits are awesome!";
    container.apppendChild(para);
}