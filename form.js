const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pasword = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
   checkInputs(); 
})


function checkInputs(){


    const usernameValue=username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue = pasword.value.trim();
    const password2Value= password2.value.trim();


    if (usernameValue===''){
       //show error
       //add error class
       setErrorFor(username,'It is not a valid user name');
    }else{
        //add success class
        setSuccessFor(username);
    }

    if (emailValue=''){
        setErrorFor(email,'Email cannot be found');

    }else if (!isEmail(emailValue)){ 
        setErrorFor(email,'Email is not valid');
    }else{
        setSuccessFor(email);
    }

    if (passwordValue===''){
        setErrorFor(password,'password cannot be blanck');

    
    }else{
        setSuccessFor(password);
    }
    if (password2Value===''){
        setErrorFor(password2,'password2 cannot be blanck');

    }else if (passwordValue !== password2Value){
        setErrorFor(password2,'password2 does not match');
    }else{
        setSuccessFor(password2);
    }
    // show a success message here
}
function setErrorFor(input,message){
    const formControl = input.parentElement;//.form-control
    const small = formControl.querrySelector('small');
    //add error message inside small
    //small.innerText =message;
    //add error class
    //formControl.className ='form-control error';

}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';


}

function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(String(email).toLowerCase());
}