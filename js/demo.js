

// ------------------------------login----------------------------

	var modal = document.getElementById('login');

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}



// ---------------------------------loader----------------------------------


	var x;
	function load() {
	    x = setTimeout(showpage, 1000);
	}

	function showpage() {
	  	document.getElementById("loader").style.display = "none";
	  	document.getElementById("myDiv").style.display = "block";
	}


// ------------------------------login validate-------------------


function validateForm() {
	var un = document.loginform.username.value;
	var pw = document.loginform.psw.value;
	var username = '19mca031';
	var password = 'nirma';
	if (un==username && pw==password) {
		window.localStorage.setItem('username',username);
		return true;
	}else{
		alert('Login Unsuccessful.');
		return false;
	}
}