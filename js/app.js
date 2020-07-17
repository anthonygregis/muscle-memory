// 5 variables of different datatypes

let varString = "this is a string";
let varNumber = 0;
let varArray = [1,2,3,4];
let varBoolean = true;
let varObject = {string: "this is a string", number: 0, array: [1,2,3,4], boolean: true}

// make 10 different functions
// one of your functions need to pass in an array
// one of your functions need to pass in a callback
// string
// object
// boolean
// freestyle rest

//Array Function
const funcArray = (array) => {
    let myArray = array

    return myArray
}
console.log(funcArray([1,2,3,4]))

//Callback Function
const funcCallback = (callback) => {
    myCallback = callback

    return callback
}
console.log(funcCallback(funcArray([1,2,3,4])))

//String Function
const funcString = (string) => {
    let myString = string

    return string
}
console.log(funcString("This is a string"))

//Object Function
const funcObject = (aObject) => {
    let myObject = aObject

    return myObject
}
console.log(funcObject({name: "Anthony", age: 22, location: "Alabama"}))

//Boolean Function
const funcBoolean = (boolean) => {
    let myBoolean = boolean

    return myBoolean
}
console.log(funcBoolean(true))

//Add Function
const funcAdd = (numOne, numTwo) => {
    const addedNums = numOne + numTwo

    return addedNums
}
console.log(funcAdd(1, 2))

//Subtract Function
const funcSubtract = (numOne, numTwo) => {
    const subtractedNums = numOne - numTwo

    return subtractedNums
}
console.log(funcSubtract(1, 2))

//Multiply Function
const funcMultiply = (numOne, numTwo) => {
    const multipliedNums = numOne * numTwo

    return multipliedNums
}
console.log(funcMultiply(2, 2))

//Divide Function
const funcDivide = (numOne, numTwo) => {
    const dividedNums = numOne / numTwo

    return dividedNums
}
console.log(funcDivide(4, 2))

//Mod Function
const funcMod = (numOne, numTwo) => {
    const moddedNums = numOne % numTwo

    return moddedNums
}
console.log(funcMod(3, 2))

const sectionOneDiv = document.getElementById("section-one")
//console.log(sectionOneDiv)
const sectionTwoDiv = document.getElementById("section-two")
//console.log(sectionTwoDiv)
const sectionThreeDiv = document.querySelector("#section-three")
//console.log(sectionThreeDiv)
const sectionFourDiv = document.querySelector("#section-four")
//console.log(sectionFourDiv)
const sectionFiveDiv = document.querySelector("#section-five")
//console.log(sectionFiveDiv)

sectionOneDiv.textContent = "Lakers";
sectionTwoDiv.textContent = "Heat";
sectionThreeDiv.textContent = "Cavaliers";
sectionFourDiv.textContent = "Rockets";
sectionFiveDiv.textContent = "Warriors";

const paragraphOneDiv = document.querySelector(".paragraph-one")
//console.log(paragraphOneDiv)
const paragraphTwoDiv = document.querySelector(".paragraph-two")
//console.log(paragraphTwoDiv)
const paragraphThreeDiv = document.querySelector(".paragraph-three")
//console.log(paragraphThreeDiv)
const paragraphFourDiv = document.querySelector(".paragraph-four")
//console.log(paragraphFourDiv)
const paragraphFiveDiv = document.querySelector(".paragraph-five")
//console.log(paragraphFiveDiv)

paragraphOneDiv.textContent = "Lebron James"
paragraphTwoDiv.textContent = "Dewayne Wade"
paragraphThreeDiv.textContent = "Kevin Love"
paragraphFourDiv.textContent = "James Harden"
paragraphFiveDiv.textContent = "Steph Curry"

const containerSixDiv = document.createElement("div")
containerSixDiv.classList.add("container-six")
console.log(containerSixDiv)

const sectionSixH2 = document.createElement("h2")
sectionSixH2.setAttribute("id", "section-six")
console.log(sectionSixH2)

sectionSixH2.textContent = "Rockets";

const paragraphSixP = document.createElement("p")
paragraphSixP.classList.add("paragraph-six")
paragraphSixP.textContent = "Russell Westbrook"
console.log(paragraphSixP)

const body = document.querySelector('body')

body.appendChild(containerSixDiv)
containerSixDiv.appendChild(sectionSixH2)
containerSixDiv.appendChild(paragraphSixP)

// create another container
const containerSevenDiv = document.createElement("div")
// add class
containerSevenDiv.classList.add("container-Seven")
console.log(containerSevenDiv)
// create another section
const sectionSevenH2 = document.createElement("h2")
// add an id
sectionSevenH2.setAttribute("id", "section-Seven")
// add textContent
sectionSevenH2.textContent = "Dolphins";
console.log(sectionSevenH2)
// create another paragraph
const paragraphSevenP = document.createElement("p")
// add a class
paragraphSevenP.classList.add("paragraph-seven")
// add textContent
paragraphSevenP.textContent = "Miami"
console.log(paragraphSevenP)

// append the container to the body
// append section to the container
// append the paragraph to the container
body.appendChild(containerSevenDiv)
containerSevenDiv.appendChild(sectionSevenH2)
containerSevenDiv.appendChild(paragraphSevenP)


