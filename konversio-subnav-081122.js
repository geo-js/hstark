// Subnav START //
// On Start:
(function() {
	document.getElementById("sub-menu-link-text-1").classList.add("is-startseite");
	document.getElementById("sub-menu-link-text-2").classList.add("is-startseite");
    document.getElementById("sub-menu-link-text-3").classList.add("is-startseite");
    document.getElementById("sub-menu-link-text-4").classList.add("is-startseite");
    document.getElementById("sub-menu-link-text-5").classList.add("is-startseite");
    document.getElementById("sub-menu-link-text-6").classList.add("is-startseite");
    document.getElementById("sub-menu-link-text-7").classList.add("is-startseite");
   	document.getElementById("sub-menu-link-text-8").classList.add("is-startseite");
   	document.getElementById("sub-menu-link-text-9").classList.add("is-startseite");
    document.getElementById("sub-menu-link-text-10").classList.add("is-startseite");
    document.getElementById("sub-menu-link-text-11").classList.add("is-startseite");
   	document.getElementById("subnav-bg-filled").style.display = "none";
    document.getElementById("subnav-bg-outline").style.display = "block";
	document.getElementById("subnav-bg-filled-2").style.display = "none";
    document.getElementById("subnav-bg-outline-2").style.display = "block";  
})();

// If Scrolling
document.addEventListener('DOMContentLoaded', function(e) {
	document.addEventListener('scroll', function(e) {
	let currentScroll = window.scrollY;
		if(currentScroll >= 200) { 
        document.getElementById("sub-menu-link-text-1").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-2").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-3").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-4").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-5").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-6").classList.remove("is-startseite");
        document.getElementById("sub-menu-link-text-7").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-8").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-9").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-10").classList.remove("is-startseite");
    	document.getElementById("sub-menu-link-text-11").classList.remove("is-startseite");
		document.getElementById("subnav-bg-filled").style.display = "block";
    	document.getElementById("subnav-bg-outline").style.display = "none";
        document.getElementById("subnav-bg-filled-2").style.display = "block";
    	document.getElementById("subnav-bg-outline-2").style.display = "none"; 
        }
        if(currentScroll <= 200) {  
        document.getElementById("sub-menu-link-text-1").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-2").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-3").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-4").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-5").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-6").classList.add("is-startseite");
        document.getElementById("sub-menu-link-text-7").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-8").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-9").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-10").classList.add("is-startseite");
    	document.getElementById("sub-menu-link-text-11").classList.add("is-startseite");
   		document.getElementById("subnav-bg-filled").style.display = "none";
    	document.getElementById("subnav-bg-outline").style.display = "block";
        document.getElementById("subnav-bg-filled-2").style.display = "none";
    	document.getElementById("subnav-bg-outline-2").style.display = "block";  
        }
    })
})
