const form = document.getElementById('form');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const namefn = document.getElementById('namefn');
const departure = document.getElementById('departure');
const arriving = document.getElementById('arriving');
const email = document.getElementById('myemail');
const mobile = document.getElementById('mobile');
const departDate = document.getElementById('departDate');
const arriveDate = document.getElementById('arriveDate');
const triptype1 = document.getElementById('triptype1');
const triptype2 = document.getElementById('triptype2');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




const validateInputs = () => {
    
    const departureValue = departure.value.trim();
    const arrivingValue = arriving.value.trim();
    const name1Value = name1.value.trim();
    const name2Value = name2.value.trim();
    const namefnValue = namefn.value.trim();
    const emailValue = email.value.trim();
    const departDateValue = departDate.value.trim();
    const mobileValue = mobile.value.trim()
    const arriveDateValue = arriveDate.value.trim();
    
    
    
    if (triptype1.checked || triptype2.checked ){
        
        setSuccess(triptype1);
      }                 
      else{
    
        setError(triptype1, ('Select One-way or Round-trip' ));
        
      }

    

    if(arrivingValue === '') {
        setError(arriving, 'Destination is required');
    } else {
        setSuccess(arriving);
    }

    if(departureValue === '') {
        setError(departure, 'City of Departure is required');
    } else {
        setSuccess(departure);
    }

    const len1=name1Value.length;
    if(name1Value === '') {
        setError(name1, 'Enter Correct Name for Passenger 1');
    } 
    else if(len1<6) {
        setError( name1, 'Enter Correct Name for Passenger 1  with more than 5 characters');
    }
    
    else {
        setSuccess(name1);
    }

    const len2=name2Value.length;
    if(name2Value === '') {
        setError(name2, 'Enter Correct Name for Passenger 2');
    } 
    else if(len2<6) {
        setError( name2, 'Enter Correct Name for Passenger 2  with more than 5 characters');
    }
        else {
        setSuccess(name2);
    }

    const len3=namefnValue.length;
    if(namefnValue === '') {
        setError(namefn, 'Enter Full Name ');
    } 
    else if(len3<6) {
        setError( namefn, 'Enter Full Name with more than 5 characters');
    }
        else {
        setSuccess(namefn);
    }



    

    if(emailValue === '') {
        setError(myemail, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(myemail, 'Provide a valid email address');
    } else {
        setSuccess(myemail);
    }

      if (!departDateValue){
        setError(departDate, 'Enter valid date');
      }                 
      else{
        setSuccess(departDate);
      }
  
      if ( triptype2.checked ){

      if (!arriveDateValue){
        setError(arriveDate, 'Enter valid date');
      }                 
      else{
        setSuccess(arriveDate);
        }}

      if ( (!mobileValue)){
        setError(mobile, 'Enter valid mobile number');
      } else if (mobileValue.length !=10){
        setError(mobile, 'Enter valid mobile number with 10 digits');
      }
      else{
        setSuccess(mobile);
      }
          

};


