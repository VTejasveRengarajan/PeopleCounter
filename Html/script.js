let countEl = document.getElementById("count-el")
let Save = document.getElementById("save-btn")
let saveEl = document.getElementById("saved-para")

console.log(countEl)
console.log(saveEl)

let count = 0

countEl.addEventListener('click',()=>{
	count++
})

Save.addEventListener('click',()=>{
	saveEl.innerHtml = `<p id="saved-para">Previous Entries: ${count}</p>`
})
