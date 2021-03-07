"use strict";

//get form
const form = document.forms["contact-form"];

//set all fields to valid
for (const field of document.getElementsByTagName("input")) {
  field.classList.add("valid");
}
form["message"].classList.add("valid");

//global flag for errors from blur fields
let blursError = false;

//function to add appriopriate error/valid class to field
function error(field,state) { //if state true then there is an error to that field
  state ? field.classList.replace("valid","error") : field.classList.replace("error","valid");
}

//function to check regex of input on blur
  const regexOnBlurCheck = (input,regex) => {
   form[input].addEventListener("blur", () => {
    blursError = !regex.test(form[input].value.trim()); //if regex test is false (failed) then error
    console.log(`${form[input].name} is ` + (blursError ? 'invalid' : 'valid')); 
    error(form[input],blursError);
  })
}
//first name (regex blur)
const regexFName = /^[a-zA-Z]+(([- ][a-zA-Z]+))*?$/; //multiple names(with chars a-z A-Z) seperated with - or space (but optional can be 1 name)
regexOnBlurCheck("first-name",regexFName);

//last name (regex blur)
const regexLName = /^[a-zA-Z]+$/; //one name without spaces or numbers
regexOnBlurCheck("last-name",regexLName);

//email (regex blur)
const regexEmail = /^[\w\d]+([.-][\w\d]+)*?[@]{1}(\w)+[.]{1}(\w)+$/;
regexOnBlurCheck("email",regexEmail);
regexOnBlurCheck("email2",regexEmail);

//get emails
const email = form["email"];
const email2 = form["email2"];

//check both emails if they are the same (blur 2nd email)
const emailSameCheck = (ml1,ml2) => {
  blursError = (ml1.value !== ml2.value); // if not equal then error true
  error(ml1,blursError);
  error(ml2,blursError);
}

//email listeners (blur)
email2.addEventListener('blur', () => {emailSameCheck(email,email2);});

//empty (submit)
form.addEventListener('submit', event => {
  const inputs = Array
  .from(form.getElementsByTagName('input')); //make array from inputs of form
  inputs.push(form["message"]); //push message/textarea to the array

  let isEmpty = false; //flag to check if one of them empty

  inputs.forEach(input => { //check for each input
    if (input.value.trim().length === 0) {
      console.log(`${input.name} is missing`); //log in the console the missing input(s)
      error(input,true);
      isEmpty = true;
    }
  })

  if (isEmpty || blursError) { //outside of for each to get all missing inputs
    event.preventDefault(); //do not do the event (submit)
  }

})