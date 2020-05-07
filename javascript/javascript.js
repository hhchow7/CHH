function checkLogin(user, pw) {
  if (Math.floor(Math.random()*3) == 0){
	  alert("Error:user and password are incorrect!!!");
	  return false;
  }
  else{
	  alert("Correct user and password!");
	  return true;
  }
}


       /*Star rating*/
        
       const ratings = {
        HTML: 4.5,
        CSS: 4,
        javascript:3.5,
        swift: 4.5,
        sql: 3,
        java: 3.5,
        cplusplus:3.5
  
       
      }
  
          const starsTotal = 5;
  
          document.addEventListener('DOMContentLoaded', getSkillRatings);
  
          function getSkillRatings(){
            for(let rating in ratings){
  
              const starPercentage = (ratings[rating] / starsTotal) * 100;
  
              const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  
              document.querySelector(`#${rating} .star-inner`).style.width = starPercentageRounded;
              
            }
            
          }




/* Nav Bar */
window.onscroll = function() {myFunction()};
        
var navbar = document.getElementById("navigationBar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//Photo SlideShow

var myIndex = 0;
var webIndex = 0;
carousel();

function carousel() {
  var i;
  var j;
  var x = document.getElementsByClassName("photoSlide_fyp");
  var y = document.getElementsByClassName("photoSlide_web");
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  


    for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  webIndex++;
  if (webIndex > y.length) {webIndex = 1}    
  y[webIndex-1].style.display = "block";  



  setTimeout(carousel, 2000); // Change image every 2 seconds
  
}


