
 
 function moveSideNav() {
     var sidenav = document.getElementById("side-nav")
     var body = document.getElementsByTagName('main')
     
  
     if (localStorage.getItem('isOpen') == "true") {
         isOpen = false;
         localStorage.setItem('isOpen', false);
         sidenav.style.width = "0"
         body[0].style.marginLeft = "0px"
     
     }
     else {
         isOpen = true;
         localStorage.setItem('isOpen', true);
         
         sidenav.style.width = "11rem"
         body[0].style.marginLeft= "11rem"
         
 
 
     }    
 }
 

 
  