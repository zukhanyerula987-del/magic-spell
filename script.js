const genButton = document.querySelector("#generateButton")
const resetButton = document.querySelector("#resetButton")
const tv = document.querySelector("#spellArea")
// const show = tv.textContent
const list = document.querySelectorAll("#ingredientsList li")
// console.log(list)
// const listText = list.textContent
// console.log(listText);

// genButton.addEventListener("click", () => {

// })

genButton.onclick = () =>{
    // alert('ndikucofile')
let countdown = 4
const timer = setInterval(()=>{
countdown --;
if(countdown > 0){
    // show = countdown
    tv.textContent = countdown
    list.forEach(l =>{
        l.style.color = ""
        l.style.fontStyle = ""
        l.style.fontSize = ""
    })
    tv.style.backgroundColor = ""
}else{
    clearInterval(timer)
    // tv.textContent = "Happy New Year!!!!!!"
    const randomlySelectedLiElement = list[Math.floor(Math.random() * list.length)]
    const contentFromElement = randomlySelectedLiElement.textContent
    tv.textContent = contentFromElement
    const randomColor = () => "#"  + Math.floor(Math.random() * 16777215).toString(16)
    const colour = randomColor()
    tv.style.backgroundColor = colour
    randomlySelectedLiElement.style.color = colour
    randomlySelectedLiElement.style.fontStyle = "italic"
    randomlySelectedLiElement.style.fontSize = "large"
}
},1000)
}

resetButton.onclick =() => {
    // alert('ingabe mhlekazi uyandivumela ndikucofe????')
    tv.style.backgroundColor = ""
    tv.textContent = ""
    list.forEach(l =>{
        l.style.color = ""
        l.style.fontStyle = ""
        l.style.fontSize = ""
    })
}