// Subnav START //
// On Start:
(function() {
	document.getElementById("sub-menu-link-text-1").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-2").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-3").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-4").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-5").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-6").classList.add("is-startseite");
   	document.getElementById("subnav-bg-filled").style.display = "block";
    	document.getElementById("subnav-bg-outline").style.display = "none";    
})();

// If Scrolling
document.addEventListener('DOMContentLoaded', function(e) {
    document.addEventListener('scroll', function(e) {
        let currentScroll = window.scrollY;


        if(currentScroll >= $( window ).height()) { 
           document.getElementById("sub-menu-link-text-1").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-2").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-3").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-4").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-5").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-6").classList.remove("is-startseite");
        }
     
        if(currentScroll <= $( window ).height()) {  
            
        }
     
    })
})

