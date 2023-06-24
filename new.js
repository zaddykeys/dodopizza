function openMe(){
const promt = [prompt("whats your name")]
let hour = new Date()
let d = hour.getHours()
 if(d > 0, d < 11){
  let greeting  =`Good Morning \n`;
  alert(  greeting + promt + " "+`welcome to our webpage your favourite pizza awaits!!`);
 
 }
 else if (d > 11, d < 20) {
 let greeting1 = `Good day\n `;
  alert(  greeting1 + promt + " "+`welcome to our webpage your favourite pizza awaits!!`);
 
 }
  else {
 let greeting2 = `Good Night\n`;
  alert(  greeting2 + promt + " "+`thanks for stoping by but sorry we are closed`);
 
}
};
function openNav(){
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 
  function showlog() {
    document.getElementById("login").style.width ="100%";
    alert("Dear customer\nPlease let us know if  you have any complains");
  }
  function closelog(){
    document.getElementById("login").style.width ="0%";
  }
function img(){
  document.getElementById("myModal").style.display= "block";
  document.getElementById("myModal").style.transition = "0.5s";
  document.getElementById("img01").src = "/images/dulux offer.jpg";
  document.getElementById("img01").style.transition = "5s";
  document.getElementById("caption").innerHTML = "DULUX OFFER";
}
function closeModal(){
  document.getElementById("myModal").style.display = "none";
  document.getElementById("myModal").style.transition = "0.3s";

}

  function img1(){
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").style.transition = "0.5s";
    document.getElementById("img01").src = "/images/familydeal.jpg";
    document.getElementById("img01").style.transition = "5s";
    document.getElementById("caption").innerHTML = "FAMILY DEAL";
  }
  function closeModal(){
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal").style.transition = "0.3s";
  }
  function img2(){
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").style.transition = "0.5s";
    document.getElementById("img01").src = "/images/favicon5.ico";
    document.getElementById("img01").style.transition = "5s";
    document.getElementById("caption").innerHTML = "DODO COINS";
  }
  function closeModal(){
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal").style.transition = "0.3s";
  }; 
  function validationByChange(){
  let tel = document.forms["myform"]["tel"].value
  if(isNaN(tel || tel.lenght.min(11))){
    document.getElementById("demo").innerHTML = "invalid input!";
    return false;
  }else{
    document.getElementById("demo").innerHTML = " ";
  };
  }
  function validationByFocus(){
    let mail = document.forms["myform"]["email"].value;
    let sms =  "@gmail.com";
    let sms2 =  "@email.com";
    if (mail.match(sms) ) {
      document.getElementById("demo1").innerHTML = " ";
    }else if (mail.match(sms2) ){
      document.getElementById("demo1").innerHTML = " ";
    }else{
      document.getElementById("demo1").innerHTML = "invalid mail!";
      return false;
    }
  }
  function upperCasing(){
  let userInput = document.getElementById("inputField");
  userInput.value = userInput.value.toUpperCase();
  }
  // back up validation code on submit
  function validation(){
    let tel = document.forms["myform"]["tel"].value
    if(isNaN(tel || mail.max(11))){
      document.getElementById("demo").innerHTML = "invalid input!";
      return false;
    }else{
      document.getElementById("demo").innerHTML = " ";
    };
    let mail = document.forms["myform"]["email"].value;
    let sms =  "@gmail.com";
    let sms2 =  "@email.com";
    if (mail.match(sms) ) {
      document.getElementById("demo1").innerHTML = " ";
    }else if (mail.match(sms2) ){
      document.getElementById("demo1").innerHTML = " ";
    }else{
      document.getElementById("demo1").innerHTML = "invalid mail!";
      return false;
    }
  }
  function myorder() {
    document.getElementById("orders").style.width = "100% ";
  }
  function closeorders(){
    document.getElementById("orders").style.width = "0%";
  }
