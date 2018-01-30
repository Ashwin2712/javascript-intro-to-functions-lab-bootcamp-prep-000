var greet = "HI GRANDMA"
var audible = "YES INDEED!"
var inaudible = "I can\'t hear you!"
var ditto = "I love you, too."

function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(greet){

  if (greet.toUpperCase == greet) {
    return audible
  }

  if (greet.toLowerCase == greet) {
    return inaudible
  }

  else {
    return ditto
  }
}

sayHiToGrandma(greet)
