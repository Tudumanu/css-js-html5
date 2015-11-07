function loginValido() {
	var valido = true;
	
	if (!usernameValido())
		valido = false;
		
	if (!passwordValido())
		valido = false;
	
	return valido;
}

//username
function usernameValido() {
	document.getElementById('username-error').textContent = '';
	var userVal = document.getElementById('username').value;
	
	if (userVal == '' || userVal.length < 5) {
		document.getElementById('username-error').textContent = 'Favor fornecer um nome com ao menos 5 letras';
		return false;
	}
	
	return true;
}

//password
function passwordValido() {
	document.getElementById('password-error').textContent = '';
	var passwdVal = document.getElementById('password').value;
	
	if (passwdVal == '' || passwdVal.length < 6) {
		document.getElementById('password-error').textContent = 'Favor fornecer uma senha com ao menos 6 caracteres';
		return false;
	}
	
	return true;
}

function initLoginValidacao() {
	document.getElementById('username').onchange = usernameValido;
	document.getElementById('password').onchange = passwordValido;
}