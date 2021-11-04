let countButton = document.getElementById("countButton")

countButton.addEventListener("click", function(e){
    e.preventDefault()
})

let eraseButton = document.getElementById("eraseButton")

eraseButton.addEventListener("click", function(e){
  e.preventDefault()
})


let showAnswer = document.getElementById("answerBox")
let genderMale = document.getElementById("radioMan").checked 
let genderFemale = document.getElementById("radioWoman").checked 

let howOldIs = document.getElementById("inputAge")
let howMuchHeight = document.getElementById("inputHeight")
let howMuchWeight = document.getElementById("inputWeight")

let whatIsChecked = document.getElementsByName("level")

let minimumLevel = document.getElementById("minimumLevel")
let lowLevel = document.getElementById("lowLevel")
let mediumLevel = document.getElementById("mediumLevel")
let highLevel = document.getElementById("highLevel")
let veryHighLevel = document.getElementById("veryHighLevel")

let firstResult = document.getElementById("firstResult")
let secondResult = document.getElementById("secondResult")
let thirdResult = document.getElementById("thirdResult")

let genderCalories = 0
let calories = 0
let regex=/^[0-9]+$/;

function countBtn(){


    console.log("clicked")
    howOldIs.style.borderColor = "black";
    howMuchHeight.style.borderColor = "black";
    howMuchWeight.style.borderColor = "black";
    

    if (!howOldIs.value.match(regex)){
      console.log("how old is true")
      document.getElementById("inputAge").style.borderColor = "red";
    }

    if (!howMuchHeight.value.match(regex)){
      console.log("how old is true")
      document.getElementById("inputHeight").style.borderColor = "red";
    }

    if (!howMuchWeight.value.match(regex)){
      console.log("how old is true")
      document.getElementById("inputWeight").style.borderColor = "red";
    }

    if(!howOldIs.value.match(regex) || !howMuchHeight.value.match(regex) || !howMuchWeight.value.match(regex)){
      return
    }

if(genderMale){
    console.log("М")
    genderCalories = 5
    console.log(genderCalories)
} else if(genderFemale){
    console.log("Ж")
    genderCalories = -161
    console.log(genderCalories)
}

console.log(howOldIs.value)
console.log(howMuchHeight.value )
console.log(howMuchWeight.value)

calories = ((howMuchWeight.value * 10) + (6.25 * howMuchHeight.value) - (5 * howOldIs.value) + genderCalories)
console.log(calories)


for (var i = 0; i < whatIsChecked.length; i++) {
  if (whatIsChecked[i].checked) {
    console.log(whatIsChecked[i].value);
    if(whatIsChecked[i] === minimumLevel){
        calories+=469
        console.log(calories)
    } else if(whatIsChecked[i] === lowLevel){
        calories+=806
        console.log(calories)
    } else if(whatIsChecked[i] === mediumLevel){
        calories+=890
        console.log(calories)
    } else if(whatIsChecked[i] === highLevel){
        calories+=974
        console.log(calories)
    } else if(whatIsChecked[i] === veryHighLevel){
        calories+=1817
        console.log(calories)
    }
    break;
  }
}

firstResult.textContent = Math.floor(calories) + " ккал"
secondResult.textContent = Math.floor(calories - 500) + " ккал"
thirdResult.textContent = Math.floor(calories + 500) + " ккал"


showAnswer.style.display = "block";
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
  window.scrollBy({ 
    top: 100, 
    left: 0, 
    behavior: 'smooth' 
  });
  document.querySelector('.answer-box').scrollIntoView({ 
    behavior: 'smooth' 
  });
}



function eraseBtn(){

  console.log("clicked")

  howOldIs.style.borderColor = "black";
  howMuchHeight.style.borderColor = "black";
  howMuchWeight.style.borderColor = "black";
  showAnswer.style.display = "none";
  window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
  window.scrollBy({ 
    top: 100, 
    left: 0, 
    behavior: 'smooth' 
  });
  document.querySelector('.container').scrollIntoView({ 
    behavior: 'smooth' 
  });

  howOldIs.value=" "
  howMuchHeight.value=" "
  howMuchWeight.value=" "

}
