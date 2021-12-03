"use strict";
// LOGIN SECTION START
function submit(){
let loginSection =  document.getElementById("login-section"); //login Name and Pass Section
let accountSection =  document.getElementById("account-section-1149"); //Bank lenden Section
let userNameBlank = document.getElementById("email");  //login Section input Email Id
let userPasswordBlank = document.getElementById("pass");  //login Section input Password Id
let userName = document.getElementById("email").value; //login Section input te Email 
let userPassword = document.getElementById("pass").value;//login Section input text Email 
let modal=  document.getElementById("modal-content");


 if ( userName == "azim" && userPassword == "1149" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-1149").style.display="block";
    document.getElementById("footerId").style.display="block";
    accountSection2.style.display="block"; // account section show korbe
 } else if ( userName == "ansar" && userPassword == "219" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-219").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "sahjahan" && userPassword == "645" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-645").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "mobin" && userPassword == "429" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-429").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "forhad" && userPassword == "230" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-230").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "rian" && userPassword == "262" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-262").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "rinel" && userPassword == "279" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-279").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "ahasan" && userPassword == "1126" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-1126").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "noyon" && userPassword == "726" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-726").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "sabbir" && userPassword == "950" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-950").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "opi" && userPassword == "1150" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-1150").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "josim" && userPassword == "1141" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-1141").style.display="block";
    document.getElementById("footerId").style.display="block";
 } 

  else if ( userName == "musfiq" && userPassword == "259" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-259").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "sar" && userPassword == "sarwar" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-sar").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "korshed" && userPassword == "811" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-811").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "zia" && userPassword == "743" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-743").style.display="block";
    document.getElementById("footerId").style.display="block";
 }else if ( userName == "" && userPassword == "") { //if userId and Password eql Null hoi
    
    modal.innerHTML="You can't leave blank username and password !";
    
    modal.style.display="block";
    userNameBlank.style.border="1px solid #e22424";
    userNameBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userPasswordBlank.style.border="1px solid #e22424";
    userPasswordBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
} else if ( userName == admin) {
    modal.innerText="Incorrect password !";
    userPasswordBlank.style.border="1px solid #e22424";
    userPasswordBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userPasswordBlank.value="";
    userPasswordBlank.placeholder="Password must be 8 characters";
} else if ( userPassword == adminPass ){
    modal.innerText="Incorrect username !";
    modal.style.display="block";
    userNameBlank.style.border="1px solid #e22424";
    userNameBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userNameBlank.value="";
    userNameBlank.placeholder="example@gmail.com";
} else {
    modal.innerText="Incorrect username & password !";
    modal.style.display="block";
    userNameBlank.style.border="1px solid #e22424";
    userNameBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userPasswordBlank.style.border="1px solid #e22424";
    userPasswordBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userNameBlank.value="";
    userNameBlank.placeholder="example@gmail.com";
    userPasswordBlank.value="";
    userPasswordBlank.placeholder="Password must be 8 characters";
};
userNameBlank.onclick = function() {
    modal.style.display = "none";
  };
  userPasswordBlank.onclick = function() {
    modal.style.display = "none";
  };
};

// LOGIN SECTION END

// TRANSECTTION SECTION START
function dipositmony() {
    let diposit = document.getElementById("diposit").value;
    console.log("Diposit: "+diposit);
    if ( diposit == "" ) {
        alert("Enter a valid amount");
        diposit = 0;
    } ;
    diposit = parseInt(diposit); 
    console.log("Diposit: "+diposit);
    if ( diposit > 99999999999 ) {
        alert("Amount is to high");
        diposit = 0;
    } ;
    let balance = document.getElementById("balance").innerHTML;
    balance = parseInt(balance);
    console.log("Balance data: "+balance);
    
    let balance2 = balance + diposit;
    document.getElementById("balance").innerHTML = balance2;
    document.getElementById("diposit").value = "";
    
    console.log("Balance new data: "+balance2);

    let totalBalence = document.getElementById("totalbalance").innerHTML;
    totalBalence = parseInt(totalBalence);
    console.log(totalBalence);
    let subTotalBalence = totalBalence + diposit;
    document.getElementById("totalbalance").innerHTML = subTotalBalence;
    console.log("Subtotal balance: "+subTotalBalence);
};

function creditmony() {
    let credit = document.getElementById("credit").value;
    if ( credit == "" ) {
        alert("Enter a valid amount");
        credit = 0;
    };
    credit= parseInt(credit);
    console.log("credit"+credit);
    let crbalance = document.getElementById("crbalance").innerHTML;
    crbalance = parseInt(crbalance);
    console.log("Credit data: "+crbalance);
    let totalCredit = crbalance + credit;
    document.getElementById("credit").value = "";
   
    document.getElementById("crbalance").innerHTML = totalCredit;
    console.log("Credit new data: "+totalCredit);

    let totalBalence = document.getElementById("totalbalance").innerHTML;
    totalBalence = parseInt(totalBalence);
    
    let subTotalBalence = totalBalence - credit;
    if ( credit >= subTotalBalence ) {
        alert('Have not sufficient balance\nIt refund after next diposit');
    }
    document.getElementById("totalbalance").innerHTML = subTotalBalence;
    console.log("Subtotal balance: "+subTotalBalence)
    };
// TRANSECTTION SECTION END