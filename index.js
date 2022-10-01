let globalIsSubmit = false

function validate(isSubmit) {
	if(isSubmit) {
		globalIsSubmit = true
	}

	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password').value
	
	let confCode = document.getElementById('conf-code').value
	let tnC = document.getElementById('t-and-c').checked

	if(globalIsSubmit) {
		if(firstName.length >= 2) {
			document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
		} else {
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
		}
	
		if(lastName.length >= 2) {
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
		} else {
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
		}
	
	
		if (
			email.includes("@") && 
			email.includes(".") && 
			email.indexOf("@") > 0 &&
			email.substr(email.lastIndexOf('.') + 1).length >= 2
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
		}
	
	
		if (password >= 8) {
			document.getElementById("password-valid").style.display = "block";
			document.getElementById("password-invalid").style.display = "none";
		} else {
			document.getElementById("password-invalid").style.display = "block";
			document.getElementById("password-valid").style.display = "none";
		}
	
		
		
		
		if (confCode>=8
			
		) {
			document.getElementById("conf-valid").style.display = "block";
			document.getElementById("conf-invalid").style.display = "none";
		} else {
			document.getElementById("conf-invalid").style.display = "block";
			document.getElementById("conf-valid").style.display = "none";
		}
	
		if(tnC) {
			document.getElementById("tNC-invalid").style.display = "none"
		} else {
			document.getElementById("tNC-invalid").style.display = "block"
		}
	}
}