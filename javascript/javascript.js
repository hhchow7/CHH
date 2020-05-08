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







$(document).on('scroll', function() {
  
 
  if($(this).scrollTop()>=$('#Home').position().top + (-100)){
    changeNavStyle('Home');
  }
   if($(this).scrollTop()>=$('#background').position().top + (-60)){
    changeNavStyle('background');
  }
  if($(this).scrollTop()>=$('#education').position().top + (-60)){
    changeNavStyle('education');
  }
  if($(this).scrollTop()>=$('#employment').position().top + (-60)){
    changeNavStyle('employment');
  }
   if($(this).scrollTop()>=$('#skill').position().top + (-60)){
    changeNavStyle('skill');
  }
   if($(this).scrollTop()>=$('#project').position().top + (-60)){
    changeNavStyle('project');
  }
   if($(this).scrollTop()>=$('#other').position().top + (-60)){
    changeNavStyle('other');
  }



});


function changeNavStyle(navID){

  //remove previous active nav
  var activeBarItem = document.getElementsByClassName("activeNav");
  while (activeBarItem.length)
  activeBarItem[0].classList.remove("activeNav");

    //add active nav
    var element = document.querySelector("#navigationBar");
    var childElement=element.querySelector('a[href="#'+ CSS.escape(navID) + '"]');
    childElement.classList.add("activeNav");


}

