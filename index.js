console.log('Starting debug');
function getInputFromTextBox() {

  var departureCountry = document.getElementById("departurecountry").value;
  var arrivalCountry = document.getElementById("arrivalcountry").value;
  var tripStart = document.getElementById("tripstart").value;
  var tripReturn = document.getElementById("tripreturn").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var passenger1Name = document.getElementById("passenger1name").value;
  var passenger2Name = document.getElementById("passenger2name").value;

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  console.log('departureCountry '+departureCountry);
  console.log('departureCountry '+arrivalCountry);
  console.log('tripStart '+tripStart);
  console.log('tripReturn '+tripReturn);
  console.log('email '+email);
  console.log('passenger1Name '+passenger1Name);
  console.log('passenger2Name '+passenger2Name);
  console.log('Today '+date);

  var ele = document.getElementsByName('exampleRadios');
              
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      console.log(ele[i].value);
  }

  if(departureCountry === "" || arrivalCountry === "" || tripStart === "" || tripReturn === "" || email === "" || phone === ""){
    window.alert("Please fill all the mandatory inputs. All mandatory inputs are marked with *");
  } else if ((passenger1Name != "" && passenger1Name.length <5)||(passenger2Name != "" && passenger2Name.length <5)) {
    window.alert("The passenger should not be less than 5 characters.");
  } else if (new Date(tripStart).getTime() < new Date(date).getTime()) {
    window.alert("The departure date cannot be a past date.");
  } else if ((document.getElementById('roundtrip').checked) && (new Date(tripReturn).getTime() < new Date(date).getTime())) {
    window.alert("The arrival date cannot be a past date.");
  } else if ((document.getElementById('roundtrip').checked) && (new Date(tripReturn).getTime() < new Date(tripStart).getTime())) {
    window.alert("The arrival date cannot be less than departure date.");
  }
  else {
    window.alert("Success");
  }

}
function isReturn() {
    if (document.getElementById('roundtrip').checked) {
        document.getElementById('return').style.visibility = 'visible';
    }
    else document.getElementById('return').style.visibility = 'hidden';

}
