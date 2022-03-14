let person = document.querySelector('#person')
let square = document.querySelector('#square')

function jump(){
  if(person.classList != 'animation'){
     person.classList.add('animation')
  }

  setTimeout(function(){
    person.classList.remove('animation')
  }, 500)
}

var collision = setInterval( function(){

  var topperson = parseInt(
    window.getComputedStyle(person).getPropertyValue('top')
  )

  var leftsquare = parseInt(
    window.getComputedStyle(square).getPropertyValue('left')
  )

  if(leftsquare < 20 && leftsquare > 0 && topperson >= 130){
    square.style.animation = 'none'
    square.style.display = 'none'
    alert('You Loseeee Bro!')
}

}, 10)
