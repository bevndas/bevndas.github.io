$('document').ready(function() {
	console.log('help');
	openNav();

});
	function openNav() {
    /*
     document.getElementById("inavb1").style.width = "250px";
      document.getElementById("inavb2").style.width = "250px";
       document.getElementById("inavb3").style.width = "250px";
        document.getElementById("inavb4").style.width = "250px";
        document.getElementById("inavb1").style.opacity = "1";
        document.getElementById("inavb2").style.opacity = "1";
        document.getElementById("inavb3").style.opacity = "1";
        document.getElementById("inavb4").style.opacity = "1";*/
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("close").style.opacity = "1";
        var x= document.getElementsByClassName('nav');
	   	for(let i = 0; i< x.length ; i++) {
	   		x[i].style['width'] = '250px';
	   		x[i].style['opacity'] = '1';
	   	}
        
}

function closeNav() { 
     /*document.getElementById("inavb1").style.width = "0";
      document.getElementById("inavb2").style.width = "0";
       document.getElementById("inavb3").style.width = "0";
        document.getElementById("inavb4").style.width = "0";
        document.getElementById("inavb1").style.opacity = "0";
        document.getElementById("inavb2").style.opacity = "0";
        document.getElementById("inavb3").style.opacity = "0";
        document.getElementById("inavb4").style.opacity = "0";*/
            var x= document.getElementsByClassName('nav');
           document.getElementById("close").style.opacity = "0";
	   	for(let i = 0; i< x.length ; i++) {
	   		x[i].style['width'] = '0px';
	   		x[i].style['opacity'] = '0';
	   	}
   		function  som() {
         document.getElementById("mySidenav").style.width = "0";
        }
        setTimeout(som, 500);
  
     
}