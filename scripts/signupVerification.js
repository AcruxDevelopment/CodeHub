function validateSignup()
{
	//fmt stands for formated
	const fmtName = document.forms["login-form"]["username"].value.trim();
	const fmtPin = document.forms["login-form"]["password"].value.trim();

	//validate name
	if(fmtName == "")
	{
		alert("[Invalid Form] You must fill the name field.");
		return false;
	}

	//pin must be >= 6 characters
	if(fmtPin.length < 6)
	{
		alert("[Invalid Form] Your password must be at least 6 characters long.");
		return false;
	}
	//pin must have at least one special character                                                                                                           
	if(!fmtPin.match("([^a-zA-Z0-9]+)"))
	{ 
		alert("[Invalid Form] Password must have at least one special character.");
		return false;
	}
	//pin must have an uppercase letter
	if(!fmtPin.match("[A-Z]"))
	{
		alert("[Invalid Form] Password must have at least a uppercase letter.");
		return false;
	}
	//pin must have an uppercase letter
	if(!fmtPin.match("[a-z]"))
	{
		alert("[Invalid Form] Password must have at least a lowercase letter.");
		return false;
	}
	//pin must have at least 1 digit letter
	if(!fmtPin.match("[0-9]"))
	{
		alert("[Invalid Form] Password must have at least one digit.");
		return false;
	}

	return true;
}

function displayPinValidation()
{
	//fmt -> formated
	const fmtName = document.forms["login-form"]["username"].value.trim();
	const fmtPin = document.forms["login-form"]["password"].value.trim();
	const isPinEmpty = fmtPin == "";

	//these are the elements used to show the password requierements to the user
	//these are <li> html elements containing a <p> tag with the text of the requierement
	let req_6_char = document.getElementById("req_6_char");
	let req_special_char = document.getElementById("req_special_char");
	let req_upper_char = document.getElementById("req_upper_char");
	let req_lower_char = document.getElementById("req_lower_char");
	let req_digit = document.getElementById("req_digit");

	//set all the requierements to green by default, however, if the password field is empty
	//just make them gray since validating a password that the user has still not typed seems like a poor
	//design choise for me.
	const gray = "#3c3c3c";
	const green = "green";
	const defaultColor = isPinEmpty ? gray : green;
	req_6_char.style.color = defaultColor;
	req_special_char.style.color = defaultColor;
	req_upper_char.style.color = defaultColor;
	req_lower_char.style.color = defaultColor; 
	req_digit.style.color = defaultColor;

	//do not evaluate if pin is empty, just use the default colors setted before
	if(isPinEmpty)
	{
		return;
	}

	//pin must be >= 6 characters
	if(fmtPin.length < 6)
	{
		req_6_char.style.color = "red";
	}
	//pin must have at least one special character                                                                                                           
	if(!fmtPin.match("([^a-zA-Z0-9]+)"))
	{ 
		req_special_char.style.color = "red";
	}
	//pin must have an uppercase letter
	if(!fmtPin.match("[A-Z]"))
	{
		req_upper_char.style.color = "red";
	}
	//pin must have an lowercase letter
	if(!fmtPin.match("[a-z]"))
	{
		req_lower_char.style.color = "red";
	}
	//pin must have at least 1 digit letter
	if(!fmtPin.match("[0-9]"))
	{
		req_digit.style.color = "red";
	}
}