const categories = document.querySelector("#categories")
const Categoryitem = categories.querySelectorAll(".item")
console.log(`Number of categories: ${Categoryitem.length}`)
Categoryitem.forEach(item => {
    const Title = item.querySelector("h2").textContent

    const Elements = item.querySelectorAll("ul , li")
console.log(`Category: ${Title}`)
console.log(`Elements: ${Elements.length}`)
})
