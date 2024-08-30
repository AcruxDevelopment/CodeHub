function Login(homePagePath)
{
	console.log("Submit invoked.");

	//prevent form from resetting
	event.preventDefault();

	//fmt -> formated
	const fmtName = document.forms["login-form"]["name"].value.trim();
	const fmtPin = document.forms["login-form"]["password"].value.trim();

	//debug formatted inputs
	console.log("fmtName: " + fmtName);
	console.log("fmtPin:  " + fmtPin);

	//store form
	if(localStorage.getItem("name") != fmtName)
	{
		alert("No account of username '" + fmtName + "' registered.");
		return false;
	}
	if(localStorage.getItem("password") != fmtPin)
	{
		alert("Password is incorrect.");
		return false;
	}

	window.location.href = homePagePath;
	return true;
}