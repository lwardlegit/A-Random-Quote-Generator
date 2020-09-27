/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

const quotesArray=[
  {
      quote:'- Everything you have ever wanted is on the other side of fear.',
      source:'George Addair',
      citation:'Forbes',
      year: 1992
  },
  {
      quote:"- If we aren't willing to pay a price for our values, then we should ask ourselves whether we truly believe in them at all.",
      source:'Barack Obama',
      citation:'The audacity of Hope',
      year: 2006
  },
  {
      quote:"- Education is not preparation for life; education is life itself.",
      source:'John Dewey',
      citation:'philosophy on education',
      year: 1916
  },
  {
      quote:"- Life is what happens when you're busy making other plans.",
      source:'John Lennon',
      citation:'television interview',
      year: 1957
  },
  {
      quote:"- Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
      source:'Abraham Lincoln',
      citation:'Gettysburg Address',
      year: 1863
  },
]

/***
 * `getRandomQuote` function
***/
function newQuote(){
  let currentQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]; 
  printQuote(currentQuote)

}


/***
 * `printQuote` function
***/
function printQuote(currentQuote){

  document.getElementById("quote").innerHTML= currentQuote.quote
  document.getElementById("source").innerHTML= currentQuote.source
  document.getElementById("citation").innerHTML= currentQuote.citation
  document.getElementById("year").innerHTML= currentQuote.year
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", newQuote, false);