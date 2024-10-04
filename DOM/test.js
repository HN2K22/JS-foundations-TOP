const container = document.querySelector("#container")
const btn = document.querySelector("button")
btn.classList.add("hello-world");
const btn1 = document.querySelector(".hello-world")
// btn1.onclick = ()=> alert("Hello World")
btn1.addEventListener('click', function(e){
   e.target.style.backgroundColor = "blue";
    alert('Hello World')
})
const red = document.createElement("p");
red.textContent = "Hey , I'm red";
red.style.backgroundColor = "red";
const blue = document.createElement("h3")
blue.textContent = "I'm a blue h3!";
blue.style["backgroundColor"] = "blue"
const block = document.createElement("div")
const blockh1 = document.createElement("h1")
const blockp = document.createElement("p")
blockh1.textContent= "I'm in a div";
blockp.textContent = "ME TOO!"
block.appendChild(blockh1,blockp);
block.setAttribute("style","border: 1px solid black; background-color: pink;")
container.appendChild(block)
container.appendChild(red)
container.appendChild(blue)