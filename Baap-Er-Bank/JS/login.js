// step-1: add click event handler with submit button

document.getElementById('btn-submit').addEventListener('click',function(){

  // step-2 get email address
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  console.log(email);

// step-3 get password
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

// step-4 verify email password
if(email === "sontan@baap" && password === 'secret'){
  console.log('valid user')
}
else{
  alert('Toke ami tejjo sontan ghoshona korlam')
}

})


