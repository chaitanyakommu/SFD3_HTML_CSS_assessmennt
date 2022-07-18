function validate(){
    let sDepature = document.getElementById("Depature").value;
    let sArrival = document.getElementById("Arrival").value;
    if (sDepature===""){
        document.getElementById("error").style.display="block";
        document.getElementById("errMsg").innerHTML="Please Enter Departure Details";
        return false;
    }
    if (sArrival===""){
        document.getElementById("error").style.display="block";
        document.getElementById("errMsg").innerHTML="Please Enter Destination Details";
        return false;
    }
    let sMobile = document.getElementById("Mobile").value;
    let sEmail = document.getElementById("Email").value;
    
    if (sMobile===""){
        document.getElementById("error").style.display="block";
        document.getElementById("errMsg").innerHTML="Please Enter Mobile Details";
        return false;
    }
    if (sEmail===""){
        document.getElementById("error").style.display="block";
        document.getElementById("errMsg").innerHTML="Please Enter Email Details";
        return false;
    }
    let soneway = document.getElementById("Oneway").checked;
    let sDepartureDate = document.getElementById("DepartureDate").value;
    if (soneway===true){
        if(sDepartureDate===""){
        document.getElementById("error").style.display="block";
        document.getElementById("errMsg").innerHTML="Please Enter the Departure Date";
        return false;
        }
    }
    let sRound = document.getElementById("Round").checked;
    let sreturnDate = document.getElementById("ReturnDate").value;
    if (sRound===true){
        if(sreturnDate===""){
        document.getElementById("error").style.display="block";
        document.getElementById("errMsg").innerHTML="Please Enter the Departure Date";
        return false;
        }
    }
    
    return true;
}